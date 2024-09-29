let currentYear = new Date().getFullYear();
const footerContent = `© Copyright ©${currentYear} All rights reserved`;

function Footer() {
    return (
        <footer className='mt-44 mb-4'> {/* footer */}
          <p className='text-xs md:text-sm text-center text-white opacity-75 select-none'>
            {footerContent}
          </p>
        </footer>
    );
}

export default Footer;