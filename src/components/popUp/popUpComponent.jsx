import { useEffect } from "react"

const PopUp = (props) => {
    const {visible, textContent} = props


    return(
        <div className={`popUpContainer ${visible}`}>

            <div className={`popUpContainer_popUp`}>
                <p>
                    {textContent}
                </p>
            </div>
        </div>
    )
}

export default PopUp