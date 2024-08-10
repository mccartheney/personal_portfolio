import IndexLogo from "../logoComponent/IndexLogo"

import profilePic from "../../images/devPic/profile-pic.png"

import emailLogo from "../../images/socialMedias/email.png"
import githubLogo from "../../images/socialMedias/github.png"
import instagramLogo from "../../images/socialMedias/instagram.png"
import linkedInLogo from "../../images/socialMedias/linkedIn.png"
import upworkLogo from "../../images/socialMedias/upwork.png"

const DevCardComponent = () => {
    return (
        <div className="devCard">
            <div className="devCard_logo">
                <div className="devCard_logo_image">
                    <IndexLogo/>
                </div>
                <div className="devCard_logo_name">
                    <h2>
                        Mc<span>cartheney <br /> Mendes</span>
                    </h2>
                </div>
            </div>
            
            <div className="devCard_devImage">
                <img src={profilePic} alt="dev pic" />
            </div>

            <div className="devCard_stack">
                <h3>
                    Especialization
                </h3>
                <p>
                    Full Stack web developer
                </p>
            </div>

            <div className="devCard_localization">
                <h3>
                    Based
                </h3>
                <p>
                    Faro, Portugal
                </p>
            </div>

            <div className="devCard_buttons">
                <div className="devCard_buttons_top">
                    <button>
                        <img src={emailLogo} alt="emailLogo" />
                    </button>

                    <button>
                        <img src={githubLogo} alt="githubLogo" />
                    </button>
                    <button>
                        <img src={instagramLogo} alt="instagramLogo" />

                    </button>
                    <button>
                        <img src={linkedInLogo} alt="linkedInLogo" />
                    </button>
                    <button>
                        <img src={upworkLogo} alt="upworkLogo" />
                    </button>
                </div>
                <div className="devCard_buttons_down">
                    <button>Let's Work Together!</button>
                </div>
            </div>
        </div>
    )
}

export default DevCardComponent