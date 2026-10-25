import logoHeader from "../assets/logo-header.svg"
import logoFooter from "../assets/logo-footer.svg"

function Logo({location}) {
    const logo = location === 'header' ? logoHeader : logoFooter;
    return (
        <img src={logo} alt="Logo" />
    )
}

export default Logo