import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

import CartItem from '../CartItem'
import CartTotal from '../CartTotal'

import './index.css'
import RestaurantContext from '../../RestaurantContext'

class CartItems extends Component {
  state = {
    isOrderPlaced: false,
  }

  orderPlaced = () => {
    this.setState(prevState => ({isOrderPlaced: !prevState.isOrderPlaced}))
  }

  render() {
    const {isOrderPlaced} = this.state
    return (
      <RestaurantContext.Consumer>
        {value => {
          const stringifiedCartList = localStorage.getItem('cartData')
          const parsedCartList = JSON.parse(stringifiedCartList)
          return isOrderPlaced ? (
            <div>
              <Header />
              <div className="payment-container">
                <img
                  src="https://res.cloudinary.com/sree7771/image/upload/v1658661871/Vector_4_bzptf7.png"
                  alt=""
                  className="payment-img"
                />
                <h1 className="payment-heading"> Payment Successful</h1>
                <p className="payment-description">
                  Thank you for ordering <br />
                  Your payment is successfully completed.
                </p>
                <Link to="/" className="payment-link">
                  <button type="button" className="go-to-home-page-button">
                    {' '}
                    Go To Home Page
                  </button>
                </Link>
              </div>
              <Footer />
            </div>
          ) : (
            <div className="cart-content-container">
              <div className="cart-headers-cont">
                <p className="cart-header-items">Item</p>
                <div className="qty-price-cont">
                  <p className="cart-header-qty">Quantity</p>
                  <p className="cart-header-price">Price</p>
                </div>
              </div>
              <ul className="cart-list">
                {parsedCartList.map(eachItem => (
                  <CartItem
                    key={eachItem.id}
                    cartItem={eachItem}
                    value={value}
                  />
                ))}
              </ul>
              <CartTotal orderPlaced={this.orderPlaced} />
            </div>
          )
        }}
      </RestaurantContext.Consumer>
    )
  }
}

export default CartItems
