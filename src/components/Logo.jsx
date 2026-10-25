import logoHeader from "../assets/logo-header.svg"
import logoFooter from "../assets/logo-footer.svg"
import {cn} from "../utils/tailwind"

function Logo({location, className}) {
    const logo = location === 'header' ? logoHeader : logoFooter;
    return (
        <img src={logo} alt="Logo" className={cn(className)} />
    )
}

export default Logo