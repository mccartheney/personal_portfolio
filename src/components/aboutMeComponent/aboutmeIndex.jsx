import wave from "../../images/geral/wind.svg"
import download from "../../images/geral/download.svg"

import frontend from "../../images/geral/front.png"
import backend from "../../images/geral/back.png"
import AbouTechCardComponent from "./aboutTechCard"

const AboutMeComponent = () => {
    return (
        <div className="aboutMe" id="about">
            <div className="aboutMe_subtitle" data-aos="fade-left">
                <img src={wave} alt="wave" />
                <p>
                    About Me
                </p>
            </div>

            <div className="aboutMe_title" data-aos="fade-left">
                <h2>
                    Turning yours problems into yours solutions
                </h2>
            </div>

            <div className="aboutMe_content">
                <div className="aboutMe_content_text" data-aos="fade-left">
                    <p>
                        Who am I today as a developer? I ask myself this question often. It’s funny every morning, I feel like I’ve been subtly transformed by the lines of code I wrote the day before, the bugs I wrestled with, and the new ideas I explored. It's as if I’m constantly evolving, yet always grounded in my passion for technology.

                    </p>

                    <p>
                        Am I the same as I was yesterday? Maybe, maybe not. But that’s the beauty of this journey. Each step, each keystroke, brings me closer to the developer I aspire to be. I’m not just here to write code. I’m here to solve puzzles, to innovate, and to turn ideas into something tangible, something real.
                    </p>

                    <p>
                        In a world where change is the only constant, I stay true to myself while embracing the unknown. I don’t just follow the path—I create it, with every new project, every challenge, and every moment of inspiration. Because at the end of the day, it’s not just about what I do it’s about who I’m becoming.
                    </p>
                </div>
                <div className="aboutMe_content_infos" data-aos="fade-left">
                    <AboutInfo key={4} info="Name" content="Mccartheney Mendes" />
                    <AboutInfo key={5} info="GitHub" content="@mccartheney"/>
                    <AboutInfo key={7} info="Email" content="mccartheney@hotmail.com"/>
                    <AboutInfo key={8} info="Location" content="Faro - Portugal" />
                </div>
            </div>

            <div className="aboutMe_download" data-aos="fade-left">
                <button>Download CV <img src={download} alt="download" /></button>
            </div>

            <div className="aboutMe_cards">
                <AbouTechCardComponent key={1} title="FrontEnd" topics={["Clean Code Practices", "Responsive Design", "Component-Based Architecture", "Performance Optimization", ]} image={frontend} />
                <AbouTechCardComponent key={2} title="BackEnd" topics={["API Development", "Database Management", "Authentication & Authorization","Scalability & Performance"]} image={backend} />
            </div>
        </div>
    )
}

const AboutInfo = (props) => {
    const {info, content} = props

    return (
        <div className="aboutMe_content_infos_info">
            <h3>
                {info}
            </h3>
            <p>
                {content}
            </p>
        </div>
    )
}
export default AboutMeComponent