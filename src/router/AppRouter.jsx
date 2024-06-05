import { Navigate, Route, Routes } from 'react-router-dom'
import { ElViajeDeAprender, Home } from '../pages/'


export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='el-viaje-de-aprender' element={<ElViajeDeAprender />} />
                <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
        </>
    )
}
