import pandas as pd
import numpy as np
import tensorflow as tf
import calendar
import mysql.connector
from mysql.connector import Error
from sklearn.preprocessing import MinMaxScaler
import pickle
from sqlalchemy import create_engine


def runModel(place, attribute, modelname):
    print("Executing run Model")
    maindf = pd.read_csv(place)
    maindf['Date'] = pd.to_datetime(maindf['Date'])
    maindf = maindf.set_index('Date')
    TestData = maindf.tail(365)
    Df_Total = pd.concat((maindf[[attribute]], TestData[[attribute]]), axis=0)
    inputs = Df_Total[len(Df_Total) - len(TestData) - 60:].values

    print("working")
    # Recreate the exact same model, including its weights and the optimizer
    regressor = tf.keras.models.load_model(modelname)

    sc = MinMaxScaler(feature_range=(0, 1))
    inputs = Df_Total[len(Df_Total) - len(TestData) - 60:].values

    # We need to Reshape
    inputs = inputs.reshape(-1, 1)

    # Normalize the Dataset
    inputs = sc.fit_transform(Df_Total)
    inputs = sc.transform(Df_Total)

    X_test = []
    for i in range(60, 425):
        X_test.append(inputs[i - 60:i])

    # Convert into Numpy Array
    X_test = np.array(X_test)

    # Reshape before Passing to Network
    X_test = np.reshape(X_test, (X_test.shape[0], X_test.shape[1], 1))

    # Pass to Model
    prediction = regressor.predict(X_test)

    # Do inverse Transformation to get Values
    prediction = sc.inverse_transform(prediction)
    print("Exit run model")

    return prediction


def dbConnection(database):
    try:
        connection = mysql.connector.connect(host="159.203.105.235",
                                             database=database,
                                             user='admin',
                                             password='rusiru@1999')
        if connection.is_connected():
            db_Info = connection.get_server_info()
            print("Connected to MySQL Server version ", db_Info)
            cursor = connection.cursor()
            cursor.execute("select database();")
            record = cursor.fetchone()
            print("You're connected to database: ", record)
            return connection, cursor
    except Error as e:
        print("Error while connecting to MySQL", e)


def crowdPred(holidayDF, placeDF, date, day, place):
    isHoliday = False
    crowd = 0
    for x in range(placeDF.shape[0]):
        if str(placeDF.loc[x, 'placeName']) == place:
            for i in range(holidayDF.shape[0]):
                if str(holidayDF.loc[i, 'Date']) == date:
                    if day == 'Friday' or day == 'Saturday' or day == 'Sunday' or day == 'Monday':
                        if placeDF.loc[x, 'is_commercial']:
                            if holidayDF.loc[i, 'public'] == True and holidayDF.loc[i, 'bank'] == True and \
                                    holidayDF.loc[i, 'merchantile'] == True:
                                crowd = 1
                                break
                            else:
                                crowd = 2
                                break
                        else:
                            crowd = 3
                            break
                    else:
                        crowd = 2
                        break

                else:

                    if day == 'Saturday' or day == 'Sunday':
                        if placeDF.loc[x, 'is_commercial']:
                            crowd = 1
                            break
                        else:
                            crowd = 3

                    elif placeDF.loc[x, 'is_commercial']:
                        crowd = 3
                        break
                    else:
                        crowd = 2
                        break

    return crowd


place = "trincomalee"

connection, cursor = dbConnection('xploreLankaDataSet')
holidays = pd.read_sql("select * from Holidays", connection)
placeDF = pd.read_sql("select * from place", connection)
maindf = pd.read_sql("select * from " + place + "", connection)
pd.set_option('display.expand_frame_repr', False)

if connection.is_connected():
    cursor.close()
    connection.close()
    print("MySQL connection is closed")
# creating the data frame for saving the predicted data
# maindf.Date = pd.to_datetime(maindf.Date)
maindf = maindf.set_index('date')
from pandas.tseries.offsets import DateOffset

add_dates = [maindf.index[-1] + DateOffset(days=x) for x in range(0, 92)]
future_dates = pd.DataFrame(index=add_dates[1:],
                            columns=['day', 'weatherDesc', 'temp', 'precip', 'humidity', 'cloudcover', 'crowd'])
future_dates.reset_index(col_level=0, inplace=True)
future_dates.rename(columns={'index': 'Date'}, inplace=True)
future_dates['Date'] = pd.to_datetime(future_dates['Date'], format='%d/%m/%Y')
print(future_dates['Date'])
print(10000000)

for i in range(future_dates.shape[0]):
    future_dates.loc[i, 'day'] = calendar.day_name[future_dates.iloc[i]['Date'].weekday()]

# run the LSATM Models
tempPrediction = runModel('dataSet/Weather/Daily/Anur.csv', 'Temp C', 'savedModels/Temp_(2020)')
humidityPrediction = runModel('dataSet/Weather/Daily/Anur.csv', 'Humidity', 'savedModels/Humidity_(2020)')
precipPrediction = runModel('dataSet/Weather/Daily/Anur.csv', 'Precip MM', 'savedModels/Preciption_(2020)')
cloudcoverPrediction = runModel('dataSet/Weather/Daily/Anur.csv', 'Cloudcover', 'Cloudcover_(2020)')
# load desicion Tree
loaded_model = pickle.load(open('savedModels/finalized_tree.sav', 'rb'))

for x in range(future_dates.shape[0]):
    future_dates.loc[x, 'day'] = calendar.day_name[future_dates.iloc[x]['Date'].weekday()]
    future_dates.loc[x, 'temp'] = tempPrediction[x]
    future_dates.loc[x, 'precip'] = precipPrediction[x]
    future_dates.loc[x, 'humidity'] = humidityPrediction[x]
    future_dates.loc[x, 'cloudcover'] = cloudcoverPrediction[x]
    # run the desicion Tree
    future_dates.loc[x, 'weatherDesc'] = loaded_model.predict([[future_dates.loc[x, 'temp'],
                                                                future_dates.loc[x, 'precip'],
                                                                future_dates.loc[x, 'humidity'],
                                                                future_dates.loc[x, 'cloudcover']]])
    future_dates.loc[x, 'crowd'] = crowdPred(holidays, placeDF, str(future_dates.iloc[x]['Date']),
                                             str(future_dates.loc[x, 'day']), place)

#removing unwanted columns
future_dates = future_dates.drop(columns=['temp', 'precip', 'humidity', 'cloudcover'], axis=1)
future_dates['Date'] = pd.to_datetime(future_dates['Date'], format='%d/%m/%Y')
#send predictions to the MySQl database
engine = create_engine("mysql://admin:rusiru@1999@159.203.105.235/xploreLankaPrediction")
con = engine.connect()
future_dates.to_sql(name=place, con=con, if_exists='replace')
con.close()
