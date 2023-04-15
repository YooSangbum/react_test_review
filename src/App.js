import { Route, Routes } from 'react-router-dom';
import './my_reset.css';
import './App.css';
import productData from './productData.jsx';
import { useState } from 'react';

import Header from './pages/Header';
import Main from './pages/Main';
import Footer from './pages/Footer';
import Shop from './pages/Shop';

function App() {
  let [data] = useState(productData);
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Main data={data} />}></Route>
        <Route path="/Shop" element={<Shop data={data} />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
