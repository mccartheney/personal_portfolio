const Tool = (props) => {
    const {image, name} = props

    return (
        <div className="tool" data-aos="fade-up">
            <img src={image} alt={name} />
            <p>
                {name}
            </p>
        </div>
    )
}

export default Tool