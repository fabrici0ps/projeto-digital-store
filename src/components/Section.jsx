import { Link } from "react-router"
import { cn } from "../utils/tailwind"

function Section({ title, textAlign="left", link, children, className }) {
  return (
    <section className={cn(className)}>
        <div className={link ? `flex text-${textAlign} mb-5` : `text-${textAlign} mb-5`}>
            <h2 className="text-darkgray-2 text-2xl font-bold">{title}</h2>
            {link && (
                <Link 
                    className="text-primary text-lg ml-auto"
                    to={link.href}
                >
                    {link.text}
                </Link>
            )}
        </div>
        {children}
    </section>
  );
}

export default Section;