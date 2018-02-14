import React, { Component } from 'react';
import axios from 'axios';
import Detail from './components/Detail';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
      productID: '',
      productPrice: '',
      cartTotal: ''
    }

    this.handleClick = this.handleClick.bind(this)
    this.addToCart = this.addToCart.bind(this) 
  }

  componentDidMount() {
    axios.get('https://practiceapi.devmountain.com/products').then(products => {
      this.setState({
        products: products.data,
      })
    })
  }

  handleClick(id, price) {
    this.setState({
      productID: id,
      productPrice: price
    })
  }

  addToCart(str) {
    console.log(str)
    var total = Number(this.state.cartTotal) + Number(this.state.productPrice)
    this.setState({
      cartTotal: total 
    })
  }


  render() {

    const products = this.state.products.map((product, i) => (
            <ul key={i} className='product'>
                <img onClick={ () => this.handleClick( product.image, product.price ) } src={ product.image }/>
                <h3>{ product.title }</h3>
            </ul>
          ))


    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to the React Store</h2>
        </div>
          <div>
            <p>CART TOTAL: ${this.state.cartTotal}.00</p>
          </div>

          <Detail productImage={ this.state.productID}
          productPrice={ this.state.productPrice }
          addToCart={ this.addToCart }/>

          <div className='productContainer'> 
            { products }
          </div>


      </div>
    );
  }
}

export default App;
