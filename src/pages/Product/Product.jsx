import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { data } from "../../data/data";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/features/cartSlice';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const productDetail = data.find((item) =>
            +item.id === +id
        );
        setProduct(productDetail);
    }, [id]);

    const rs = () => {
        toast.success('Added to cart!', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    return (
        <div className="product page-container">
            <div className="pt-5 back-shop">
                <h6 className="mb-0"><Link to="/shop"><HiOutlineArrowNarrowLeft />Back to Shop</Link></h6>
            </div>
            <div className="row">
                <div data-aos="fade-up" className="col-12 col-md-7 p-5">
                    <img src={product?.image} alt="product" className='w-100' />
                </div>
                <div className="col-12 col-md-5 p-5 product-info">
                    <h2 data-aos="fade-left">{product?.title}</h2>
                    <span data-aos="fade-left" className='product-category'>{product?.category}</span>
                    <p data-aos="fade-left">{product?.content}</p>
                    <div data-aos="fade-left" className="product-prices d-flex pb-2">
                        {product?.oldPrice ? (
                            <><del className='product-price pe-2'>£{product?.oldPrice}.00</del><span className='product-price'>£{product?.price}.00</span></>
                        ) : (
                            <span className='product-price'>£{product?.price}.00</span>
                        )}
                    </div>
                    <button data-aos="fade-left" className='general-button' onClick={() => { dispatch(addToCart(product)); rs(); }}>Add to cart</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Product;
