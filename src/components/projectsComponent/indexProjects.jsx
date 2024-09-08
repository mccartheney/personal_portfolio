import wave from "../../images/geral/wind.svg"
import ProjectCard from "./projectCard"
import mcFiles from "../../images/projectsLogos/logo_mc_files.png"
import github from "../../images/socialMedias/github.png"

const ProjectsComponent = () => {
    const projects = [
        {
            id: 1,
            title: "McFiles",
            description: "A file Storage made with django",
            logo: mcFiles,
            techs: ["Django", "Css3", "HTML5", "JavaScript", "Docker"],
            link: "https://github.com/mccartheney/file-manager-in-django",
            githubLogo: github
        },
    ];

    return (
        <div className="projects" id="portfolio">
            <div className="projects_subtitle" data-aos="fade-left" id="portfolio">
                <img src={wave} alt="wave" />
                <p>
                    Projects
                </p>
            </div>

            <div className="projects_title" data-aos="fade-left">
                <h2>
                    Check some of my featured projects 
                </h2>
            </div>

            <div className="projects_projects">
            
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        logo={project.logo}
                        techs={project.techs}
                        link={project.link}
                        githubLogo={project.githubLogo}
                    />
                ))}

            </div>

        </div>
    )
}

export default ProjectsComponent