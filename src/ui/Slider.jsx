import img1 from "../assets/img/1.webp"
import img2 from "../assets/img/2.webp"
import { LogoImg } from "./LogoImg"



export const Slider = () => {


    return (
        <>
            <div className="w-full h-[80vh]  flex justify-center items-center ">

                <div className="mt-20  grid grid-cols-3 w-full h-fit inset-0 z-0 px-4 absolute sm:grid-cols-2 ">
                    <div /*logos slide container */ className="bg-red  w-full h-[67vh] flex overflow-hidden px-6 ">   {/* TODO que este div superior se convierta en un componente de UI*/}
                        <div /*logos slide */ className="w-full h-auto whitespace-nowrap flex flex-col-reverse animate-slider " >
                            <div className="w-full h-auto flex  flex-col items-end">
                                {/* TODO hacerle caja de luz al darle click a la imagen */}
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
                    <div /*logos slide container */ className="bg-red  w-full h-[67vh] flex overflow-hidden px-6 ">   {/* TODO que este div superior se convierta en un componente de UI*/}
                        <div /*logos slide */ className="w-full h-auto whitespace-nowrap flex flex-col animate-sliderRev " >
                            <div className="w-full h-auto flex  flex-col items-end">
                                {/* TODO hacerle caja de luz al darle click a la imagen */}
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
                    <div /*logos slide container */ className="bg-red  w-full h-[67vh] flex overflow-hidden px-6 ">   {/* TODO que este div superior se convierta en un componente de UI*/}
                        <div /*logos slide */ className="w-full h-auto whitespace-nowrap flex flex-col-reverse animate-slider " >
                            <div className="w-full h-auto flex  flex-col items-end">
                                {/* TODO hacerle caja de luz al darle click a la imagen */}
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

                </div> <div className='relative z-10 '>
                    <LogoImg />
                </div>
            </div>
        </>
    )
}
