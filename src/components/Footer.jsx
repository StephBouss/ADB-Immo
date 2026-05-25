import Link from 'next/link';
import { Globe, Camera, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.col}>
            <div className={styles.logo}>ADB <span className={styles.logoAccent}>Immo</span></div>
            <p className={styles.tagline}>L'EXCELLENCE IMMOBILIÈRE À VOTRE PORTÉE</p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialIcon}><Globe size={20} /></a>
              <a href="#" className={styles.socialIcon}><Camera size={20} /></a>
              <a href="#" className={styles.socialIcon}><MessageCircle size={20} /></a>
            </div>
          </div>
          
          <div className={styles.col}>
            <h4 className={styles.title}>Liens Rapides</h4>
            <ul className={styles.links}>
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="/properties">Biens immobiliers</Link></li>
              <li><Link href="/services">Nos Services</Link></li>
              <li><Link href="/about">À propos de nous</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className={styles.col}>
            <h4 className={styles.title}>Contact</h4>
            <ul className={styles.contactList}>
              <li><MapPin size={18} className={styles.icon} /> Résidence Équateur, Villa 3<br/>Libreville – Gabon</li>
              <li><Phone size={18} className={styles.icon} /> +(241) 77 353 433<br/>+(241) 66 257 839</li>
              <li><Mail size={18} className={styles.icon} /> adbimmo01@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} elyon crea. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
