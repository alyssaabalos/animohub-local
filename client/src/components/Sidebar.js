import React, { useState } from 'react';
import '../styles/css/sidebar.css'

function Sidebar() {
    return (
        <aside>
            <div>
                <h3>DISCIPLINES</h3>
                    <div>
                        <p>Data Science (100)</p>
                        <p>Computer Technology (55)</p>
                        <p>Engineering (30)</p>
                        <p>Social Sciences (6)</p>
                    </div>
                
            </div>
            <div>
                <h3>PUBLICATION TYPE</h3>
                    <div>
                        <p>Thesis Dissertations (100)</p>
                        <p>Articles (55)</p>
                        <p>Research Papers (50)</p>
                        <p>Video Datasets (30)</p>
                        <p>Audio Datasets (6)</p>
                        <p>Software Programs (4)</p>
                    </div>
                
            </div>
            <div>
                <h3>YEAR</h3>
                    <div>
                        <p>2024 (100)</p>
                        <p>2023 (55)</p>
                        <p>2022 (50)</p>
                        <p>2021 (50)</p>
                        <p>2019 (50)</p>
                    </div>
                
            </div>
        </aside>
    );
}

export default Sidebar;
