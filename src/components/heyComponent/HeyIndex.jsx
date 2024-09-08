import works from "../../images/headerIcons/portfolio.svg"
import download from "../../images/geral/download.svg"
import wind from "../../images/geral/wind.svg"

import mccartheney_resume from "../../documents/resume.pdf"

const HeyComponent = () => {
    return (
        <div className="hey" id="home">
            <div className="hey_subTitle" data-aos="fade-left">
                <img src={wind} alt="" />
                <p>Hey, let's meet!</p>
            </div>

            <div className="hey_description" data-aos="fade-left">
                <h2>
                    I'm Mccartheney Mendes <br />
                    Full stack developer
                </h2>
            </div>

            <div className="hey_buttons">
                <a href="#portfolio">
                    <button className="hey_buttons-works" data-aos="fade-left">
                        My work <img src={works} alt="" />
                    </button>
                </a>
                <a href={mccartheney_resume} download="Mccartheney_Resume">
                    <button className="hey_buttons-resume" data-aos="fade-left">
                        Download CV <img src={download} alt="" />
                    </button>
                </a>
            </div>
        </div>
    )
}

export default HeyComponent 