import { useState } from "react"
import AboutMeComponent from "../aboutMeComponent/aboutmeIndex"
import ContactComponent from "../contactComponent/contactIndex"
import DevCardComponent from "../devCardComponent/IndexDevCard"
import FooterComponent from "../footerComponent/footerIndex"
import HeaderComponent from "../headerComponent/indexHeader"
import HeyComponent from "../heyComponent/HeyIndex"
import ParticlesComponent from "../particlesComponent/indexParticle"
import PopUp from "../popUp/popUpComponent"
import ProjectsComponent from "../projectsComponent/indexProjects"
import ResumeComponent from "../resumeComponent/resumeIndex"

import { useEffect } from "react"

const MainPageComponent = () => {
    const [visible, setVisible] = useState("invisiblePopUp")
    const [disappear, setDissapear] = useState ("invisible")


    useEffect(() => {
        if (visible === "") {
            setTimeout(() => {
                setVisible("invisiblePopUp")
            }, 3000)
        }
    }, [visible])


    return (
        <div className="main">
            <PopUp visible={visible} disappear={disappear} setDissapear={setDissapear} textContent ={"Email Sended, we will enter in contact soon"}/>
            <ParticlesComponent/> 
            <div className="main_cardSection">
                <DevCardComponent/>
            </div>
            <div className="main_contentSection">
                <HeaderComponent/>
                <HeyComponent/>
                <ProjectsComponent/>
                <AboutMeComponent/>
                <ResumeComponent/>
                <ContactComponent setVisible={setVisible} setDissapear={setDissapear}/>
                <FooterComponent/>
            </div>
        </div>
    )
}

export default MainPageComponent