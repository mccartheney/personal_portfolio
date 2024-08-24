const ListOfInfo = (props)  => {
    const { infoList, title } = props

    return (
        <div className="info"> 
            <div className="info_title" data-aos="fade-left">
                <h2>
                    {title}
                </h2>
            </div>

            <div className="info_allContent">
                {
                    infoList.map((info, index) => {
                        return <div className="info_allContent_content">
                            <div className="info_allContent_content-date" data-aos="fade-left">
                                <p>
                                    {info.date}
                                </p>
                            </div>
                            <div className="info_allContent_content-course" data-aos="fade-left">
                                <h3>
                                    {info.course}
                                </h3>
                                <p>
                                    {info.institute}
                                </p>
                            </div>
                            <div className="info_allContent_content-description" data-aos="fade-left">
                                <p>
                                    {info.description}
                                </p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default ListOfInfo