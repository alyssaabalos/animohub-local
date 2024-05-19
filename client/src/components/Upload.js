import React from 'react';
import NavBar from './navbar';
import '../styles/css/Upload.css'

const Upload = () => {
    return (
        <div>
            <NavBar />
            <div className="upload-container">
                <h1>Add a Document/Dataset</h1>
                <form>
                    <div className="upload-form-group">
                        <label htmlFor="submissionDate" className="upload-label">Submission Date*</label>
                        <input type="date" id="submissionDate" className="upload-input-date" required />
                    </div>
                    <div className="upload-form-group">
                        <label htmlFor="author" className="upload-label">Author*</label>
                        <input type="text" id="author" className="upload-input-text" required />
                    </div>
                    <div className="upload-form-group">
                        <label htmlFor="coAuthors" className="upload-label">Co-Authors</label>
                        <input type="text" id="coAuthors" className="upload-input-text" />
                    </div>
                    <div className="upload-form-group">
                        <label htmlFor="title" className="upload-label">Document/Dataset Title*</label>
                        <input type="text" id="title" className="upload-input-text" required />
                    </div>
                    <div className="upload-form-group">
                        <label htmlFor="fileType" className="upload-label">File Type*</label>
                        <select id="fileType" className="upload-select" required>
                            <option value="">Select File Type</option>
                            <option value="DOCS">DOCS</option>
                            <option value="IMG">IMG</option>
                            <option value="VID">VID</option>
                            <option value="AUD">AUD</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    <div className="upload-form-group">
                        <label htmlFor="fileUpload" className="upload-label">Upload File*</label>
                        <input type="file" id="fileUpload" className="upload-input-file" required />
                    </div>
                    <div className="upload-form-group">
                        <label htmlFor="accessType" className="upload-label">Access Type*</label>
                        <select id="accessType" className="upload-select" required>
                            <option value="">Select Access Type</option>
                            <option value="Public">Public</option>
                            <option value="Private">Private</option>
                            <option value="Internal-Access">Internal-Access</option>
                            <option value="Confidential">Confidential</option>
                        </select>
                    </div>
                    <button type="submit" className="upload-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Upload;
