import React from 'react';
import '../styles/ProductCards.css';
import ProductCardItem from './ProductCardItem';
import img1 from "../images/img-1.jpg"
import img2 from "../images/img-2.jpg"
import img3 from "../images/img-3.jpg"
import img4 from "../images/img-4.jpg"
import img5 from "../images/img-5.jpg"
// import ProductCardMapper from './ProductCardMapper';

const ProductCard = () => {
    return (
        <div className='cards'>
            <h1>Check out these EPIC PRODUCTS!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        {/* <ProductCardMapper></ProductCardMapper> */}
                        <ProductCardItem
                            src={img1}
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'
                        />
                        <ProductCardItem
                            src={img2}
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <ProductCardItem
                            src={img3}
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/services'
                        />
                        <ProductCardItem
                            src={img4}
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/products'
                        />
                        <ProductCardItem
                            src={img5}
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;