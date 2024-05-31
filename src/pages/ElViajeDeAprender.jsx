import img_3 from '../assets/img/image-3.webp'
import img_4 from '../assets/img/image-4.webp'
import img_5 from '../assets/img/image-5.webp'
import { ImageZoom } from '../components/ImageZoom'

export const ElViajeDeAprender = () => {

    return (
        <section className='w-full h-svh '>
            <div className='w-full h-svh flex flex-col justify-center  px-4'>

                <div className='w-full '>
                    <h1 className='text-xl uppercase'>el viaje de aprende a ver</h1>
                </div>
                <div className='w-full flex justify-center content-evenly max-[720px]:flex-col'>
                    <div className='w-[600px] h-[300px] relative max-[720px]:max-w-[400px] '>
                        <div className='absolute top-0 left-0'>
                            <ImageZoom src={img_4} alt={'imagen 4'} />
                        </div>
                        <div className='absolute top-0 right-0'>
                            <ImageZoom src={img_3} alt={'imagen 3'} />
                        </div>
                        <div className='absolute bottom-0 left-10'>
                            <ImageZoom src={img_5} alt={'imagen 5'} />
                        </div>

                    </div>
                    <aside className='w-fit px-10'>
                        <p className='text-xs leading-none'>Ver propósito en cada conexión.Ver esperanza después de pasar por una pérdida. Ver luz en lugares oscuros.Ver la vida en la muerte. Ver gris donde antes solo veía blanco y negro. Ver la belleza en cada momento, incluso en los dolorosos. Ver historias.Ver la realidad de la forma más sincera y espontanea. Ver la magia en lo común y lo corriente.</p>
                        <br />
                        <p className='text-xs leading-none'>Es el viaje de nunca perder de vista la maravilla de cada ser humano y cada rincón que tengo el privilegio de encontrar.</p>
                        <br />
                        <p className='text-xs leading-none'>La oportunidad de recordarles que ellos importan, que su historia importa y que poseer nuestra historia es lo más valiente que podemos hacer.
                            <br />
                            Lo que veo es una aventura más allá de mi imaginación más salvaje, confiando en que cada capítulo de mi historia trabajará en conjunto para el bien de los demás.</p>
                        <br />
                        <p className='text-xs leading-none'>No tengo como compartir todas las caras lindas que he visto y que me han dado ratos riquísimos de compañía y conversación. Muchas que me faltan por fotografiar, muchas que quiero seguir retratando, muchas que ya no están cerca y me dieron para toda mi vida.</p>
                    </aside>
                </div>
            </div>

        </section >

    )
}
