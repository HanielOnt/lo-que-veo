import { useLocation } from 'react-router-dom'
import logo from '../assets/img/logo.webp'

export const LogoImg = () => {
    const location = useLocation()
    return (
        < img className={location.pathname == '/el-viaje-de-aprender' ? 'h-10 w-auto sm:h-8 lg:h-14' : 'w-full h-[20vh] sm:h-auto p-2'} src={logo} alt='lo que veo logo' />

    )
}
