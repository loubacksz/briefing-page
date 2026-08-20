import '../assets/css/Footer.css'

function Footer() {

    return(
        <footer className='footer-container'>
            <p className='footer-text'>C-Innovation Brasil &copy; 2008 - {new Date().getFullYear()} </p>
        </footer>
    );
}

export default Footer;