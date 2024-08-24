import wave from "../../images/geral/wind.svg"
import ListOfInfo from "./educationOrExperienceList"
import Tool from "./favoriteTools"

import fastapi from '../../images/tools/FastAPI.png'
import bash from '../../images/tools/bash.png'
import css from '../../images/tools/css-3.png'
import django from '../../images/tools/django.svg'
import docker from '../../images/tools/docker.png'
import git from '../../images/tools/git.png'
import html from '../../images/tools/html-5.png'
import js from '../../images/tools/javascript.png'
import python from '../../images/tools/python.png'
import react from '../../images/tools/react.png'
import sass from '../../images/tools/sass.png'

const ResumeComponent = () => {

    const myEducation = [
        {
            "date" : "2023 - 2025",
            "course" : "Web development and comunication",
            "institute" : "Etic Algarve",
            "description": "An intensive course in web development and communication, teaching essential principles of creating impactful online experiences."
        }
    ]

    return (
        <div className="resume" >
            <div className="resume_subtitle" data-aos="fade-left" >
                <img src={wave} alt="icon"/>
                <p>
                    Resume
                </p>
            </div>
            <div className="resume_title" data-aos="fade-left">
                <h2>
                    Education and practical experience
                </h2>
            </div>
            <div className="resume_about" data-aos="fade-left">
                <p>
                    At 20 years old, I'm a dedicated full-stack development enthusiast with over 2 years of hands-on learning experience. Currently studying at ETIC Algarve to further expand my skills, I'm eager to apply my knowledge in building robust and scalable web applications. With a solid foundation in both frontend and backend technologies, I'm committed to delivering seamless user experiences and well-architected solutions as I prepare to enter the professional field.
                </p>
            </div>

            <div className="resume_education">
                <ListOfInfo infoList = {myEducation} title={"My education"}/>
            </div>

            <div className="resume_tools">
                <div className="resume_tools_title" data-aos="fade-left">
                    <h2>
                        My favorite tools
                    </h2>
                </div>
                
                <div className="resume_tools_tools">
                    <Tool name={"html"} image={html}/>
                    <Tool name={"css"} image={css}/>
                    <Tool name={"sass"} image={sass} />
                    <Tool name={"JavsScript"} image={js}/>
                    <Tool name={"react"} image={react}/>
                    <Tool name={"python"} image={python}/>
                    <Tool name={"django"} image={django}/>
                    <Tool name={"fastapi"} image={fastapi} />
                    <Tool name={"docker"} image={docker}/>
                    <Tool name={"bash"} image={bash} />
                    <Tool name={"git"} image={git}/>
                </div>
            </div>
        </div>
    )
}

export default ResumeComponent