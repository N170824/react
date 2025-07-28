import { useState } from "react";
import { FaStar } from "react-icons/fa";

export const  Rating=()=>{

    const [rating,setRating]=useState(null);

   function getStyle(rating){
        let color;
        if(rating<3){
            color='#dc3b39';
        }else if(rating===3){
            color='#ca8b2c';
        }else{
            color='#3ea451';
        }
        return {color:color,fontWeight:'bold',fontSize:'1.5rem'}
    }

    function getLabel(rating){
        
        switch (rating){
            case 1:
                return <p style={getStyle(rating)}>Poor</p>;
            case 2:
                return <p style={getStyle(rating)}>Fair</p>;
            case 3:
               return <p style={getStyle(rating)}>Good</p>;
            case 4:
                return <p style={getStyle(rating)}>Very Good</p>;
            case 5:
                return <p style={getStyle(rating)}>Excellent</p>;
            default:
                return <></>
        }
    }

    return (
        <>
            <h2>Rate Your Experience</h2>
            <p style={{color:"grey"}}>How would you rate our service?</p>
            <div>
                {
                    [1,2,3,4,5].map(item =>(
                        <button onClick={()=>setRating(item)} style={{border:'none',margin:'5px',background:'none'}} id={item}><FaStar id={item}  size={30} color={item <= rating ? "#facc15" : "#faccff"}/></button>
                    ))
                }
            </div>
            {rating && getLabel(rating)}
            {rating && <p style={{color:"grey"}}>Thank you for your feedback!</p>}
            <button style={{backgroundColor:'#6b7280',padding:'10px',margin:'10px',border:'none',borderRadius:'5px',color:'white'}} onClick={()=>setRating(null)}>Reset Rating</button>
        </>
    )
}