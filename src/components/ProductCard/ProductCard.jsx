import React from 'react';
import { Link } from 'react-router-dom';
import "./productCard.scss";
import { HiShoppingCart } from "react-icons/hi";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/features/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductCard = (props) => {
    const { image, title, category, price, oldPrice, item } = props;
    const dispatch = useDispatch();
    const rs = () =>  toast.success('Added to cart !', {
        position: toast.POSITION.TOP_RIGHT
    });
    return (
        <div data-aos="fade-up" className="product-card pb-5 d-flex flex-column col-12 col-md-4 col-lg-3">
            <div className="product-image mb-1">
                <Link to={`/shop/${item.id}`}><img src={image} alt="product" /></Link>
            </div>
            <div className="product-info px-3 d-flex flex-column">
                <span className='product-category'>{category}</span>
                <h3><Link to="/">{title}</Link ></h3>
                <div className="product-prices d-flex">
                    {oldPrice ? (<><del className='product-price pe-2'>Rs.{oldPrice}.00</del><span className='product-price'>Rs.{price}.00</span></>) : (<span className='product-price'>Rs.{price}.00</span>)}
                </div>
            </div>
            <div className="product-card-buttons d-flex flex-column">
                <button onClick={() => { dispatch(addToCart(item)) }} className='add-cart'><HiShoppingCart /><span onClick={rs}>Add to cart</span></button>
                <ToastContainer />
                
            </div>
            {oldPrice && <span className="product-sale">Sale!</span>}
        </div>
    )
}

export default ProductCard;