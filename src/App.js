import React, { Component } from 'react';
import Fade from 'react-reveal/Fade'
import Sell from './Sell/Sell';
import {firebaseDB, storage} from './Server'
import Orders from './Orders/Orders';
import './admin.css'
import './app.css'

class App extends Component {
    state = {
        route: 'admin',
        file: '',
        imgID: '',
        orderedProducts: [],
        password: 'test',
        isAdmin: false
    }
    componentDidMount(){
        /////// Authenticating 
        const pass = prompt('ENTER ADMIN PASSWORD')
        if (pass === this.state.password) {
            this.setState({isAdmin: true})
        } else {
            alert('wrong password')
            this.setState({isAdmin: false})
        }

        const orders = []
        firebaseDB.ref('purchases').once('value').then((snapshot)=>{
            snapshot.forEach(item => {
                orders.push(item.val())
            });
            console.log(orders, '.........')
        })
        this.setState({orderedProducts: orders})
        console.log(this.state.orderedProducts, 'ooorororororor')

    }

    deployProduct = async () =>{
        this.setState({loader: true})
        document.querySelector('.loader').classList.add('show')
        await storage.ref().child(`${this.state.imgID}`).put(this.state.file)
        .then((e)=>{
            storage.ref().child(`${this.state.imgID}`).getDownloadURL().then(url => {
                firebaseDB.ref('products').push().set({
                    img: url,
                    name: document.querySelector('.sell_name').value,
                    ram: document.querySelector('.sell_ram').value,
                    memory: document.querySelector('.sell_memory').value,
                    core: document.querySelector('.sell_core').value,
                    width: document.querySelector('.sell_width').value,
                    price: '₦'+document.querySelector('.sell_price').value,
                    category: document.querySelector('.sell_brand').value,
                }).then(()=>{
                    console.log('sucess')
                    document.querySelector('.loader').textContent="Deploy Successful"
                    document.querySelector('.loader').classList.add('sucess')
                    setTimeout(() => {
                        document.querySelector('.loader').classList.remove('show')
                        document.querySelector('.loader').classList.remove('sucess')
                    }, 5000);
                }).catch(()=>{
                    console.log('failed')
                    document.querySelector('.loader').classList.remove('show')
                })
            })
        })
        
        console.log(this.state.file)
    }

    uploadImg = (file)=>{
        this.setState({
            file,
            imgID: new Date().getMilliseconds()
        })
    }
    onRouteChange = (route) => {
        this.setState({route})
    }

    render() {
        return (
            <div>
                {
                    this.state.isAdmin?
                    <div className="admin">
                        <div className="loader">
                            <img src={require('./3.gif')}/>
                            <p>loading...</p>
                        </div>
                        {
                            this.state.route === 'admin'?
                            <Fade top>
                                <div className="cta">
                                    <button onClick={()=>this.onRouteChange('sell')}>SELL</button>
                                    <button onClick={()=>this.onRouteChange('orders')}>ORDERS</button>
                                </div>
                                
                            </Fade>
                            :this.state.route === 'sell'?
                            <Sell back={this.onRouteChange} upload={this.uploadImg} sell={this.deployProduct}/>
                            :this.state.route === 'orders'?
                            <Orders back={this.onRouteChange} orders={this.state.orderedProducts}/>:null
                        }
                    </div>:null
                }
            </div>
        );
    }
}

export default App;