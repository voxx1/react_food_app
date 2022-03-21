import classes from './MealsList.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem';


const MealsList = () => {
    const allMeals = [
        {
            id: 'm1',
            name: 'Sushi',
            description: 'Finest fish and veggies',
            price: 22.99,
        },
        {
            id: 'm2',
            name: 'Schnitzel',
            description: 'A german specialty!',
            price: 16.5,
        },
        {
            id: 'm3',
            name: 'Barbecue Burger',
            description: 'American, raw, meaty',
            price: 12.99,
        },
        {
            id: 'm4',
            name: 'Green Bowl',
            description: 'Healthy...and green...',
            price: 18.99,
        },
    ];
    return (
        <div className={classes.meals}>
            <Card>
                <ul>
                    {allMeals.map(meal => <MealItem name={meal.name} description={meal.description} price={meal.price} id={meal.id} key={meal.id} />)}
                </ul>
            </Card>

        </div>
    )

}

export default MealsList