import { useState } from "react"

const ProjectCard = (props) => {
    const { title, description, logo, techs, link, githubLogo, key } = props

    const [visible, setVisible] = useState("invisible")
    const [closeOrOpen, setCloseOrOpen] = useState("close")

    const openOrCloseWindow = () => {
        setVisible(isItVisible => {
            if (isItVisible == "") {
                return "invisible"
            }
            else{
                return ""
            }
        })
    }

    return (
        <>
            <div className={`projectScreen ${visible} ${closeOrOpen}`} key={key}>
                <div className="projectScreen_close" data-aos="fade-left">
                    <button onClick={() => { openOrCloseWindow() }}>
                        x
                    </button>
                </div>
                <div className="projectScreen_logo" data-aos="fade-left">
                    <img src={logo} alt="logo" />
                </div>
                <div className="projectScreen_content">
                    <div className="projectScreen_content_title" data-aos="fade-left">
                        <h2>
                            {title}
                        </h2>
                        <a href={link}>
                            <img src={githubLogo} alt="github"/>
                        </a>
                    </div>

                    <div className="projectScreen_content_techs" data-aos="fade-left">
                        {
                            techs.map((tech) => {
                                return (
                                    <div className="projectScreen_content_techs_tech">
                                        <p>
                                            {tech}
                                        </p>
                                    </div>
                                )

                            })
                        }
                    </div>

                    <div className="projectScreen_content_description" data-aos="fade-left">
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="projectCard" data-aos="fade-left" onClick={() => { openOrCloseWindow ()}}>
                <div className="projectCard_image" >
                    <img src={logo} alt="Logo" />
                </div>

                <div className="projectCard_techs">
                    {
                        techs.map(tech => {
                            return (
                                <div className="projectCard_techs_tech">
                                    <p>
                                        {tech}
                                    </p>
                                </div>
                            )
                        
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default ProjectCard