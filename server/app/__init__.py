# app/__init__.py

import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate

# Import the config.py module
import config

# Initialize Flask app
app = Flask(__name__)

# Load configuration
app.config.from_object(config)

# Initialize database
db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Enable CORS for all routes
CORS(app)

# Import routes
from app.routes import api_routes

# Print the UPLOAD_FOLDER for verification
print("UPLOAD_FOLDER:", app.config['UPLOAD_FOLDER'])