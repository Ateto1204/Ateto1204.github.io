interface SubtitleProps {
    content: string,
}

export const Subtitle = ({ content }: SubtitleProps) => (
    <h1 className='font-serif font-semibold leading pl-6
                    text-3xl md:text-4xl lg:text-5xl xl:text-[3.2rem]'>
        {content}
    </h1>
);