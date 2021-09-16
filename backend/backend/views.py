from sklearn.preprocessing import StandardScaler
import numpy as np
import statsmodels.api as sm
import pandas as pd
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import os


def setModel():
    # Multinomial Logistic Regression

    # Importing the libraries
    # Importing the dataset

    dataset = pd.read_csv(os.path.join(os.path.dirname(
        os.path.dirname(__file__)), 'database.csv'))
    print(dataset)
    X = dataset[['HR', 'N']]
    y = dataset[['State']]

    # Feature Scaling
    sc = StandardScaler()
    X = sc.fit_transform(X)

    X = sm.add_constant(X)

    mnlogit_mod = sm.MNLogit(y, X)

    mnlogit_fit = mnlogit_mod.fit()

    return mnlogit_fit


class TestView(APIView):
    def get(self, request, *args, **kwargs):

        constant_HR_N = [1, 5.5, 200.62]


# constant is always 1

        mnlogit_fit = setModel()
        yhat = mnlogit_fit.predict(constant_HR_N)
        print(yhat)

        return Response(yhat)

    def post(self, request, *args, **kwargs):
        data = request.data
        arr = []
        arr.append(1)
        arr.append(data['hr'])
        arr.append(data['n'])
        print(arr)
        mnlogit_fit = setModel()
        yhat = mnlogit_fit.predict(arr)
        oldHr = data["hr"]
        oldN = data["n"]
        increment_results = []
        for i in range(0, 7):
            newHr = oldHr + oldHr*0.1
            oldHr = newHr
            newN = oldN + oldN*0.1
            arr = []
            arr.append(1)
            arr.append(newHr)
            arr.append(newN)
            y = mnlogit_fit.predict(arr)
            increment_results.append(y)

        oldHr = data["hr"]
        oldN = data["n"]
        decrement_results = []
        for i in range(0, 7):
            newHr = oldHr - oldHr*0.1
            oldHr = newHr
            newN = oldN - oldN*0.1
            arr = []
            arr.append(1)
            arr.append(newHr)
            arr.append(newN)
            y = mnlogit_fit.predict(arr)
            decrement_results.append(y)
        data = {
            "inc": increment_results,
            "dec": decrement_results,
            'results': yhat
        }

        return Response(data)