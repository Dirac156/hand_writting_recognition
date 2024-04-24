import React from 'react'

const DocumentPage = () => {
    return (
        <div className='p-10'>
            <div className='document flex flex-col gap-5'>
                <h2 className='font-bold text-3xl'>Docuemnt</h2>
                <h3 className='font-semibold text-xl'>File Name</h3>
                <div className='document-prediction w-[40%]'>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                </div>
            </div>

            <div className='flex items-center gap-5 mt-10'>
                <div className=''>
                    Version 1
                </div>

                <div className=''>
                    Version 2
                </div>

                <div className=''>
                    Version 3
                </div>
            </div>
        </div>
    )
}

export default DocumentPage;