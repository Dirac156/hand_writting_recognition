# app/utils/file_operations.py

def read_file(filepath):
    with open(filepath, 'r') as file:
        data = file.read()
    return data

def write_file(filepath, data):
    with open(filepath, 'w') as file:
        file.write(data)
