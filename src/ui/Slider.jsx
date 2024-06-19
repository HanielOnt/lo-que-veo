import img1 from "../assets/img/23.webp"
import img2 from "../assets/img/24.webp"

export const Slider = ({ isZoomed, animationDirection, toggleZoom, handleImgSrc }) => {
    //TODO Crear una funcion para que haga random el orden de las fotos cada recarga 
    //TODO Renderizar las imagenes desde el back
    //TODO Hacer un random para las posicion de la imagen en el slider, izq, derecha o al centro

    const handleSlider = (event) => {
        const src = event.target.currentSrc
        handleImgSrc(src);
    }

    return (
        <>
            <div className="bg-red  w-full h-[85vh] flex overflow-hidden px-6 md:h-[72vh]  sm:h-[75vh] ">
                <div className={`w-full  whitespace-nowrap flex  ${animationDirection} ${isZoomed ? "pause h-svh" : 'h-auto'} `}>
                    <div className="w-full h-auto flex  flex-col items-center" onClick={handleSlider}>
                        <img src={img1} className="slider-img" onClick={toggleZoom} />
                    </div>
                    <div className="w-full h-auto flex flex-col items-start hover:scale-110 hover:cursor-pointer " onClick={handleSlider} >
                        <img src={img2} className="slider-img" onClick={toggleZoom} />
                    </div>
                    <div className="w-full h-auto flex  flex-col items-end" onClick={handleSlider}>
                        <img src={img1} className="slider-img" onClick={toggleZoom} />
                    </div>
                    <div className="w-full h-auto flex flex-col items-end hover:scale-110 hover:cursor-pointer " onClick={handleSlider} >
                        <img src={img2} className="slider-img" onClick={toggleZoom} />
                    </div>
                    <div className="w-full h-auto flex  flex-col items-start" onClick={handleSlider}>
                        <img src={img1} className="slider-img" onClick={toggleZoom} />
                    </div>
                    <div className="w-full h-auto flex flex-col items-center hover:scale-110 hover:cursor-pointer " onClick={handleSlider} >
                        <img src={img2} className="slider-img" onClick={toggleZoom} />
                    </div>
                    <div className="w-full h-auto flex  flex-col items-start" onClick={handleSlider}>
                        <img src={img1} className="slider-img" onClick={toggleZoom} />
                    </div>
                    <div className="w-full h-auto flex flex-col items-end hover:scale-110 hover:cursor-pointer " onClick={handleSlider} >
                        <img src={img2} className="slider-img" onClick={toggleZoom} />
                    </div>

                </div>
            </div>
        </>
    )
}
