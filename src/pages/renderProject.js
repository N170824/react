import { CounterApp } from "../project1/counterApp";
import { Rating} from "../project5/rating";
import ToDoList from "../project2/todolist";
import { WeatherCard} from "../project3/weathercard";
import UserProfileForm from "../project4/adduser.js";
const RenderProject=(props)=>{
    switch(props.project.component){
            case 1:
                return <CounterApp/>;
            case 2:
                return <ToDoList/>;
            case 3:
                return <WeatherCard/>;
            case 4:
                return <UserProfileForm/>;
            case 5:
                return <Rating/>;
            default:
                return <></>;
    }
}

export default RenderProject;