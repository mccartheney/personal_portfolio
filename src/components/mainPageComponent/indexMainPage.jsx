import ContactComponent from "../contactComponent/contactIndex"
import DevCardComponent from "../devCardComponent/IndexDevCard"
import HeaderComponent from "../headerComponent/indexHeader"
import HeyComponent from "../heyComponent/HeyIndex"
import ParticlesComponent from "../particlesComponent/indexParticle"
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
            <ResumeComponent/>
            <ContactComponent/>
        </div>
    </div>
}

export default MainPageComponent