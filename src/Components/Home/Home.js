import React from 'react'

import '../Home/Home.css';
import Product from '../Product/Product';

const Home = () => {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src="https://images.unsplash.com/photo-1578422558405-bd41637e2f41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" />

                <div className='home__row'>
                    <Product
                        id="1"
                        title="Redmi Note 9 Pro (Champagne Gold, 4GB RAM, 128GB Storage) - Latest 8nm Snapdragon 720G & Alexa Hands-Free"
                        price={13999}
                        image="https://m.media-amazon.com/images/I/81Ox29uGzNL._AC_UY218_.jpg"
                        rating={5} />
                    <Product
                        id="2"
                        title="Samsung Galaxy M01 (Black, 3GB RAM, 32GB Storage) with No Cost EMI/Additional Exchange Offers"
                        price={13999}
                        image="https://m.media-amazon.com/images/I/81onqHVeECL._AC_UY218_.jpg"
                        rating={5} />
                    
                </div>

                <div className='home__row'>
                    <Product
                        id="3"
                        title="Mi Notebook 14 Intel Core i5-10210U 10th Gen Thin and Light Laptop(8GB/512GB SSD/Windows 10/Intel UHD Graphics/Silver/1.5Kg), XMA1901-FA+Webcam"
                        price={49999}
                        image="https://m.media-amazon.com/images/I/71mYRzElTAL._AC_UY218_.jpg"
                        rating={5} />
                    <Product
                        id="4"
                        title="Lenovo ThinkPad E14 Intel Core i5 10th Gen 14-inch Full HD IPS Thin and Light Laptop (8GB RAM/ 1TB HDD + 128GB SSD/ Windows 10 Home/ Microsoft Office Home"
                        price={45999}
                        image="https://m.media-amazon.com/images/I/71k3N4gxNeL._AC_UY218_.jpg"
                        rating={5} />
                    <Product
                        id="5"
                        title="Avita Essential NE14A2INC433-CR 14-inch Laptop (Celeron N4000/4GB/128GB SSD/Window 10 Home in S Mode/Integrated Graphics), Concrete Grey"
                        price={46999}
                        image="https://m.media-amazon.com/images/I/61FWSA8BcDL._AC_UY218_.jpg"
                        rating={5} />
                </div>

                <div className='home__row'>
                    <Product
                        id="6"
                        title="Panasonic 147 cm (58 inches) 4K Ultra HD Certified Android Smart LED TV TH-58HX450DX (Black) (2020 Model)"
                        price={134399}
                        image="https://images.unsplash.com/flagged/photo-1572609239482-d3a83f976aa0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
                        rating={5} />
                </div>
            </div>
        </div>
    )
}

export default Home
