import React from "react"
import { PiFilePdfBold } from "react-icons/pi";
import { FaRegImages } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const TableComponent = ({ data }) => {
    const navigate = useNavigate()

    const openDocucment = () => {
        navigate("/app/documents/document/1")
    }

    const getPrediction = (document_id) => {
        // request something
    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Document</th>
                        <th>Status</th>
                        <th>Action</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((document, idx) => (
                        <tr key={document.file_id}>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <FaRegImages fontSize={"2rem"} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{document.file_name}</div>
                                        <div className="text-sm opacity-50">{document.file_type}</div>
                                    </div>
                                </div>
                            </td>
                            {/* <td> */}
                            {
                                document.status === "uploaded" && (
                                    <td>
                                        <span className="badge badge-outine badge-sm">Uploaded</span>
                                    </td>
                                )
                            }

                            {
                                document.status === "uploaded" && (
                                    <td>
                                        <button className="btn btn-ghost btn-xs" onClick={() => { }}>
                                            Get Prediction
                                        </button>
                                    </td>
                                )
                            }
                            <th>
                                <button className="btn btn-ghost btn-xs" onClick={() => openDocucment()}>
                                    <FaRegEye fontSize={"1.2rem"} />
                                </button>
                            </th>
                        </tr>
                    ))}
                </tbody>




                <tbody>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <PiFilePdfBold fontSize={"2rem"} />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Hart Hagerty</div>
                                    <div className="text-sm opacity-50">PDF</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Confidence: 80%
                            <br />
                            <span className="badge badge-accent badge-outline badge-sm">Completed</span>
                        </td>
                        <td>
                            <details className="dropdown">
                                <summary className="m-1 btn text-xs">Exports</summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <li><a>Export as Image</a></li>
                                    <li><a>Exports as PDF</a></li>
                                </ul>
                            </details>
                        </td>
                        <th>
                            <button className="btn btn-ghost btn-xs" onClick={() => openDocucment()}>
                                <FaRegEye fontSize={"1.2rem"} />
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <FaRegImages fontSize={"2rem"} />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Brice Swyre</div>
                                    <div className="text-sm opacity-50">PNG</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Confidence: 0%
                            <br />
                            <span className="badge badge-secondary badge-outline badge-sm">Failed</span>
                        </td>
                        <td>
                            <details className="dropdown">
                                <summary className="m-1 btn text-xs">Run</summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <li><a>Prediction</a></li>
                                </ul>
                            </details>
                        </td>
                        <th>
                            <button className="btn btn-ghost btn-xs">
                                <FaRegEye fontSize={"1.2rem"} />
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <FaRegImages fontSize={"2rem"} />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Marjy Ferencz</div>
                                    <div className="text-sm opacity-50">PNG</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <span className="badge badge-outine badge-sm">Uploaded</span>
                        </td>
                        <td>
                            <details className="dropdown">
                                <summary className="m-1 btn text-xs">Run</summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <li><a>Get Prediction</a></li>
                                </ul>
                            </details>
                        </td>
                        <th>
                            <button className="btn btn-ghost btn-xs">
                                <FaRegEye fontSize={"1.2rem"} />
                            </button>
                        </th>
                    </tr>
                </tbody>

            </table>
        </div >
    )
}

export default TableComponent;