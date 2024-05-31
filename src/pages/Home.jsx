import logo from '../assets/logo.svg'
import { Footer, Navbar } from '../components/'
export const Home = () => {

    return (
        <main className="w-full h-screen flex flex-col justify-around content-center  p-4 snap-mandatory snap-y overflow-scroll scroll-smooth">
            <Navbar />
            <section className='w-full h-svh '>
                <div className='w-full h-screen flex justify-center items-center  snap-center'>
                    <img src={logo} alt='lo que veo logo' />
                </div>
                <Footer />
            </section>


        </main>
    )
}

