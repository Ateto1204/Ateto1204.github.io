import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


interface ContactIcon {
    href: string, 
    icon: any, 
}

export const IconLink = ({ href, icon }: ContactIcon) => (
    <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className='opacity-80 p-2 hover:opacity-40 hover:transition-opacity'
    >
        <FontAwesomeIcon icon={icon} size='xl' />
    </a>
);