
export const SliderZoom = ({ src, alt, isZoomed, toggleZoom }) => {



    return (
        <>
            {isZoomed &&
                <div className="w-svw h-svh  absolute" >
                    <div className='w-full h-full bg-black opacity-80 '>
                        <p className="text-3xl">Si jalo</p>
                    </div>

                </div>
            }<img
                src={src}
                alt={alt}
                className={`w-1/2 h-auto my-2 hover:scale-110 hover:cursor-pointer transition-transform duration-300 ${isZoomed ? '' : 'hover:scale-105'}`}
                onClick={toggleZoom}
            />
        </>
    )
}