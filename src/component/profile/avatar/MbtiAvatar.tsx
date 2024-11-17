function MbtiAvatar({ imgUrl }: { imgUrl: string }) {
    return (
        <div className='card w-28 h-auto transform-rotateY-180
                        bg-slate-100 rounded-lg shadow-none
                        hover:shadow-2xl transition-shadow
                        2xl:w-64 lg:w-52 md:w-36 xl:left-16 md:left-4'>
            <p className='flex justify-center text-sm pt-1 
                    md:text-xl lg:text-2xl xl:text-3xl md:pt-4 
                    font-semibold text-violet-600'>
                ENTJ
            </p>
            <img
                src={imgUrl}
                alt='ENTJ'
                className='md:m-5 py-1 md:py-2 drop-shadow-2xl'
            />
        </div>
    )
}

export default MbtiAvatar;