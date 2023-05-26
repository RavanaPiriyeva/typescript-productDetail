import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Product from './Pages/Product';
import ProductsDetail from './Pages/ProductsDetail';


function App() {
  return (
    <>
    <Routes>
    <Route path='/products' element={<Product />}></Route>
    <Route path='/products/:id' element={<ProductsDetail />}></Route>

    </Routes>
    </>
  );
}

export default App;
