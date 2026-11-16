import { Link } from "react-router"
import { cn } from "../utils/tailwind"
import ArrowLink from "../assets/arrow-link.svg"

function Section({ title, textAlign="left", link, children, className }) {
  return (
    <section className={cn(className)}>
        <div className={link ? `flex text-${textAlign} mb-5` : `text-${textAlign} mb-5`}>
            <h2 className="text-darkgray-2 text-2xl font-bold">{title}</h2>
            {link && (
                <Link 
                    className="flex items-center gap-4 text-primary text-lg ml-auto"
                    to={link.href}
                >
                    {link.text}
                    <img className="w-4" src={ArrowLink} alt="Seta link" />
                </Link>
            )}
        </div>
        {children}
    </section>
  );
}

export default Section;