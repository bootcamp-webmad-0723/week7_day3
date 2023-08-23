import { useState } from "react";
import { useParams } from "react-router-dom";

function ProjectDetailsPage({ projectsData }) {

    const { project_id } = useParams()

    const [projects, setProjects] = useState(projectsData)

    const foundProject = projects.find(elm => elm._id === project_id)

    return (
        <div>
            <h1>Detalles de {foundProject.name}</h1>

            <p>Del año {foundProject.year}</p>
        </div>
    );
}

export default ProjectDetailsPage; 
