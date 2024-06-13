import { useState } from 'react'
import { useImageZoom } from '../Hooks/useImageZoom'
import { LogoImg } from '../ui/LogoImg'
import { Slider } from '../ui/Slider'

export const Home = () => {


    const { isZoomed, toggleZoom } = useImageZoom()

    const animationDirection = {
        downwards: 'animate-slider flex-col',
        upwards: 'animate-sliderRev flex-col-reverse'
    }

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
                <div className='h-full w-full absolute z-50 top-0 ' onClick={toggleZoom}>
                    <div className='h-full w-full bg-black flex justify-center pt-10' >
                        <img src={zoomImg} className='w-auto h-[80vh]' />
                    </div>
                </div>
            }

        </main>
    )
}

