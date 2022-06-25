import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { HeartOutlined } from "@ant-design/icons";
// Imports components from index.js
// import { Navbar } from './components';  
import { Navbar, Home, Cryptocurrency, Exchanges, CoinDetails, Favorites, News} from './components/'; 

import './App.css';

const App = () => (
        <div className='app'>
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                {/* Layout component for routing from antd */}
                <Layout>
                    <div className='routes'>
                        <Routes>
                            <Route exact path="/" element={<Home />}></Route>
                            <Route exact path="/cryptocurrencies" element={<Cryptocurrency />}></Route>
                            <Route exact path="/exchanges" element={<Exchanges />}></Route>
                            <Route exact path="/crypto/:coidId" element={<CoinDetails />}></Route> // dynamically render each coin detail: coinId
                            <Route exact path="/favorites" element={<Favorites />}></Route>
                            <Route exact path="/news" element={<News />}></Route>
                        </Routes>
                    </div>
                </Layout>
                <div className="footer">
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                        <Link to="/">
                        CryptoMart 
                        </Link> <br />
                        Made with <HeartOutlined /> by Nickea Bennett
                    </Typography.Title>
                     Antd Space similar to div 
                     <Space>
                        <Link to="/">Home</Link>
                        <Link to="/cryptocurrencies">Coins</Link>
                        <Link to="/Exchanges">Exchanges</Link>
                        <Link to="favorites">Favorites</Link>
                        <Link to="/news">News</Link>
                    </Space> 
                </div> 
            </div>
        </div>
);

export default App;