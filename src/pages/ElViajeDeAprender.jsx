import img_3 from '../assets/img/image-3.webp'
import img_4 from '../assets/img/image-4.webp'
import img_5 from '../assets/img/image-5.webp'
import { ImageZoom } from '../components/ImageZoom'

export const ElViajeDeAprender = () => {

    return (
        <section>
            <div className='w-full  h-fit mt-[3rem] flex-flex-col justify-center px-6 py-2 lg'>

                <div className='w-full h-full'>
                    <h1 className='text-xl ml-16 uppercase sm:ml-0'>el viaje de aprende a ver</h1>
                </div>

                <div className='w-fit h-fit flex flex-row justify-center items-start gap-4 sm:flex-col md:items-evenly'>
                    <div className='w-1/2 h-[300px] grid grid-cols-2 my-auto items-center sm:w-full sm:h-auto'>
                        <div className='flex flex-col items-end mt-10 gap-4 sm:mt-0 sm:p-2 sm:gap-2'>
                            <div>
                                <ImageZoom src={img_4} alt={'imagen 4'} />
                            </div>
                            <div >
                                <ImageZoom src={img_5} alt={'imagen 5'} />
                            </div>
                        </div>

                        <div className='flex justify-end h-[50vh] sm:h-[20vh] sm:items-center'>
                            <ImageZoom src={img_3} alt={'imagen 3'} />
                        </div>
                    </div>

                    <aside className='w-1/2 h-fit text-pretty sm:w-full lg:px-4'>
                        <p className='text-xs text-start leading-[.8rem] mb-[1rem]'>Ver propósito en cada conexión.Ver esperanza después de pasar por una pérdida. Ver luz en lugares oscuros.Ver la vida en la muerte. Ver gris donde antes solo veía blanco y negro. Ver la belleza en cada momento, incluso en los dolorosos. Ver historias.Ver la realidad de la forma más sincera y espontanea. Ver la magia en lo común y lo corriente.</p>

                        <p className='text-xs leading-[.8rem] mb-[1rem]'>Es el viaje de nunca perder de vista la maravilla de cada ser humano y cada rincón que tengo el privilegio de encontrar. La oportunidad de recordarles que ellos importan, que su historia importa y que poseer nuestra historia es lo más valiente que podemos hacer.</p>

                        <p className='text-xs leading-[.8rem] mb-[1rem]'>Lo que veo es una aventura más allá de mi imaginación más salvaje, confiando en que cada capítulo de mi historia trabajará en conjunto para el bien de los demás.</p>
                        <p className='text-xs leading-[.8rem] mb-[1rem]'>No tengo como compartir todas las caras lindas que he visto y que me han dado ratos riquísimos de compañía y conversación. Muchas que me faltan por fotografiar, muchas que quiero seguir retratando, muchas que ya no están cerca y me dieron para toda mi vida.</p>
                    </aside>
                </div>

            </div>

        </section >

    )
}
