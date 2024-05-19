import React from 'react';
import NavBar from './navbar';
import '../styles/css/Submit.css';

const Submit = () => {
  return (
    <div>
        <NavBar />
        <h2>Add a Document/Dataset</h2>
        <div className="submit-container">
            <div className="input-group">
                <label htmlFor="submission-date">Submission Date<span className="required">*</span></label>
                <input type="datetime-local" id="submission-date" name="submission-date" className="input-box" required />
            </div>
            
            <div className="input-group">
                <label htmlFor="submission-author">Author<span className="required">*</span></label>
                <input type="text" id="submission-author" name="submission-author" className="input-box" required />
            </div>
            
            <div className="input-group">
                <label htmlFor="submission-coauthor">Co-Authors</label>
                <input type="text" id="submission-coauthor" name="submission-coauthor" className="input-box" />
            </div>
        </div>

        <div className="input-group title-group">
            <label htmlFor="submission-title">Document/Dataset Title<span className="required">*</span></label>
            <input type="text" id="submission-title" name="submission-title" className="input-box" required />
        </div>
            
        <div className="submit-container-row">
            <div className="input-group">
                <label htmlFor="submission-filetype">File Type<span className="required">*</span></label>
                <input type="text" id="submission-filetype" name="submission-filetype" placeholder='Select a file type' className="input-box" required />
            </div>

            <div className="input-group">
                <label htmlFor="submission-upload">Upload File<span className="required">*</span></label>
                <input type="file" id="submission-upload" name="submission-upload" className="input-box" required />
            </div>
        </div>

        <div className="input-group dropdown-group">
            <label htmlFor="submission-access">Access Type<span className="required">*</span></label>
            <select id="submission-access" name="submission-access" className="input-box dropdown-box" required>
                <option value="" disabled selected hidden>Select access type</option>
                <option value="public">Public</option>
                <option value="internal-access">Internal Access</option>
                <option value="confidential">Confidential</option>
                <option value="top-secret">Top Secret</option>
            </select>
        </div>

        <div className="submit-button">
            <button type="submit">SUBMIT</button>
        </div>
    </div>
  );
}

export default Submit;
