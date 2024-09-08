const FooterComponent = () => {
    return (
        <footer>
            <div className="footer_content">
                <div className="footer_content_location">
                    <h3>
                        Location
                    </h3>
                    <p>
                        Faro - Portugal
                    </p>
                </div>

                <div className="footer_content_email">
                    <h3>
                        Email
                    </h3>
                    <a href="mailto:mccartheney@hotmail.com">
                        <p>
                            mccartheney@hotmail.com
                        </p>
                    </a>
                </div>

                <div className="footer_content_github">
                    <h3>
                        GitHub
                    </h3>
                    <a href="https://github.com/mccartheney" target="_blank">
                        <p>
                            @mccartheney
                        </p>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent