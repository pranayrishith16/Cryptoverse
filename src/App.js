import { Route, Link, Routes } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import './App.css';

import {Navbar, News, Exchanges, CryptoDetails, Cryptocurrencies, Homepage} from './components'

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route exact path="/news" element={<News />} />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
        <Typography.Title level={5} style={{color:"white", textAlign:"center"}}>
          Cryptoverse <br/>
          All rights reserved
        </Typography.Title>
      </div>
      </div>
    </div>
  );
}

export default App;
