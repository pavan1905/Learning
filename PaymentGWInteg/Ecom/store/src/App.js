import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Products from './components/products';

const bUrl = `http://localhost:8080`;

function App() {
  
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async() => {
    const res = await axios.get(`${bUrl}/products`);
    console.log(res);
    if(res.status === 200)
    {
      setProducts(res.data);
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Online Store   
        </p>
      </header>
      <Products products = {products} />
    </div>
  );
}

export default App;
