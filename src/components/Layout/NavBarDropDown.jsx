import { HashLink } from "react-router-hash-link"

export default function NavBarDropDown({title, link}){

    return(

        <>
            <HashLink to={link}><p className="px-4 py-2 text-sm rounded-lg hover:bg-brand-accent-130 cursor-pointer transition-colors hover:scale-110 transition-transform duration-200">{title}</p></HashLink>
            <hr className='border-solid border-white/40 w-20 mx-auto text-center'/>
        </>

    )


}