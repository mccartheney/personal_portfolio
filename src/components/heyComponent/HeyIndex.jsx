import works from "../../images/headerIcons/portfolio.svg"
import download from "../../images/geral/download.svg"
import wind from "../../images/geral/wind.svg"
const HeyComponent = () => {
    return (
        <div className="hey">
            <div className="hey_subTitle">
                <img src={wind} alt="" />
                <p>Hey, let's meet!</p>
            </div>

            <div className="hey_description">
                <h2>
                    I'm Mccartheney Mendes <br />
                    Full stack developer
                </h2>
            </div>

            <div className="hey_buttons">
                <button className="hey_buttons-works">
                    My work <img src={works} alt="" />
                </button>
                <button className="hey_buttons-resume">
                    Download CV <img src={download} alt="" />
                </button>
            </div>
        </div>
    )
}

export default HeyComponent 