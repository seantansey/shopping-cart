import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CartHeader from './components/CartHeader'
import CartFooter from './components/CartFooter'
import CartItems from './components/CartItems'
import AddItem from './components/AddItem'
import Total from './components/Total'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
      ],
      cartItemsList: [
        { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
      ],
      total: (399 + 499 + 1999) / 100
    }
  }

  addItemToState = (quantity, productName) => {
    let productToAdd = this.state.products.find(product => product.name == productName)
    let price = (productToAdd.priceInCents/100).toFixed(2)
    let exists = false

    for (let x = 0; x < this.state.cartItemsList.length; x++) {
      if (this.state.cartItemsList[x].product.id === productToAdd.id) {
        exists = true
        let copy = {...this.state.cartItemsList}
        copy[x].quantity += parseInt(quantity, 10)
        this.setState({ total: this.state.total + (price * quantity)})
      }
    }
    if (!exists) {
      let newItem = {
          id: this.state.cartItemsList.length + 1,
          product: productToAdd,
          quantity: parseInt(quantity, 10)
        }
        this.setState({cartItemsList: [...this.state.cartItemsList, newItem], total: this.state.total + (price * newItem.quantity)})
    }
}

  render() {
    return (
      <div className='App'>
        <CartHeader />
        <CartItems items={this.state.cartItemsList}/>
        <Total total={this.state.total}/>
        <AddItem products={this.state.products} addItemToState={this.addItemToState} />
        <CartFooter copyright='2019' />
      </div>
    );
  }
}

export default App;
