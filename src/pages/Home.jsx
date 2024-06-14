import { useState } from 'react'
import { LogoImg, Slider, Lightbox } from '../ui/'
import { useImageZoom } from '../Hooks/useImageZoom'

export const Home = () => {

    const animationDirection = {
        downwards: 'animate-slider flex-col',
        upwards: 'animate-sliderRev flex-col-reverse'
    }

    const { isZoomed, toggleZoom } = useImageZoom()

    const [zoomImg, setZoomImg] = useState()

    const handleImgSrc = (src) => {
        setZoomImg(src)
    }

    return (
        <main >

            <section className="w-full h-[80vh]  flex justify-center items-center md:h-[85vh] sm:h-[90vh]">
                <div className='relative z-10'>
                    <LogoImg />
                </div>
                <div className="mt-20  grid grid-cols-3 w-full h-fit inset-0 z-0 px-4 absolute sm:grid-cols-2  md:mt-16 ">
                    <Slider isZoomed={isZoomed} toggleZoom={toggleZoom} animationDirection={animationDirection.downwards} handleImgSrc={handleImgSrc} />
                    <Slider isZoomed={isZoomed} toggleZoom={toggleZoom} animationDirection={animationDirection.upwards} handleImgSrc={handleImgSrc} />
                    <div className='sm:hidden'>
                        <Slider isZoomed={isZoomed} toggleZoom={toggleZoom} animationDirection={animationDirection.downwards} handleImgSrc={handleImgSrc} />
                    </div>

                </div>
            </section>
            {
                isZoomed &&
                <Lightbox src={zoomImg} alt={'Foto'} toggleZoom={toggleZoom} />
            }

        </main>
    )
}

