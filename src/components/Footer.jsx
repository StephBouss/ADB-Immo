import Link from 'next/link';
import { MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.goldBar}></div>

      <div className="container">
        <div className={styles.grid}>
          <div className={styles.col}>
            <Link href="/" className={styles.logoLink}>
              <img src="/logo.png" alt="ADB Immo" className={styles.logoImg} />
            </Link>
            <p className={styles.tagline}>L'EXCELLENCE IMMOBILIÈRE À VOTRE PORTÉE</p>
            <div className={styles.socials}>
              <a href="https://wa.me/24177353433" className={styles.socialIcon} aria-label="WhatsApp"><MessageCircle size={18} /></a>
            </div>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Liens Rapides</h4>
            <ul className={styles.links}>
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="/properties">Biens immobiliers</Link></li>
              <li><Link href="/buy">Acheter</Link></li>
              <li><Link href="/rent">Louer</Link></li>
              <li><Link href="/services">Nos Services</Link></li>
              <li><Link href="/about">À propos</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li>
                <span className={styles.iconCircle}><MapPin size={16} /></span>
                <span>Résidence Équateur, Villa 3<br />Libreville – Gabon</span>
              </li>
              <li>
                <span className={styles.iconCircle}><Phone size={16} /></span>
                <span>+(241) 77 353 433<br />+(241) 66 257 839</span>
              </li>
              <li>
                <span className={styles.iconCircle}><Mail size={16} /></span>
                <span>adbimmo01@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} ADB Immo — Tous droits réservés.</p>
          <p className={styles.bottomRight}>www.adbimmo.com</p>
        </div>
      </div>
    </footer>
  );
}
