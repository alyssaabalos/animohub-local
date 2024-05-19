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
                    <div className="form-group">
                        <label htmlFor="submissionDate">Submission Date*</label>
                        <input type="date" id="submissionDate" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author*</label>
                        <input type="text" id="author" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="coAuthors">Co-Authors</label>
                        <input type="text" id="coAuthors" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Document/Dataset Title*</label>
                        <input type="text" id="title" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fileType">File Type*</label>
                        <select id="fileType" required>
                            <option value="">Select File Type</option>
                            <option value="">DOCS</option>
                            <option value="">IMG</option>
                            <option value="">VID</option>
                            <option value="">AUD</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fileUpload">Upload File*</label>
                        <input type="file" id="fileUpload" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="accessType">Access Type*</label>
                        <select id="accessType" required>
                            <option value="">Select Access Type</option>
                            <option value="">Public</option>
                            <option value="">Private</option>
                            <option value="">Internal-Access</option>
                            <option value="">Confidential</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Upload;
