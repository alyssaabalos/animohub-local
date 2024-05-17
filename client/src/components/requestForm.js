import React from 'react';
import NavBar from './navbar';
import '../styles/request.css';

const requestForm = () => {
    return (
        <div>
            <NavBar />
            <div className="container">
                <h2 className='page-title'>REQUEST DOCUMENT/ DATASET</h2>
                <br></br>
                <form>
                    <div className="form-group">
                        <label htmlFor="title">Document/Dataset Title: </label>
                        <input type="text" id="title" className="form-control" />
                    </div>
                    <div className="form-group horizontal">
                        <label htmlFor="author">Author: </label>
                        <input type="text" id="author" className="form-control" />
                        <label htmlFor="fileType">File Type: </label>
                        <select id="fileType" className="form-control">
                            <option value="">Select file type</option>
                            <option value="pdf">PDF</option>
                            <option value="doc">DOC</option>
                            <option value="txt">TXT</option>
                        </select>
                    </div>
                    <div className="form-group horizontal">
                        <label htmlFor="requestDate">Request Date: </label>
                        <input type="date" id="requestDate" className="form-control" />
                        <label htmlFor="requestName">Request Name: </label>
                        <input type="text" id="requestName" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="purpose">Purpose of Accessing Dataset: </label>
                        <textarea id="purpose" className="form-control" rows="4" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="privacyForms">Upload Data Privacy Forms: </label>
                        <input type="file" id="privacyForms" className="form-control" multiple />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default requestForm;
