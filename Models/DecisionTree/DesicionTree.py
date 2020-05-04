#Importing Libraries
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
%matplotlib inline
import random
from pprint import pprint
from sklearn import tree
import pandas as pd
import pydotplus
from IPython.display import Image
import pickle

#importing dataset
df = pd.read_csv("Anur.csv")
df = df.drop(columns=['WindSpeed Kmph', 'Wind Dir 16 Point', 'Visibility', 'Pressure', 'HeatIndex C', 'Dew Point C','Dew Point C', 'Wind Gust Kmph','Feels Like C', 'WindChill C'], axis = 1)
df = df.rename(columns={"Weather Desc": "Label"})

#split dataset to train data set and test data set
def train_test_split(df, test_size):
    if isinstance(test_size, float):
        test_size = round(test_size * len(df))

    indices = df.index.tolist()
    test_indices = random.sample(population=indices, k=test_size)

    test_df = df.loc[test_indices]
    train_df = df.drop(test_indices)

    return train_df, test_df


#calling the function to split dataset
random.seed(0)
train_df, test_df = train_test_split(df, test_size = 0.1)

#inserting the inputs labels
dummy_data = pd.get_dummies(train_df[['Temp C', 'Precip MM', 'Humidity','Cloudcover']])
print(dummy_data)

#define and train the model
classifier = tree.DecisionTreeClassifier()
classifier_train = classifier.fit(dummy_data, train_df['Label'])
dot_data = tree.export_graphviz(classifier_train, out_file=None , feature_names=list(dummy_data.columns.values), rounded=True, filled=True, class_names= train_df['Label'].unique())

#save the model
filename = 'finalized_tree.sav'
pickle.dump(classifier_train, open(filename, 'wb'))
