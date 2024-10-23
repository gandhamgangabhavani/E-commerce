import React, { useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import NavBar from './NavBarComponent/NavBar';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <>
  <BrowserRouter basename='/E-commerce'>
    <NavBar cart={cart}/>
    <Routes>
     
         <Route path="/" element={  <ProductList addToCart={addToCart} />}></Route>
          <Route path="/cart" element={  <Cart cart={cart} removeFromCart={removeFromCart} />}></Route>
          <Route path="/checkout" element={ <Checkout cart={cart} />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;