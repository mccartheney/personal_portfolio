import wave from "../../images/geral/wind.svg"
import ProjectCard from "./projectCard"
import mcFiles from "../../images/projectsLogos/logo_mc_files.png"
import github from "../../images/socialMedias/github.png"

const ProjectsComponent = () => {
    return (
        <div className="projects">
            <div className="projects_subtitle" data-aos="fade-left">
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
                <ProjectCard title="McFiles" description="A file Storage made with django" logo={mcFiles} techs={["Django", "Css3", "HTML5", "JavaScript", "Docker"]} link="https://github.com/mccartheney/file-manager-in-django" githubLogo={github} />
                <ProjectCard title="McFiles" description="A file Storage made with django" logo={mcFiles} techs={["Django", "Css3", "HTML5", "JavaScript", "Docker"]} link="https://github.com/mccartheney/file-manager-in-django" githubLogo={github} />
            </div>

        </div>
    )
}

export default ProjectsComponent