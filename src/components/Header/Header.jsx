import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import "./header.scss";
import { HiShoppingCart } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { handleCategory } from '../../store/features/filterSlice';

const Header = () => {
    const [hamburger, setHamburger] = useState(true);
    const [nav, setNav] = useState(false);
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const getTotalQuantity = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.quantity;
        });
        return total;
    };
    const getTotalPrice = () => {
        let total = 0;
        cart.forEach((item) => {
            total += Math.round(item.price) * item.quantity;
        });
        return total;
    };
    const changeCategory = (category) => {
        dispatch(handleCategory(category));
        navigate('/shop')
    }
    const closeHamburger = () => {
        setNav(false);
        setHamburger(true)
    }
    const openHamburger = () => {
        setNav(true);
        setHamburger(false)
    }
    return (
        <header className='bg-white sticky-top'>
            <div className="page-container">
                <div className="header-content">
                    <div className="header-left">
                    <div className="logo-part pe-4">
  <Link to="/">
    <img
      src="https://img.freepik.com/free-vector/flat-design-farmers-market-logo_23-2149325904.jpg?size=626&ext=jpg&ga=GA1.1.462985331.1694164396&semt=ais"
      alt="logo"
      style={{ width: '70px', height: '70px' }} // Adjust the width as needed
    />
  </Link>
</div>

                       
                        <ul className='dekstop-nav list-unstyled m-0'>
                            <li><button className='clean-button' onClick={() => { changeCategory("All") }}>All Products</button></li>
                            <li><button className='clean-button' onClick={() => { changeCategory("Seeds") }}>Seeds</button></li>
                            <li><button className='clean-button' onClick={() => { changeCategory("Organic Fertilizers") }}>Fertilizers</button></li>
                         
                            <li><button className='clean-button' onClick={() => { changeCategory("Machinery") }}>Equipment</button></li>
                            <li><Link to="/MachineryRentals"><button className='clean-button'>Machinery Rentals</button></Link></li>
                            <li><Link to="/LoginPage"><button className='clean-button'>LogIn</button></Link></li>
                           
               
                        </ul>
                    </div>
                    <div className="header-right">
                        <p className='price'>Rs.{getTotalPrice()}.00</p>
                        <div className='cart'>
                            <Link to="/cart"><HiShoppingCart /></Link>
                            <p className='cart-quantity'>{getTotalQuantity()}</p>
                        </div>
                        <div className="hamburger-menu">
                            {hamburger ? (<button onClick={() => { openHamburger() }}><GiHamburgerMenu /></button>) : (<button onClick={() => { closeHamburger() }}><IoCloseSharp /></button>)}
                        </div>
                    </div>
                </div>
            </div>
            <ul className={nav ? 'mobile-nav open-nav  list-unstyled m-0' : 'mobile-nav list-unstyled m-0'}>
                <li><button className='clean-button' onClick={() => { changeCategory("All"); closeHamburger() }}>All Products</button></li>
                <li><button className='clean-button' onClick={() => { changeCategory("Seeds"); closeHamburger() }}>Seeds</button></li>
                <li><button className='clean-button' onClick={() => { changeCategory("Organic Fertilizers"); closeHamburger() }}>Fertilizers</button></li>
               
                <li><button className='clean-button' onClick={() => { changeCategory("Machinery"); closeHamburger() }}>Machinery</button></li>
               
            </ul>
        </header>
    )
}

export default Header;