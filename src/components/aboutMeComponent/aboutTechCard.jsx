const AbouTechCardComponent = (props) => {
    const {title, topics, image} = props

    return (
        <div className="techCard" data-aos="fade-left" >
            <div className="techCard_title">
                <h3>
                    {title}
                </h3>
            </div>

            <div className="techCard_topics">
                {topics.map(topic => {
                    return (
                    <div className="techCard_topics_topic">
                        <p>
                            {topic}
                        </p>
                    </div>
                    )
                })}
            </div>
            
            <div className="techCard_image">
                <img src={image} alt={title} />
            </div>
        </div>
    )
}

export default AbouTechCardComponent