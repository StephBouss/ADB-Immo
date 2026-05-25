"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.topBar}>
        <div className={styles.topBarContainer}>
          <div className={styles.contactInfo}>
            <span className={styles.contactItem}><Phone size={14} /> +(241) 77 353 433 / 66 257 839</span>
            <span className={styles.contactItem}><Mail size={14} /> adbimmo01@gmail.com</span>
          </div>
          <div className={styles.addressInfo}>
            <MapPin size={14} /> Résidence Équateur, Villa 3, Libreville – Gabon
          </div>
        </div>
      </div>

      <div className={styles.mainNav}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>
            <img src="/logo.png" alt="ADB Immo" style={{ height: '60px', width: 'auto' }} />
          </Link>

          <nav className={`${styles.navLinks} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>Accueil</Link>
            <Link href="/properties" onClick={() => setMobileMenuOpen(false)}>Biens</Link>
            <Link href="/buy" onClick={() => setMobileMenuOpen(false)}>Acheter</Link>
            <Link href="/rent" onClick={() => setMobileMenuOpen(false)}>Louer</Link>
            <Link href="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)}>À propos</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </nav>

          <button className={styles.mobileToggle} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
}
