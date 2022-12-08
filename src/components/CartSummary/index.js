import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalPriceArray = cartList.map(
        eachCart => eachCart.quantity * eachCart.price,
      )

      const totalAmount = totalPriceArray.reduce(
        (sum, eachItem) => sum + eachItem,
      )

      console.log(totalPriceArray)
      const cartItems = cartList.length
      return (
        <div className="summary-container">
          <h1 className="ordered-price">
            Order Total: <snap className="price">Rs {totalAmount}/-</snap>
          </h1>
          <p className="items-count">{cartItems} Items in cart</p>
          <button className="check-out-btn" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
