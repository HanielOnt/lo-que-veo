import { NavLink, useLocation } from "react-router-dom"
import { LogoImg } from "../ui/LogoImg";


export const Navbar = () => {
    const location = useLocation()

    return (
        <nav >
            <div className="w-full h-fit fixed top-0 flex flex-row justify-around items-center  py-3 bg-white">
                <NavLink to="https://calendly.com/loqueveo/30min" target="_blank" rel="noopener noreferrer" className="uppercase text-md sm:text-sm lg:text-xl">Agendame</NavLink>
                {
                    location.pathname == '/el-viaje-de-aprender'
                        ? <NavLink to='/home'><LogoImg /></NavLink>
                        : <NavLink to='/el-viaje-de-aprender' className="text-md uppercase text-center  font-openSI leading-none hover:font-openSBI sm:text-sm lg:text-2xl">not famous <br />pero conocido</NavLink>
                }
                <NavLink to="https://www.instagram.com/loqueveooo/?hl=en" target="_blank" rel="noopener noreferrer" className="uppercase text-md sm:text-sm lg:text-xl">sígueme</NavLink>
            </div >
        </nav>
    )
}

