
const DetailsOfProjects=(props)=>{

    const getColor=(difficulty)=>{
        if(difficulty==="Beginner"){
            return '#054d07';
        }else if(difficulty==="Beginner+"){
            return '#ad5802';
        }else{
            return '#820725';
        }
    }

    const hexToRGBA = (hex, alpha = 0.2) => {
        let r = 0, g = 0, b = 0;
        hex = hex.replace('#', '');

        if (hex.length === 3) {
            r = parseInt(hex[0] + hex[0], 16);
            g = parseInt(hex[1] + hex[1], 16);
            b = parseInt(hex[2] + hex[2], 16);
        } else if (hex.length === 6) {
            r = parseInt(hex.substring(0, 2), 16);
            g = parseInt(hex.substring(2, 4), 16);
            b = parseInt(hex.substring(4, 6), 16);
        }

        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        };

    const getButtonStyle=(difficulty)=>{
        const color=getColor(difficulty);
            return {
            borderRadius:'10px',
            backgroundColor:hexToRGBA(color,0.1),
            fontWeight:'bold',
            margin:'5px',
            padding:'5px',
            marginBottom:'15px',
            color:color,
            border:'none'
        }
    }

    const getpropStyle=()=>({
        color:'#034685ff',
        padding:'5px',
        margin:'5px',
        border:'none',
        backgroundColor:'#c8dbecff',
        borderRadius:'4px'
    })

    return (
        <div style={{textAlign:'left'}}>
            <h3>{props.project.title}</h3>
            <p style={{color:'grey',fontSize:'medium'}}>{props.project.description}</p>
            <button style={getButtonStyle(props.project.difficulty)}>{props.project.difficulty}</button>
            <div>
                <h3>Key Concepts:</h3>
                {
                    props.project.concepts.map((prop)=>(
                        <button style={getpropStyle()}>{prop}</button>
                    ))
                }
            </div>
        </div>
    )
}

export default DetailsOfProjects;