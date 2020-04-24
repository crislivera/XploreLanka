import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
#%matplotlib inline
from statsmodels.tools.eval_measures import rmse
from sklearn.preprocessing import MinMaxScaler
from keras.preprocessing.sequence import TimeseriesGenerator
from keras.models import Sequential
from keras.layers import Dense
from keras.layers import LSTM
from keras.layers import Dropout
import warnings

warnings.filterwarnings("ignore")

df = pd.read_csv('Colo.csv')

# %%

df

# %%

df.Date = pd.to_datetime(df.Date)
df = df.set_index('Date')

# %%

df

# %%

train, test = df[:-12], df[-12:]
# training data will grab until last year
# testing data will use only last year

# %%

scaler = MinMaxScaler()
scaler.fit(train)
train = scaler.transform(train)
test = scaler.transform(test)

# %% md

# Training

# %%

n_input = 365
n_features = 1

generator = TimeseriesGenerator(train, train, length=n_input, batch_size=6)
# greater the batch size the faster it trains and less accurate the model will be

model = Sequential()
# it got a single input & a Single output
model.add(LSTM(200, activation='relu', input_shape=(n_input, n_features)))
model.add(Dropout(0.15))
# it is forced to learn an redundant application by always dropping out 15% of it's data
model.add(Dense(1))

model.summary()

# %%

model.compile(optimizer='adam', loss='mse')
# mse = Mean Squared Error
# in mse method we don't use " "model.compile(metrics=['accuracy'])"

model.fit_generator(generator, epochs=1)

# %%

pred_list = []

batch = train[-n_input:].reshape((1, n_input, n_features))

for i in range(n_input):
    pred_list.append(model.predict(batch)[0])
    batch = np.append(batch[:, 1:, :], [[pred_list[i]]], axis=1)

# %%

df_predict = pd.DataFrame(scaler.inverse_transform(pred_list), index=df[-n_input:].index, columns=['Predictions'])

df_test = pd.concat([df, df_predict], axis=1)

# %%

df_test.tail(365)
y_predicted = model.predict(df_predict)
print("Accuracy: %.2f%%" % (df_test[1]*100))
# %%

plt.figure(figsize=(25, 15))
plt.plot(df_test.index, df_test['Temp C'])
plt.plot(df_test.index, df_test['Predictions'], color='r')
plt.show()

# %%

train = df

scaler.fit(train)
train = scaler.transform(train)

n_input = 365
n_features = 1

generator = TimeseriesGenerator(train, train, length=n_input, batch_size=6)

model.fit_generator(generator, epochs=180)

pred_list = []

batch = train[-n_input:].reshape((1, n_input, n_features))

for i in range(n_input):
    pred_list.append(model.predict(batch)[0])
    batch = np.append(batch[:, 1:, :], [[pred_list[i]]], axis=1)

# %%

from pandas.tseries.offsets import DateOffset

add_dates = [df.index[-1] + DateOffset(days=x) for x in range(0, 367)]
future_dates = pd.DataFrame(index=add_dates[1:], columns=df.columns)

# %%

future_dates.tail(365)

# %%

df_predict = pd.DataFrame(scaler.inverse_transform(pred_list), index=future_dates[-n_input:].index,
                          columns=['Predictions'])

df_proj = pd.concat([df, df_predict], axis=1)

# %%

df_proj.tail(365)

# %%

plt.figure(figsize=(25, 15))
plt.plot(df_proj.index, df_proj['Temp C'])
plt.plot(df_proj.index, df_proj['Predictions'], color='r')
plt.legend(loc='best', fontsize='large')
plt.xticks(fontsize=12)
plt.yticks(fontsize=12)
plt.show()