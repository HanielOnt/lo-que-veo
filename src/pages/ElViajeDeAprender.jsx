import img_3 from '../assets/img/image 6.webp'
import img_4 from '../assets/img/image 7.webp'
import img_5 from '../assets/img/image 8.webp'
import { ImageZoom } from '../components/ImageZoom'

export const ElViajeDeAprender = () => {

    return (
        <section className='flex flex-col max-h-[98vh] mt-[3rem] py-4 px-6 overflow-hidden sm:overflow-visible lg:pt-8 sm:h-[80vh] sm:py-auto  sm:py-2' >

            <div className='w-full sm:mb-2'>
                <h1 className='tittle sm:ml-0 lg:text-3xl'>el viaje de aprende a ver</h1>
            </div>
            <div className='w-full h-[calc(87vh-3rem)] overflow-hidden sm:overflow-visible  sm:items-start sm:pt-0 sm:h-ful lg:h-auto'>
                <div className='max-w-[100vw]  h-fit flex flex-col lg:flex-row mt-4  sm:h-auto lg:h-[calc(70%-3rem)] sm:pt-0'>
                    <div className='w-full max-h-[90%] grid grid-cols-2  items-start  lg:w-1/2  '>
                        <div className='max-h-[50%] w-auto flex flex-col  gap-4 sm:mt-0 sm:p-0 sm:gap-2 sm:pr-1'>
                            <div className=' max-w-[100%]'>
                                <ImageZoom className='w-auto h-auto' src={img_4} alt={'imagen 4'} />
                            </div>
                            <div >
                                <ImageZoom className='w-auto h-auto' src={img_5} alt={'imagen 5'} />
                            </div>
                        </div>
                        <div className='ml-4 pt-2 sm:h-auto sm:ml-0  sm:pl-1'>
                            <ImageZoom className='w-full h-full' src={img_3} alt={'imagen 3'} />
                        </div>
                    </div>

                    <div className='w-full h-auto  text-pretty  lg:w-1/2 lg:px-4 '>
                        <div className='text-container h-auto flex flex-col justify-center items-start gap-2 py-2 '>
                            <p className='p-text md:text-[.9rem] md:leading-[1rem] lg:text-lg lg:leading-[1.25rem] '>Ver propósito en cada conexión. Ver esperanza después de pasar por una pérdida. Ver luz en lugares oscuros. Ver la vida en la muerte. Ver gris donde antes solo veía blanco y negro. Ver la belleza en cada momento, incluso en los dolorosos. Ver historias. Ver la realidad de la forma más sincera y espontanea. Ver la magia en lo común y lo corriente.</p>

                            <p className='p-text md:text-[.9rem] md:leading-[1rem] lg:text-lg lg:leading-[1.25rem] '>Es el viaje de nunca perder de vista la maravilla de cada ser humano y cada rincón que tengo el privilegio de encontrar. La oportunidad de recordarles que ellos importan, que su historia importa y que poseer nuestra historia es lo más valiente que podemos hacer.</p>

                            <p className='p-text md:text-[.9rem] md:leading-[1rem] lg:text-lg lg:leading-[1.25rem] '>Lo que veo es una aventura más allá de mi imaginación más salvaje, confiando en que cada capítulo de mi historia trabajará en conjunto para el bien de los demás.</p>
                            <p className='p-text md:text-[.9rem] md:leading-[1rem] lg:text-lg lg:leading-[1.25rem] '>No tengo como compartir todas las caras lindas que he visto y que me han dado ratos riquísimos de compañía y conversación. Muchas que me faltan por fotografiar, muchas que quiero seguir retratando, muchas que ya no están cerca y me dieron para toda mi vida.</p>
                        </div>
                    </div>
                </div>
            </div>


        </section >

    )
}
