import logo from './assets/logo.svg';
import googlePlay from './assets/googleplay.svg';
import appStore from './assets/appstore.svg';
import { Links } from './menuData';
import styles from "./Footer.module.css";
// import './Footer.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.inFooter}>
        <div className={styles.mainFooter}>
          <div className={styles.logo}>
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className={styles.dMFooter}>
            <ul className={styles.footerLink}>
              {Links.map((link, linkKey) => (
                <div key={linkKey} className={styles.miUM}>
                  <h4>{link.title}</h4>
                  {link.list && (
                    <div>
                      {link.list.map((b, i) => (
                        <li key={i}>
                          <a href={`${b.slug}`}>{b.title}</a>
                        </li>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <li className={`${styles.miUM} ${styles.right}`}>
                <h4>DOWNLOAD APP</h4>
                <div className={styles.fDownloadAppLink}>
                  <a href="/"><img src={googlePlay} alt="googlePlay" /></a>
                  <a href="/"><img src={appStore} alt="appStore" /></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.bottomFooter}>
          <span className={styles.f_copyright}>All rights reserved &copy; 2022</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
