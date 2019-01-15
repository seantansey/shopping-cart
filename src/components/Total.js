import React from 'react'

class Total extends React.Component {

  render() {
    return (
      <div className='container font-weight-bold'>
        <p>Total Price: ${this.props.total}</p>
      </div>
    )
  }
}


export default Total
