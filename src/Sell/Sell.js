import React from 'react';
import './sell.css'
import Slide from 'react-reveal/Slide'

const Sell = ({sell, upload, back}) => {
    return (
        <Slide left>
             <div className="sell">
                <input onChange={(e)=>upload(e.target.files[0])} type="file"/>
                <div className="fields">
                    <div>
                    <input className="sell_name" placeholder="Product name"/>
                    <label className="label">Product name</label>
                    </div>
                    <div>
                    <input className="sell_memory" placeholder="SSD memory size"/>
                    <label className="label">SSD memory size</label>
                    </div>
                    <div>
                    <input className="sell_ram" placeholder="RAM size"/>
                    <label className="label">RAM size</label>
                    </div>
                    <div>
                    <input className="sell_core" placeholder="core"/>
                    <label className="label">core</label>
                    </div>
                    <div>
                    <input className="sell_width" placeholder="screen size"/>
                    <label className="label">screen size</label>
                    </div>
                    <div>
                    <select className="sell_category">
                        <option>laptop</option>
                        <option>phone</option>
                        <option>accessory</option>
                    </select>
                    <label className="label">category</label>
                    </div>
                    <div>
                    <input type="number" className="sell_price" placeholder="Prduct price"/>
                    <label className="label">Prduct price</label>
                    </div>
                </div>
                <button className="sell" onClick={sell}>SELL</button>
                <button onClick={()=>back('admin')} className="a_back">BACK</button>
            </div>
        </Slide>
    );
};

export default Sell;