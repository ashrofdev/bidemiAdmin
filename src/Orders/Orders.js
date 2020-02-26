import React from 'react';
import './order.css'
import Slide from 'react-reveal/Slide'

// document.querySelector('img').requestFullscreen

const Orders = ({orders, back}) => {
    const order = orders.map((item, i) => {
        console.log(item)
        return (
            <div className="order">
                <img onClick={(e)=>{e.target.requestFullscreen()}} src={item.product.img}/>
                <p>Product Name: {item.product.name}</p>
                <p>Price: {item.product.price}</p>
                <p>Buyer's name: {item.userData.lastname}</p>
                <p>Buyer's address: {item.userData.address}</p>
                <p>Buyer's mail: {item.userData.email}</p>
                <p>Buyer's no: {item.userData.phone}</p>
                <p>Date: {item.userData.date}</p>
            </div>
        )
    })
    return (
        <Slide right>
            <div className="orders">
                {order}
                <button onClick={()=>back('admin')} className="a_back">BACK</button>
            </div>
        </Slide>
    );
};

export default Orders;