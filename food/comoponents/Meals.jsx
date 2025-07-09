import useHttp from "../src/hooks/useHttp";
import ErrorModel from "./ErrorModal";
import MealItem from "./MealItem";

const requestConfig = {};

export default function Meals() {
    const {data : loadedMeals, error, isLloading}= useHttp('http://localhost:3000/meals', requestConfig, []);
    console.log(loadedMeals);
    
    if (isLloading){
        return <p className="center">Fetching meals....</p>;   
    }

    if (error){
        return <ErrorModel title="Failed to fetch Meals" meaasge={error}/>

    }
    
    return(
        <ul id="meals">{loadedMeals.map(meal => (
            <MealItem key={meal.id} meal={meal}/>
        ))}</ul>
    );
}