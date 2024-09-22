import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const IconLink = ({ href, icon }: { href: string; icon: any }) => (
    <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className='opacity-80 p-2 hover:opacity-40 hover:transition-opacity'
    >
        <FontAwesomeIcon icon={icon} size='xl' />
    </a>
);