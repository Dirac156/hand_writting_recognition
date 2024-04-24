# config.py

import os

# Base directory of the application
basedir = os.path.abspath(os.path.dirname(__file__))

# SQLite database file
SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'app.db')
SQLALCHEMY_TRACK_MODIFICATIONS = False


UPLOAD_FOLDER = os.path.join(basedir, "files")
PREDICTION_FOLDER = os.path.join(basedir, 'predictions')
MODEL_WEIGHTS_PATH = os.path.join(basedir, '*.pht')