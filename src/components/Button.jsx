import { cn } from "../utils/tailwind"

function Button({ className, title }) {
    return (
        <button className={cn(
            'text-lightgray-3 rounded-lg text-sm font-bold py-2 hover:brightness-90 transition-all',
            className
        )}>
            {title}
        </button>
    )
}

export default Button