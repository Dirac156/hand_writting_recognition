# app/models/database_models.py

from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username


class Document(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    file_name = db.Column(db.String(255), nullable=False, default='Document')
    file_path = db.Column(db.String(255), nullable=False)
    file_type = db.Column(db.String(100), nullable=False)
    upload_date = db.Column(db.DateTime, nullable=False)
    status = db.Column(db.String(50), default='uploaded')
    user_id = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return f"<Document {self.id}>"
    
class OCRPrediction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    document_id = db.Column(db.Integer, db.ForeignKey('document.id'))
    prediction_path = db.Column(db.String(255))  # Path to the synthesized image or OCR text file
    status = db.Column(db.String(50))  # Status of the prediction (e.g., completed, failed)
    # Add more fields as needed

    def __repr__(self):
        return f'<OCRPrediction {self.id}>'