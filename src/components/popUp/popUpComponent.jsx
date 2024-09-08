import { useEffect } from "react"

const PopUp = (props) => {
    const { visible, textContent, disappear, setDissapear } = props

    return(
        <div className={`popUpContainer ${visible} ${disappear}`}>

            <div className={`popUpContainer_popUp`}>
                <p>
                    {textContent}
                </p>
            </div>
        </div>
    )
}

export default PopUp