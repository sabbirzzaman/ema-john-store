import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFounded from './components/NotFounded/NotFounded';
import RequiredAuth from './components/RequiredAuth/RequiredAuth';
import ReviewOrders from './components/ReviewOrders/ReviewOrders';
import Shop from './components/Shop/Shop';
import SignUp from './components/SignUp/SignUp';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="home" element={<Home></Home>}></Route>
                <Route path="shop" element={<Shop></Shop>}></Route>
                <Route path="login" element={<Login></Login>}></Route>
                <Route path="signup" element={<SignUp></SignUp>}></Route>
                <Route path="review-orders" element={<ReviewOrders></ReviewOrders>}></Route>
                <Route
                    path="checkout"
                    element={
                        <RequiredAuth>
                            <Checkout></Checkout>
                        </RequiredAuth>
                    }
                ></Route>
                <Route path="*" element={<NotFounded></NotFounded>}></Route>
            </Routes>
        </div>
    );
}

export default App;
