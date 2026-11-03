import { Link } from "react-router"

function Section({ title, textAlign="left", link, children }) {
  return (
    <section className="flex flex-1 flex-col w-full px-28 mt-11">
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