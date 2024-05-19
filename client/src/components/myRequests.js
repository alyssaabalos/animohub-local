import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './navbar';
import '../styles/css/myrequest.css';

const MyRequests = () => {
    const navigate = useNavigate();

    const requests = [
        { id: 1, title: 'Asian Face Dataset (PNG)', fileType: 'PNG', date: '2023-05-01' },
        { id: 2, title: 'Sudoku Game Simulator (py)', fileType: 'py', date: '2023-04-21' },
    ];

    const handleAddRequest = () => {
        navigate('/requestform');
    };

    return (
        <div>
            <NavBar />
            <div className="header">
                <h2 className='page-title'>My Requests</h2>
                <button className="btn btn-success" onClick={handleAddRequest}>Add Request</button>
            </div>
            <table className="requests-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>File Type</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.map(request => (
                        <tr key={request.id}>
                            <td><a href={`/requestresult`}>{request.title}</a></td>
                            <td>{request.fileType}</td>
                            <td>{request.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyRequests;
