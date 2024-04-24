import React, { useState, useRef, useEffect } from 'react'
import TableComponent from '../../components/table/table.component';

const Dashboard = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [data, setData] = useState([]);
    const [success, setSucess] = useState(0);
    const fileInputRef = useRef(null);

    // Function to handle file selection
    const handleFileSelect = (event) => {
        const uploaded_file = event.target.files[0]
        event.target.value = null;
        setSelectedFile(uploaded_file);
        handleFileUpload(uploaded_file);
    };

    // Function to trigger file selection dialog
    const handleChooseFile = () => {
        fileInputRef.current.click();
    };


    // Function to handle file upload
    const handleFileUpload = (file) => {
        // Perform file upload logic here
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            // Make a POST request to upload the file to the server
            fetch('http://localhost:5000/api/documents', {
                method: 'POST',
                body: formData,
            })
                .then(response => {
                    // Handle response
                    setSucess(success + 1)
                })
                .catch(error => {
                    // Handle error
                });
        } else {
            // No file selected, handle error or display message to user
        }
    };


    // Function to retrieve uploaded documents
    const handleGetFiles = () => {
        fetch('http://localhost:5000/api/documents?user_id=1', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                if (data && (data.length)) setData(data)
                // Optionally, update state or perform any other action
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    useEffect(() => {
        if (handleGetFiles) handleGetFiles();
    }, [success])

    return (
        <div>
            <div className='dashboard p-10'>
                <div className='documents'>
                    <h2 className='font-bold text-3xl'>
                        Documents
                    </h2>
                </div>
                <div className='flex items-center gap-5 justify-end'>
                    {/* Input field for selecting files */}
                    <button className="btn btn-neutral">Take Image</button>
                    {/* Hidden file input */}
                    <input
                        ref={fileInputRef}
                        type="file"
                        onChange={handleFileSelect}
                        style={{ display: 'none' }}
                    />

                    {/* Button to trigger file selection */}
                    <button className="btn btn-neutral" onClick={handleChooseFile}>
                        Upload File
                    </button>
                </div>
                <div>
                    <TableComponent data={data} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;