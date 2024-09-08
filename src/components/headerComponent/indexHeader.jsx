import homeIcon from "../../images/headerIcons/home.svg"
import aboutIcon from "../../images/headerIcons/about.svg"
import contactIcon from "../../images/headerIcons/contact.svg"
import portfolioIcon from "../../images/headerIcons/portfolio.svg"
import resumeIcon from "../../images/headerIcons/resume.svg"

const HeaderComponent = () => {
    return (
        <div className="header" >
            <div className="header_options">
                <a href="#home">
                    <img src={homeIcon} alt="Home" />
                    <span>
                        Home
                    </span>
                </a>
            </div>
            <div className="header_options">
                <a href="#portfolio">
                    <img src={portfolioIcon} alt="Portfolio" />
                    <span>
                        Portfolio
                    </span>
                </a>
            </div>
            <div className="header_options">
                <a href="#about">
                    <img src={aboutIcon} alt="About Me" />
                    <span>
                        About Me
                    </span>
                </a>
            </div>
            <div className="header_options">
                <a href="#resume">
                    <img src={resumeIcon} alt="Resume" />
                    <span>
                        Resume
                    </span>
                </a>
            </div>
            <div className="header_options">
                <a href="#contact">
                    <img src={contactIcon} alt="Contact" />
                    <span>
                        Contact
                    </span>
                </a>
            </div>
        </div>
    )
}

export default HeaderComponent