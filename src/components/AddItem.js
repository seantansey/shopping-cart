import React from 'react'

class AddItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        name: '',
        quantity: 0
    }
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.props.addItemToState(this.state.quantity, this.state.name)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className='container'>
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input type="number" class="form-control" id="quantity" value={this.state.quantity} onChange={(e) => this.setState({ quantity: e.target.value })} />
        </div>
        <div className="form-group">
          <label htmlFor="products">Products</label>
          <select className="custom-select" id="products" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value})}>
            <option>Select an option...</option>
            {this.props.products.map(product =>
              <option key={product.id}>{product.name}</option>)}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default AddItem
