import { useLocation } from 'react-router-dom'
import logo from '../assets/logo.svg'

export const LogoImg = () => {
    const location = useLocation()
    return (
        < img className={location.pathname == '/el-viaje-de-aprender' ? 'h-10 w-auto' : null} src={logo} alt='lo que veo logo' />

    )
}
