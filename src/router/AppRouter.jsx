import { Navigate, Route, Routes } from 'react-router-dom'
import { ElViajeDeAprender, Home, Prueba } from '../pages/'


export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='el-viaje-de-aprender' element={<ElViajeDeAprender />} />
                <Route path='prueba' element={<Prueba />} />
                <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
        </>
    )
}
