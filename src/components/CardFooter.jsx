import { cn } from "../utils/tailwind"

function CardFooter({title, children, className}) {
    return (
        <div className={cn(className)}>
            <h3 className="text-lg font-semibold mb-7">{title}</h3>
            <ul className="flex flex-col gap-3">
                {children}
            </ul>
        </div>
    )
}

export default CardFooter