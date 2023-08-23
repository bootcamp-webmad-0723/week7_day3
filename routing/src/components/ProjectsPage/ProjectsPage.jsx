import { useState } from "react";
import { Link } from "react-router-dom";

function ProjectsPage({ projectsData }) {

    const [projects, setProjects] = useState(projectsData);


    return (
        <div>
            <h2>Projects</h2>
            {projects.map((project) => {
                return (
                    <div key={project._id} className="project">
                        <h3>{project.name}</h3>
                        <p>{project.technologies}</p>
                        <Link to={`/proyecto/${project._id}`}>Ver detalles</Link>
                        <hr></hr>
                    </div>
                );
            })}
        </div>
    );
}

export default ProjectsPage;