import './App.css';
import React, {useEffect} from 'react';
import { Navigate, Routes, Route } from "react-router-dom";
import ProductFeature from './features/Product';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Cart from "./features/Cart";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/products/" element={<ProductFeature />} />
          <Route path="/cart/" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
