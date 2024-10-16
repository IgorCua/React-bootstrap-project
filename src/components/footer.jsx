import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
    const [showTopBtn, setShowTopBnt] = useState(false);

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBnt(true);
            } else {
                setShowTopBnt(false);
            }
        });
    }, []);

    return (
        <footer id="footer" className="">

        <Container fluid className="footer">
            <div className="copyright">
                <p>&copy; 2024 Corporate. All right reserved.</p>
            </div>
            <div className="socials">
                <ul>
                    <li>
                        <a 
                            aria-label="facebook link"
                            href="https://www.facebook.com"
                            >
                            <i class="fab fa-facebook-f" />
                        </a>
                    </li>
                    <li>
                        <a
                            aria-label="twitter link"
                            href="https://www.twitter.com"
                            >
                            <i class="fab fa-twitter" />
                        </a>
                    </li>
                    <li>
                        <a
                            aria-label="linkedin link"
                            href="https://www.linkedin.com"
                            >
                            <i class="fab fa-linkedin-in " />
                        </a>
                    </li>
                </ul>
            </div>
            {showTopBtn && <div className="go-top" onClick={goTop}></div>}
        </Container>
    </footer>
    );
}
