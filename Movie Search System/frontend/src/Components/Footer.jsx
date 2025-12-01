import "../index.css";

function Footer() {
    return (
        <footer className="footer">
            <p className="footer-text">© {new Date().getFullYear()} Movie App. All rights reserved.</p>
            <p className="footer-text">Crafted with <span className="heart">♥︎</span> by Atish</p>
            <div className="footer-links">
                <a href="#" className="footer-link">Privacy Policy</a>
                <a href="#" className="footer-link">Terms of Service</a>
                <a href="#" className="footer-link">Contact Us</a>
            </div>
        </footer>
    );
}

export default Footer;
