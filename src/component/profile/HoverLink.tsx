export const HoverLink = () => (
    <a
        href='https://www.aidmics.com/'
        target='_blank'
        className='transition-[0.2s] text-gray-600 '
        onMouseEnter={e => e.currentTarget.style.opacity = `0.41`}
        onMouseLeave={e => e.currentTarget.style.opacity = `0.82`}
    >
        Aidmics Biotechnology Ltd.
    </a>
);