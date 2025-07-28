import { CounterApp } from "../project1/counterApp";
import { Rating

 } from "../project5/rating";
const RenderProject=(props)=>{
    switch(props.project.component){
            case 1:
                return <CounterApp/>;
            case 2:
                return <></>;
            case 3:
                return <></>;
            case 4:
                return <></>;
            case 5:
                return <Rating/>;
            default:
                return <></>;
    }
}

export default RenderProject;