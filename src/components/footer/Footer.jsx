import "./footer.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <span className="footer__list">Design by JW</span>

        <div className="footer__social">
          <a
            href="https://github.com/Joshw9012"
            className="footer__social-link"
            target="_blank"
          >
            <FaGithubSquare />
          </a>

          <a
            href="https://www.linkedin.com/in/josh-wang-8a92ba18b/"
            className="footer__social-link"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
