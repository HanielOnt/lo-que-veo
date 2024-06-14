
export const Lightbox = ({ src, alt, toggleZoom }) => {

    return (
        <>
            <div
                className="fixed inset-0 bg-black bg-opacity-80  z-50"
                onClick={toggleZoom}
            >
                <div className="w-full h-svh relative flex justify-center items-center ">
                    <button className="absolute right-0 top-0  m-4 w-8 h-8 bg-white border-2 border-black rounded-full flex items-center justify-center hover:bg-slate-100 hover:font-bold active:bg-black active:border-white">
                        <span className=" text-black text-xl  active:text-white" onClick={toggleZoom}>
                            X
                        </span>
                    </button>
                    <img src={src} alt={alt} className="w-fit max-w-full h-[80vh] object-contain p-4 lg:p-0" />
                </div>
            </div>
        </>
    )
}