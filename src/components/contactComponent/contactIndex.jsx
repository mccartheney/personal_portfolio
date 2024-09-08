import wave from "../../images/geral/wind.svg"
import send from "../../images/geral/send.png"

import emailjs from '@emailjs/browser';
import { useState } from "react";

const ContactComponent = (props) => {

    const { setVisible } = props

    const [name, setName] = useState("")
    const [company, setCompany] = useState("")

    const [email, setEmail] = useState("")
    const [phone,setPhone ] = useState("")

    const [message, setMessage] = useState("")

    const serviceKey = process.env.REACT_APP_SERVICE_KEY
    const apiKey = process.env.REACT_APP_API_KEY
    const templateKey = process.env.REACT_APP_TEMPLATE_KEY

    const sendMessage = (event) => {
        event.preventDefault ()
        emailjs
                .send(serviceKey, templateKey, { 
                                                            "from_name": name, 
                                                            "from_company": company, 
                                                            "from_email": email, 
                                                            "from_phone": phone, 
                                                            "message": message, 
                                                            }, 
                                                            { 
                                                                publicKey: apiKey, 
                                                            })
                .then (
                    () => {
                        setVisible("")
                    },
                    (error) => {
                        window.alert("sorry, something wrong happened,try again ")
                    }
                )

}

    const updateInput = (target , updateState) => {
        const inputValue = target.value
        updateState (inputValue)
    } 

    return (
        <div className="contact" id="contact">
            <div className="contact_subtitle" data-aos="fade-left">
                <img src={wave} alt="wind" />
                <p>
                    Contact
                </p>
            </div>

            <div className="contact_title" data-aos="fade-left">
                <h2>
                    Lets build something amazing together !
                </h2>
            </div>

            <form onSubmit={event => sendMessage(event)}>
                <div className="contact_form_info">
                    <div className="contact_form_info_names">
                        {/* user name */}
                        <input type="text" placeholder="Your name *" required data-aos="fade-left" name="from_name" onChange={(event) => updateInput(event.target, setName)}/>
                        {/* company name */}
                        <input type="text" placeholder="Company name *" data-aos="fade-left" name="from_company" onChange={(event) => updateInput(event.target, setCompany)} />
                    </div>
                    <div className="contact_form_info_contacts">
                        {/* email contact */}
                        <input type="text" placeholder="Email address *" required data-aos="fade-left" name="from_email" onChange={(event) => updateInput(event.target, setEmail)} />
                        {/* number contact */}
                        <input type="text" placeholder="Phone Number *" required data-aos="fade-left" name="from_phone" onChange={(event) => updateInput(event.target, setPhone)} />
                    </div>
                </div>
                
                <div className="contact_form_message">
                    <textarea name="message" id="text" placeholder="Your message *" data-aos="fade-left" required onChange={(event) => updateInput(event.target, setMessage)} /> 
                </div>

                <button type="submit" data-aos="fade-left" > Send Message <img src={send} alt=""/></button>
            </form>
        </div>
    )
}

export default ContactComponent