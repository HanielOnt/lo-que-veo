import img_3 from '../assets/img/image 6.webp'
import img_4 from '../assets/img/image 7.webp'
import img_5 from '../assets/img/image 8.webp'
import { ImageZoom } from '../components/ImageZoom'

export const ElViajeDeAprender = () => {

    return (
        <section className='flex flex-col max-h-[98vh] mt-[3rem] py-4 px-6 lg:pt-8 sm:h-[85vh] sm:py-auto overflow-hidden '>

            <div className='w-full sm:mb-4'>
                <h1 className='tittle sm:ml-0 lg:text-3xl'>el viaje de aprende a ver</h1>
            </div>

            <div className='w-full h-[70%] flex flex-row justify-center items-start gap-4 mt-2 sm:flex-col  sm:mt-0 md:items-evenly sm:h-[80%] lg:h-[calc(70%-3rem)] '>
                <div className='w-1/2 h-[90%] grid grid-cols-2 my-auto items-center sm:w-full    '>
                    <div className='h-[100%] w-full flex flex-col  gap-4 sm:mt-0 sm:p-2 sm:gap-2 '>
                        <div>
                            <ImageZoom className='w-auto h-[10%]' src={img_4} alt={'imagen 4'} />
                        </div>
                        <div >
                            <ImageZoom className='w-auto h-[10%]' src={img_5} alt={'imagen 5'} />
                        </div>
                    </div>
                    <div className='flex justify-end ml-4 sm:h-[20vh] sm:items-center sm:ml-0 '>
                        <ImageZoom className='w-full h-full' src={img_3} alt={'imagen 3'} />
                    </div>
                </div>

                <div className='w-1/2 h-full z-50 text-pretty sm:w-full lg:px-4 sm:h-[80%]'>
                    <div className='text-container h-full flex flex-col justify-center items-center gap-2'>
                        <p className='p-text lg:text-lg lg:leading-[1.5rem] '>Ver propósito en cada conexión. Ver esperanza después de pasar por una pérdida. Ver luz en lugares oscuros. Ver la vida en la muerte. Ver gris donde antes solo veía blanco y negro. Ver la belleza en cada momento, incluso en los dolorosos. Ver historias. Ver la realidad de la forma más sincera y espontanea. Ver la magia en lo común y lo corriente.</p>

                        <p className='p-text lg:text-lg lg:leading-[1.5rem] '>Es el viaje de nunca perder de vista la maravilla de cada ser humano y cada rincón que tengo el privilegio de encontrar. La oportunidad de recordarles que ellos importan, que su historia importa y que poseer nuestra historia es lo más valiente que podemos hacer.</p>

                        <p className='p-text lg:text-lg lg:leading-[1.5rem] '>Lo que veo es una aventura más allá de mi imaginación más salvaje, confiando en que cada capítulo de mi historia trabajará en conjunto para el bien de los demás.</p>
                        <p className='p-text lg:text-lg lg:leading-[1.5rem] '>No tengo como compartir todas las caras lindas que he visto y que me han dado ratos riquísimos de compañía y conversación. Muchas que me faltan por fotografiar, muchas que quiero seguir retratando, muchas que ya no están cerca y me dieron para toda mi vida.</p>
                    </div>
                </div>
            </div>


        </section >

    )
}
