import numpy as np
from sklearn.ensemble import IsolationForest

model = IsolationForest(contamination=0.1)

def detect_anomaly(data):
    X = np.array(data).reshape(-1, 1)
    model.fit(X)
    return model.predict(X)
