import React from 'react';
import NavBar from './navbar';
import '../styles/css/requestResult.css';

const RequestResult = () => {
    const requestDetails = {
        title: 'Asian Face Dataset',
        author: 'Sean Folkard',
        fileType: 'PNG',
        requestDate: '2024-07-10',
        requesterName: 'Dela Cruz, Juan',
        purpose: 'I requested the said dataset in order to support my study about the different faces of Asians living in different locations.',
        result: 'The request was not granted by the owner.',
        resultReason: 'Purpose for accessing the dataset is not valid.',
    };

    return (
        <div>
            <NavBar />
            <div className="header">
                <h2 className='page-title'>Dataset Request Result</h2>
            </div>
            <div className="details">
                <div className="detail">
                    <label>Document/Dataset Title:</label>
                    <p>{requestDetails.title}</p>
                </div>
                <div className="detail horizontal">
                    <div className="sub-detail">
                        <label>Author:</label>
                        <p>{requestDetails.author}</p>
                    </div>
                    <div className="sub-detail">
                        <label>File Type:</label>
                        <p>{requestDetails.fileType}</p>
                    </div>
                </div>
                <div className="detail horizontal">
                    <div className="sub-detail">
                        <label>Request Date:</label>
                        <p>{requestDetails.requestDate}</p>
                    </div>
                    <div className="sub-detail">
                        <label>Requester Name:</label>
                        <p>{requestDetails.requesterName}</p>
                    </div>
                </div>
                <div className="detail">
                    <label>Purpose of Accessing the Dataset:</label>
                    <p>{requestDetails.purpose}</p>
                </div>
                <div className="detail">
                    <label>RESULT:</label>
                    <p className="result">{requestDetails.result}</p>
                    <p className="result-reason">{requestDetails.resultReason}</p>
                </div>
            </div>
        </div>
    );
};

export default RequestResult;
