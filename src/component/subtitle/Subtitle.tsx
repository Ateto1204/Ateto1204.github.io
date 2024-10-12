import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SubtitleProps {
    content: string,
    icon: any,
}

function Subtitle({ content, icon }: SubtitleProps) {
    return (
        <section className='flex justify-center items-center pb-[70px]'>
            <FontAwesomeIcon icon={icon} size='xl' />
            <h1 className='font-serif font-semibold leading pl-6
                            text-3xl md:text-4xl lg:text-5xl xl:text-[3.2rem]'>
                {content}
            </h1>
        </section>
    )
}

export default Subtitle;