import AboutMeComponent from "../aboutMeComponent/aboutmeIndex"
import ContactComponent from "../contactComponent/contactIndex"
import DevCardComponent from "../devCardComponent/IndexDevCard"
import FooterComponent from "../footerComponent/footerIndex"
import HeaderComponent from "../headerComponent/indexHeader"
import HeyComponent from "../heyComponent/HeyIndex"
import ParticlesComponent from "../particlesComponent/indexParticle"
import ProjectsComponent from "../projectsComponent/indexProjects"
import ResumeComponent from "../resumeComponent/resumeIndex"

const MainPageComponent = () => {

    return <div className="main">
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
            <ContactComponent />
            <FooterComponent/>
        </div>
    </div>
}

export default MainPageComponent