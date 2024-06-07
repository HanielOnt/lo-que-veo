import { LogoImg } from '../ui/LogoImg'
import { Slider } from '../ui/Slider'
export const Home = () => {


    return (
        <main >
            <section className="w-full h-[80vh]  flex justify-center items-center md:h-[85vh] sm:h-[90vh]">
                <div className='relative z-10'>
                    <LogoImg />
                </div>
                <div className="mt-20  grid grid-cols-3 w-full h-fit inset-0 z-0 px-4 absolute sm:grid-cols-2  md:mt-16 ">
                    <Slider />
                    <Slider />
                    <div className='sm:hidden'>
                        <Slider />
                    </div>

                </div>

            </section>

        </main>
    )
}

