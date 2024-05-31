import { useState } from "react";

export const ImageZoom = ({ src, alt }) => {
    const [isZoomed, setIsZoomed] = useState(false);

    const toggleZoom = () => {
        setIsZoomed(!isZoomed);
    }
    return (
        <>
            {isZoomed && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80  z-50"
                    onClick={toggleZoom}
                >
                    <div className="w-full h-svh relative flex justify-center items-center">
                        <button className="absolute right-0 top-0  m-4 w-8 h-8 bg-white border-2 border-black rounded-full flex items-center justify-center hover:bg-slate-100 hover:font-bold active:bg-black active:border-white">
                            <span className=" text-black text-xl  active:text-white">
                                X
                            </span>
                        </button>
                        <img src={src} alt={alt} className="max-w-full max-h-full" />
                    </div>
                </div>
            )}
            <img
                src={src}
                alt={alt}
                className={`cursor-pointer transition-transform duration-300 ${isZoomed ? '' : 'hover:scale-105'}`}
                onClick={toggleZoom}
            />
        </>)
}
