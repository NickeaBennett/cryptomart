import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
// Imports components from index.js
import { Navbar } from './components';  
import { Home, CryptoCoins, Exchanges, Favorites, News} from './components/pages/'; 

import './App.css';

const App = () => {
    return (
        <div className='app'>
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main-content">
                {/* Layout component from antd */}
                <Layout>
                    <div className='routes'>
                        <Routes>
                            <Route exact path="/" element={<Home />}></Route>
                            <Route exact path="/" element={<CryptoCoins />}></Route>
                            <Route exact path="/" element={<Exchanges />}></Route>
                            <Route exact path="/" element={<Favorites />}></Route>
                            <Route exact path="/" element={<News />}></Route>
                        </Routes>
                    </div>
                </Layout>
            </div>
            <div className="footer">

            </div>
        </div>
    );
}

export default App;