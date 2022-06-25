import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
// Imports components from index.js
import { Navbar } from './components'; 

import './App.css';

const App = () => {
    return (
        <div className='app'>
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main-content">

            </div>
            <div className="footer">

            </div>
        </div>
    );
}

export default App;