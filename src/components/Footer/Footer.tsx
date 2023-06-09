import styles from "../../common/styles/Footer.module.css";

import LOGO from "../../common/assets/images/logo.svg";

import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes/routes";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="Staff" />
        </Link>
      </div>
      <div className={styles.rights}>
        Developed by{" "}
        <a
          href="https://github.com/Slobodianiuk1"
          target="_blank"
          rel="noreferrer"
        >
          Slobodianiuk
        </a>
      </div>
      <div className={styles.socials}>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref="./sprite.svg#instagram" />
          </svg>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref="./sprite.svg#facebook" />
          </svg>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref="./sprite.svg#youtube" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
