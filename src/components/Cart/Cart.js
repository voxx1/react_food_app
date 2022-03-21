import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import { useContext } from 'react'
import CardContext from '../../store/card-context'
import CartItem from './CartItem'

const Cart = (props) => {

    const ctx = useContext(CardContext)
    const totalAmount = `$${ctx.totalAmount.toFixed(2)}`
    const itemsInCart = ctx.items.length > 0;

    const cartItemRemoveHandler = id => {
        ctx.removeItem(id);
    }

    const orderingHandler = () => {
        console.log("Your order is completed, food will be coming very soon...")
    }

    const cartItemAddHandler = item => {
        ctx.addItem({ ...item, amount: 1 })
    }

    const cartItems = ctx.items.map(item => <CartItem name={item.name} key={item.id} price={item.price} amount={item.amount} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)} />)

    return (
        <Modal>
            <ul className={classes["cart-items"]}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total amount:</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.closeCart} className={classes['button--alt']}>Close</button>
                {itemsInCart ? <button onClick={orderingHandler} className={classes.button}>Order</button> : null}

            </div>

        </Modal>


    )
}

export default Cart