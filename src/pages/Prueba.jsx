import img1 from "../assets/img/1.webp"
import img2 from "../assets/img/2.webp"

export const Prueba = () => {


    return (
        <>
            <div className="w-full h-[70vh] mt-24">
                <div className="grid grid-cols-3 w-full h-full  ">
                    <div className="bg-red w-full h-full flex overflow-hidden">
                        <div /*logos slide */ className=" whitespace-nowrap flex flex-col-reverse animate-slider " >
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
                    <div className="bg-red w-full h-full flex overflow-hidden">
                        <div /*logos slide */ className=" whitespace-nowrap flex flex-col animate-sliderRev " >
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
                    <div className="bg-red w-full h-full flex overflow-hidden">
                        <div /*logos slide */ className=" whitespace-nowrap flex flex-col-reverse animate-slider " >
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
                </div>
            </div>
        </>
    )
}