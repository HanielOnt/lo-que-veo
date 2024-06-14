import { useImageZoom } from "../Hooks/useImageZoom";
import { Lightbox } from "../ui/Lightbox";

export const ImageZoom = ({ src, alt }) => {

    const { isZoomed, toggleZoom } = useImageZoom()


    return (
        <>
            {isZoomed && (
                <Lightbox src={src} alt={alt} toggleZoom={toggleZoom} />
            )}
            <img src={src} alt={alt} className={`cursor-pointer transition-transform duration-300 ${isZoomed ? '' : 'hover:scale-105'}`} onClick={toggleZoom}
            />
        </>)
}
