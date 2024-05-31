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
                        <button className="absolute top-0 right-0 p-2 m-4 text-lg font-regular rounded-full text-white bg-gray-400 hover:text-xl active:text-2xl active:bg-gray-600">X</button>
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
