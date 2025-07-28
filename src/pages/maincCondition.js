import ListOfProjects from './listOfProjects';
import DetailsOfProject from './detailsOfProject';
import RenderProject from './renderProject';
import { useState } from "react";

const Maincondition=()=>{

    const [selectedProject,setSelectedProject]=useState(null);

    const setProject=(project)=>{
        setSelectedProject(project)
    }

    return (
        <>
            <div style={{backgroundColor:'white',padding:'50px',margin:'75px',borderRadius:'10px'}}>

                <ListOfProjects onSelect={setProject}/>

            </div>

            <div style={{backgroundColor:'white',padding:'50px',margin:'75px',borderRadius:'10px'}}>

                {selectedProject && <DetailsOfProject project={selectedProject}/>}

            </div>

            <div style={{backgroundColor:'white',padding:'50px',margin:'75px',borderRadius:'10px'}}>


                {
                    selectedProject && <RenderProject project={selectedProject}/>
                }

            </div>
        </>
    )
}

export default Maincondition;