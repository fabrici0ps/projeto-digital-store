import logoHeader from "../assets/logo-header.svg?react"
import logoFooter from "../assets/logo-footer.svg?react"
import {cn} from "../utils/tailwind"

function Logo({location, className}) {
    const Logo = location === 'header' ? logoHeader : logoFooter;
    return (
        <Logo className={cn(className, "w-[253px] h-11")} />
    )
}

export default Logo