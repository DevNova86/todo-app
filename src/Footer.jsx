import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-section">
                    <h4>Todd Taylor | Developer</h4>
                </div>

                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>Email: katain86@gmail.com</p>
                    <p>Phone: (972) 674-9026</p>
                    <p>Location: Dallas, TX</p>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="socal-links">
                        <a href="#facbook">Facbook</a>
                        <a href="#twitter">Twitter</a>
                        <a href="#instagram">Instagram</a>
                        <a href="#linkedin">LinkedIn</a>
                    </div>
                </div>

            </div>
            
            <div className="footer-bottom">
                <p>&copy; 2026 Todd Taylor | Developer. All Right Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer