import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import NotFound from "./pages/NotFound/NotFound";
import 'bootstrap/dist/css/bootstrap.css';
import Product from './pages/Product/Product';
import Connect from './components/Connect/Connect';
import LoginPage from './components/Footer/LoginPage';
import SignUpPage from './components/Footer/SignupPage';
import Contact from './components/Footer/Contact';
import Login from "./components/Header/CheckoutForm";
import PaymentPage from './components/Header/PaymentPage';
import MachineryRentals from './components/MachineryRentals';
import CarListing from './components/CarListing';
import CarItem from "./components/CarItem";
import carData from "./components/carData";
import CarDetails from "./components/CarDetails";
import PaymentMethodnew from "./components/PaymentMethodnew";



function App() {
  return (
    <>
      <Header />
      <main>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/shop/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/PaymentPage"element={<PaymentPage/>}/>
          <Route path="/CarListing"element={<CarListing/>}/>
          <Route path="/MachineryRentals"element={<MachineryRentals/>}/>
          <Route path="/CarItem" element={< CarItem />} />
          <Route path="/carData" element={<carData />} />
          <Route path="/cars/:slug" element={<CarDetails />} />
          <Route path="/PaymentMethodnew" element={<PaymentMethodnew />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Connect />
     
      <Footer />
    </>
  );
}

export default App;