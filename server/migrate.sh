source venv/Scripts/activate
flask db init  # Initialize migrations directory (only once)
flask db migrate -m "Initial migration"  # Generate migration script
flask db upgrade  # Apply migrations to the database
