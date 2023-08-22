import React, { Component } from 'react'

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div>
          <img alt='' src={"./img/products/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.desc}</p>
          <b>{this.props.item.price} Р.</b>
          <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
          <button className='btn-close'  onClick={() => this.props.onShowItem(this.props.item)}>X</button>
        </div>
      </div>
    )
  }
}

export default ShowFullItem
