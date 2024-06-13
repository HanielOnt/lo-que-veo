import img1 from "../assets/img/23.webp"
import img2 from "../assets/img/24.webp"
// import { SliderZoom } from "../components/SliderZoom"

export const Slider = ({ isZoomed, toggleZoom, animationDirection }) => {
    //TODO Checar si al poner el useImageZoom, el isZoomed cambia en los tres  (✅ Si cambia !)       
    //TODO Crear una funcion para que haga random el orden de las fotos cada recarga
    //TODO Tener una variable para el estado del zoom de la imagen para que esto pueda pausar el slider
    //TODO Hacer la caja de luz para cada imagen
    //TODO Renderizar las imagenes desde el back
    //TODO Poder hacer la direccion del slider independiente  



    return (
        <>
            <div /*logos slide container */ className="bg-red  w-full h-[67vh] flex overflow-hidden px-6 md:h-[72vh]  sm:h-[78vh] ">
                <div /*logos slide */ className={`w-full h-auto whitespace-nowrap flex  ${animationDirection} ${isZoomed ? "pause" : null} `}>
                    <div className="w-full h-auto flex  flex-col items-end">
                        <img src={img1} className="w-1/2 h-auto my-2 hover:scale-110 hover:cursor-pointer" onClick={toggleZoom} />
                    </div>
                    <div className="w-full h-auto flex flex-col items-center hover:scale-110 hover:cursor-pointer" onClick={toggleZoom}>
                        <img src={img2} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-end hover:scale-110 hover:cursor-pointer  " onClick={toggleZoom}>
                        <img src={img1} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-start hover:scale-110 hover:cursor-pointer  " onClick={toggleZoom}>
                        <img src={img2} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-end hover:scale-110 hover:cursor-pointer  " onClick={toggleZoom}>
                        <img src={img1} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-start hover:scale-110 hover:cursor-pointer  " onClick={toggleZoom}>
                        <img src={img2} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-end hover:scale-110 hover:cursor-pointer  " onClick={toggleZoom}>
                        <img src={img1} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-start hover:scale-110 hover:cursor-pointer  " onClick={toggleZoom}>
                        <img src={img2} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-end hover:scale-125 hover:cursor-pointer  " onClick={toggleZoom}>
                        <img src={img1} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-start hover:scale-110 hover:cursor-pointer  " onClick={toggleZoom}>
                        <img src={img2} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-end hover:scale-125 hover:cursor-pointer  " onClick={toggleZoom}>
                        <img src={img1} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-start hover:scale-110 hover:cursor-pointer  " onClick={toggleZoom}>
                        <img src={img2} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-end hover:scale-125 hover:cursor-pointer  " onClick={toggleZoom}>
                        <img src={img1} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-start hover:scale-110 hover:cursor-pointer  " onClick={toggleZoom}>
                        <img src={img2} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-end hover:scale-125 hover:cursor-pointer  " onClick={toggleZoom}>
                        <img src={img1} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-start hover:scale-110 hover:cursor-pointer  " onClick={toggleZoom}>
                        <img src={img2} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-end hover:scale-125hover:cursor-pointer " onClick={toggleZoom} >
                        <img src={img1} className="w-1/2 h-auto my-2 " />
                    </div>
                </div>
            </div>
        </>
    )
}
