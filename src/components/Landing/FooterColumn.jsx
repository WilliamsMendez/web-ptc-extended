import { HashLink } from "react-router-hash-link"

export default function FooterColumn({title, links}){

    return(

        <>
        
            <ul className="flex flex-col">
            <h1 className="font-bold py-2 pb-5">{title}</h1>

            {links.map((link, idx) => (
                <li key={idx} className="p-1 link-underline link-underline-white">
                {link.external ? (
                    <a href={link.to} target="_blank" rel="noopener noreferrer" className="flex flex-row gap-2 items-center">
                    {link.icon && link.icon}
                    {link.label}
                    </a>
                ) : (
                    <HashLink to={link.to}>{link.label}</HashLink>
                )}
                </li>
            ))}
            </ul>

        </>

    )

}