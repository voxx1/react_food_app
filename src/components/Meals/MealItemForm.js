import classes from './MealItemForm.module.css'
import { useRef, useState } from 'react'

const MealItemForm = (props) => {
    const [validForm, setValidForm] = useState(true)
    const amountInputRef = useRef();

    const formHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 10) {
            setValidForm(false)
            return
        }

        props.onAddToCart(enteredAmountNumber);
    }

    return (
        <form onSubmit={formHandler} className={classes.form}>
            <div className={classes.input}>
                <label>Amount</label>
                <input ref={amountInputRef} id={props.mealId} type="number" min="1" max="10" step="1" defaultValue="1" />

            </div>
            <button type="submit">+ Add</button>
            {!validForm && <p>Please enter valid amount! :)</p>}
        </form>
    )
}

export default MealItemForm