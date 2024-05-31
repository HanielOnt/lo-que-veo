import { NavLink, useLocation } from "react-router-dom"
import { LogoImg } from "../ui/LogoImg";


export const Navbar = () => {
    const location = useLocation()

    return (
        <nav className="relative">
            <div className="w-full h-fit fixed top-0 flex flex-row justify-around items-center pt-6 pb-2 bg-white">
                <NavLink to="https://calendly.com/loqueveo/30min" target="_blank" rel="noopener noreferrer" className="uppercase">Agendame</NavLink>
                {
                    location.pathname == '/el-viaje-de-aprender'
                        ? <NavLink to='/home'><LogoImg /></NavLink>
                        : <NavLink to='/el-viaje-de-aprender' className="text-md uppercase text-center text-xl font-openSI leading-none hover:font-openSBI">not famous <br />pero conocido</NavLink>
                }
                <NavLink to="https://www.instagram.com/loqueveooo/?hl=en" target="_blank" rel="noopener noreferrer" className="uppercase">sígueme</NavLink>
            </div >
        </nav>
    )
}

