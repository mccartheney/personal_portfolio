import wave from "../../images/geral/wind.svg"
import send from "../../images/geral/send.png"

const ContactComponent = () => {
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

            <form onSubmit={event => event.preventDefault()}>
                <div className="contact_form_info">
                    <div className="contact_form_info_names">
                        {/* user name */}
                        <input type="text" placeholder="Your name *" required data-aos="fade-left" />
                        {/* company name */}
                        <input type="text" placeholder="Company name *" data-aos="fade-left" />
                    </div>
                    <div className="contact_form_info_contacts">
                        {/* email contact */}
                        <input type="text" placeholder="Email address *" required data-aos="fade-left" />
                        {/* number contact */}
                        <input type="text" placeholder="Phone Number *" required data-aos="fade-left" />
                    </div>
                </div>
                
                <div className="contact_form_message">
                    <textarea name="text" id="text" placeholder="Your message *" data-aos="fade-left" required></textarea>
                </div>

                <button type="submit" data-aos="fade-left" > Send Message <img src={send} alt=""/></button>
            </form>
        </div>
    )
}

export default ContactComponent