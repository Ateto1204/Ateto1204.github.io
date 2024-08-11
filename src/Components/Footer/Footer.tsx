function Footer() {
    let currentYear = new Date().getFullYear();
    return (
        <section className='mt-44 mb-4'> {/* footer */}
          <p className='text-center text-gray-500 opacity-75'>
            © Copyright ©{currentYear} All rights reserved
          </p>
        </section>
    );
}

export default Footer;