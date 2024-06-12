import { useState } from "react";

export const useImageZoom = () => {
    const [isZoomed, setIsZoomed] = useState(false);

    const toggleZoom = () => {
        setIsZoomed(!isZoomed);
    }

    return {
        isZoomed,
        toggleZoom
    }
}