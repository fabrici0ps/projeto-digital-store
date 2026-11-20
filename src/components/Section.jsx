import { Link } from "react-router"
import { cn } from "../utils/tailwind"
import ArrowLink from "../assets/arrow-link.svg?react"

const alignClasses = {
  left: "md:text-left",
  center: "md:text-center",
  right: "md:text-right",
}

function Section({ title, textAlign="left", link, children, className }) {
  return (
    <section className={cn(className)}>
        <div
            className={cn(
                "text-left mb-5",
                alignClasses[textAlign] || "md:text-left",
                link && "flex items-center justify-between"
            )}
        >
            <h2 className="text-darkgray-2 text-2xl font-bold">
                {title}
            </h2>

            {link && (
                <Link 
                    className="flex items-center gap-2 md:gap-4 text-primary text-sm md:text-lg shrink-0"
                    to={link.href}
                >
                    {link.text}
                    <ArrowLink />
                </Link>
            )}
        </div>
        {children}
    </section>
  );
}

export default Section;