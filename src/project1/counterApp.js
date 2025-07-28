import { useState } from "react"

export const CounterApp=()=>{

    const [value,setValue]=useState(0);

    function getButtonStyle(buttonType){
        let color=buttonType==='decrease'?'#f41226':(buttonType==='reset'?'#6b7280':'#4dc560');
        return {
            backgroundColor:color,
            padding:'10px',
            margin:'10px',
            border:'none',
            borderRadius:'5px',
            color:'white'
        }
    }

    return (
        <>
            <h2>Counter App</h2>
            <p style={{color:"#1e81ddff",fontWeight:'bold',fontSize:'3rem'}}>{value}</p>
            <button onClick={()=>setValue(value-1)} style={getButtonStyle('decrease')}>- Decrease</button>
            <button onClick={()=>setValue(0)} style={getButtonStyle('reset')}>Reset</button>
            <button onClick={()=>setValue(value+1)} style={getButtonStyle('increase')}>+ Increase</button>
        </>
    )
}
