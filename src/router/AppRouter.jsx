import { Navigate, Route, Routes } from 'react-router-dom'
import { ElViajeDeAprender, Home } from '../pages/'
import { Slider } from '../ui/Slider'


export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='el-viaje-de-aprender' element={<ElViajeDeAprender />} />
                <Route path='prueba' element={<Slider />} />
                <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
        </>
    )
}
