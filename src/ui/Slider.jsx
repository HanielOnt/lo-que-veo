import img1 from "../assets/img/1.webp"
import img2 from "../assets/img/2.webp"
// import { SliderZoom } from "../components/SliderZoom"

export const Slider = () => {
    Math.random()

    return (
        <>
            <div /*logos slide container */ className="bg-red  w-full h-[67vh] flex overflow-hidden px-6 md:h-[72vh]  sm:h-[78vh] ">
                <div /*logos slide */ className="w-full h-auto whitespace-nowrap flex flex-col-reverse animate-slider hover:pause " >
                    <div className="w-full h-auto flex  flex-col items-end">
                        <img src={img1} className="w-1/2 h-auto my-2 hover:scale-110" />
                    </div>
                    <div className="w-full h-auto flex flex-col items-center hover:scale-110">
                        <img src={img2} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-end hover:scale-110">
                        <img src={img1} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-start hover:scale-110">
                        <img src={img2} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-end hover:scale-110">
                        <img src={img1} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-start hover:scale-110">
                        <img src={img2} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-end hover:scale-110">
                        <img src={img1} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-start hover:scale-110">
                        <img src={img2} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-end hover:scale-125">
                        <img src={img1} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-start hover:scale-110">
                        <img src={img2} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-end hover:scale-125">
                        <img src={img1} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-start hover:scale-110">
                        <img src={img2} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-end hover:scale-125">
                        <img src={img1} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-start hover:scale-110">
                        <img src={img2} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-end hover:scale-125">
                        <img src={img1} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-start hover:scale-110">
                        <img src={img2} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-end hover:scale-125">
                        <img src={img1} className="w-1/2 h-auto my-2 " />
                    </div>
                </div>
            </div>
        </>
    )
}
