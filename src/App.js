import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFounded from './components/NotFounded/NotFounded';
import ReviewOrders from './components/ReviewOrders/ReviewOrders';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='shop' element={<Shop></Shop>}></Route>
        <Route path='review-orders' element={<ReviewOrders></ReviewOrders>}></Route>
        <Route path='checkout' element={<Checkout></Checkout>}></Route>
        <Route path='*' element={<NotFounded></NotFounded>}></Route>
      </Routes>
    </div>
  );
}

export default App;
