import { LogoImg } from '../ui/LogoImg'
import { Slider } from '../ui/Slider'
export const Home = () => {


    return (
        <main >
            <section className="w-full h-[80vh]  flex justify-center items-center ">
                <div className='relative z-10 bg-white'>
                    <LogoImg />
                </div>
                <div className="mt-20  grid grid-cols-3 w-full h-fit inset-0 z-0 px-4 absolute sm:grid-cols-2 ">
                    <Slider />
                    <Slider />
                    <Slider />
                </div>

            </section>

        </main>
    )
}

