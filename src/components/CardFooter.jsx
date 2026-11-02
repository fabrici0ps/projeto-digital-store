import { Link } from "react-router"
import { cn } from "../utils/tailwind"

function CardFooter({title, informations, className}) {
    return (
        <div className={cn(className)}>
            <h3 className="text-lg font-semibold mb-7">{title}</h3>
            <ul className="flex flex-col gap-3">
                {informations.map((item, index) => (
                    <li key={index}>
                        <Link to={item.link}>{item.text}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CardFooter