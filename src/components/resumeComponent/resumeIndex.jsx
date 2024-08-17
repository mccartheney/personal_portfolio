import wave from "../../images/geral/wind.svg"

const ResumeComponent = () => {
    return (
        <div className="resume">
            <div className="resume_subtitle">
                <h2>
                    <img src={wave} />
                </h2>
            </div>
            <div className="resume_title">
                <h1>
                    Education and practical experience
                </h1>
            </div>
            <div className="resume_about">
                <p>
                    At 20 years old, I'm a dedicated full-stack development enthusiast with over 2 years of hands-on learning experience. Currently studying at ETIC Algarve to further expand my skills, I'm eager to apply my knowledge in building robust and scalable web applications. With a solid foundation in both frontend and backend technologies, I'm committed to delivering seamless user experiences and well-architected solutions as I prepare to enter the professional field.
                </p>
            </div>
        </div>
    )
}

export default ResumeComponent