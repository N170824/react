import { useState } from "react";

const ListOfProjects=({onSelect})=>{
    
     const projects = [
    {
      id: 0,
      title: "Counter App",
      description: "A simple counter with increment, decrement, and reset functionality",
      difficulty: "Beginner",
      concepts: ["useState", "Event Handlers", "Conditional Rendering"],
      component: 1,
      learningPoints: [
        "Understanding React state with useState hook",
        "Handling click events and user interactions",
        "Conditional rendering based on state values",
        "Creating reusable button components"
      ]
    },
    {
      id: 1,
      title: "Todo List",
      description: "Task management with add, delete, edit, and filter features",
      difficulty: "Beginner",
      concepts: ["useState", "Array Methods", "Forms", "Key Props", "Event Handling"],
      component: 2,
      learningPoints: [
        "Managing complex state with arrays of objects",
        "Form handling and input validation",
        "Array manipulation methods (map, filter, find)",
        "Implementing CRUD operations in React"
      ]
    },
    {
      id: 2,
      title: "Weather Card",
      description: "Interactive weather display with dynamic backgrounds and loading states",
      difficulty: "Beginner+",
      concepts: ["useState", "useEffect", "Conditional Styling", "Async Operations"],
      component: 3,
      learningPoints: [
        "Dynamic styling based on data",
        "Simulating API calls and loading states",
        "Working with gradients and animations",
        "Managing async operations in React"
      ]
    },
    {
      id: 3,
      title: "User Profile Card",
      description: "Editable profile with form validation and file upload simulation",
      difficulty: "Intermediate",
      concepts: ["useState", "Forms", "Validation", "Object State", "File Handling"],
      component: 4,
      learningPoints: [
        "Complex form validation patterns",
        "Managing nested object state",
        "File input handling and preview",
        "Implementing edit/save/cancel patterns"
      ]
    },
    {
      id: 4,
      title: "Rating System",
      description: "Interactive star rating with feedback, comments, and submission flow",
      difficulty: "Beginner+",
      concepts: ["useState", "Event Handlers", "Dynamic Styling", "Form Submission"],
      component: 5,
      learningPoints: [
        "Creating interactive rating interfaces", 
        "Managing hover states and visual feedback",
        "Building multi-step user flows",
        "Implementing submission and success states"
      ]
    }
  ];

  const [hover,setHover]=useState(projects[0]);

  const getCardStyle=(id)=>({
    backgroundColor:hover && hover.id===id?'#1e81ddff':'white',
    border:'none',
    width:'-webkit-fill-available',
    borderRadius:'10px',
    padding:'10px',
    margin:'10px',
    textAlign:'left',
    cursor:'pointer'
  })

  const setProjectInParent=(project)=>{
    onSelect(project);
    setHover(project);
  }

    return (
        <div style={{textAlign:'left'}}>
        <h3>Projects</h3>
        <div style={{}}>
            {
                projects.map((item )=>(
                    <button  style={getCardStyle(item.id)} onClick={()=>setProjectInParent(item)}>
                        <p  style={{fontWeight:'bold',fontSize:'larger'}}>{item.title}</p>
                        {item.difficulty}
                    </button>
                ))
            }
        </div>
        </div>
    )
}

export default ListOfProjects;