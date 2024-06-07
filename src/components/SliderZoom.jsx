import { useState } from "react"

export const SliderZoom = ({ src, alt }) => {
    const [isZoom, setIsZoom] = useState(false)

    const handleZoom = () => {
        setIsZoom(!isZoom)
    }

    return (
        <>
            {isZoom &&
                <div className="w-full h-full bg-red-salte-500" >
                    <modal className='w-svw h-svh '>
                        <p className="text-3xl">Si jalo</p>
                    </modal>

                </div>
            }<img
                src={src}
                alt={alt}
                className={`cursor-pointer transition-transform duration-300 ${isZoom ? '' : 'hover:scale-105'}`}
                onClick={handleZoom}
            />
        </>
    )
}