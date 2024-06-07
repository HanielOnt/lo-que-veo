import img1 from "../assets/img/1.webp"
import img2 from "../assets/img/2.webp"



export const Slider = () => {


    return (
        <>
            <div /*logos slide container */ className="bg-red  w-full h-[67vh] flex overflow-hidden px-6 ">
                <div /*logos slide */ className="w-full h-auto whitespace-nowrap flex flex-col-reverse animate-slider " >
                    <div className="w-full h-auto flex  flex-col items-end">
                        <img src={img1} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-center">
                        <img src={img2} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-end">
                        <img src={img1} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-start">
                        <img src={img2} className="w-1/2 h-auto my-2 " />
                    </div>
                    <div className="w-full h-auto flex flex-col items-end">
                        <img src={img2} className="w-1/2 h-auto my-2 " />
                    </div>
                </div>
            </div>
        </>
    )
}
