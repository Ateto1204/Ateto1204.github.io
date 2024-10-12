import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


interface ContactIcon {
    href: string, 
    icon: any, 
}

function IconLink({ href, icon }: ContactIcon) {
    return (
        <a
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className='opacity-80 p-2 hover:opacity-40 hover:transition-opacity'
        >
            <FontAwesomeIcon icon={icon} size='xl' />
        </a>
    )
}

export default IconLink;