interface LinkProps {
    href: string,
    content: string,
}

export const HoverLink = ({ href, content }: LinkProps) => (
    <a
        href={href}
        target='_blank'
        className='transition-[0.2s] text-gray-600 mx-2 font-semibold'
        onMouseEnter={e => e.currentTarget.style.opacity = `0.41`}
        onMouseLeave={e => e.currentTarget.style.opacity = `0.82`}
    >
        {content}
    </a>
);