# app/routes/api_routes.py
import os
import base64
import io
from datetime import datetime
from flask import jsonify, request
from app import app, db
from app.models.database_models import Document
from ..handwritting_model.perform_ocr import ocr_prediction

@app.route('/api/documents', methods=['POST'])
def upload_document():
    if request.method == 'POST':
        # Check if the POST request has the file part
        if 'file' not in request.files:
            return jsonify({'error': 'No file part'})
        
        file = request.files['file']

        # If the user does not select a file, the browser may submit an empty part without filename
        if file.filename == '':
            return jsonify({'error': 'No selected file'})

        # Handle the file upload here
        # For example, you can save the file to a specific directory
        # Make sure to implement proper file handling and security measures
        
        # Generate unique filename (optional)
        timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
        filename = f"{timestamp}_{file.filename}"
        
        # Save the uploaded file to the 'uploads' directory
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)

        # Save file details in the database
        document = Document(
            file_path=file_path,
            file_type=file.content_type,
            upload_date=datetime.now(),
            status='uploaded',
            user_id=1  # For now, hardcode user_id to 1
        )
        db.session.add(document)
        db.session.commit()
        
        return jsonify({'message': 'File uploaded successfully'})

@app.route('/api/documents', methods=['GET'])
def get_documents():
    # Get user_id from query parameters
    user_id = request.args.get('user_id')

    # Fetch data from database based on user_id
    if user_id is not None:
        documents = Document.query.filter_by(user_id=user_id).all()
    else:
        documents = Document.query.all()

    # Convert documents to JSON format
    data = [{'file_id': doc.id, 'file_path': doc.file_path, 'file_type': doc.file_type, 'upload_date': doc.upload_date, 'status': doc.status, 'user_id': doc.user_id} for doc in documents]

    # Return JSON response
    return jsonify(data)



@app.route('/api/documents/ocr', methods=['GET'])
def perform_ocr():
    # get file_id from query parameters
    file_id = request.args.get('file_id')
    
    if file_id is not None:
        document = Document.query.filter_by(file_id=file_id).all()[0]
        
        synthetic_img_pages = ocr_prediction(document.file_path)

        # Return the synthesized image as base64 or file path
        # You may choose to save the synthesized image and return its path instead
        # or encode it as base64 and return it in the response
        # For simplicity, let's return it as base64
        # Note: You may need to install the base64 library if not already installed
        img_byte_array = io.BytesIO()
        synthetic_img_pages[0].save(img_byte_array, format='PNG')
        img_byte_array = img_byte_array.getvalue()
        encoded_img = base64.b64encode(img_byte_array).decode('utf-8')

        return jsonify({'synthesized_image_base64': encoded_img})
