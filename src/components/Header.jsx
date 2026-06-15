"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/properties', label: 'Biens' },
    { href: '/buy', label: 'Acheter' },
    { href: '/rent', label: 'Louer' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'À propos' },
    { href: '/contact', label: 'Contact' },
  ];

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

          {/* Overlay mobile */}
          {mobileMenuOpen && (
            <div className={styles.mobileOverlay} onClick={closeMenu} />
          )}

          <nav className={`${styles.navLinks} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
            {navLinks.map(({ href, label }) => {
              const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className={isActive ? styles.activeLink : ''}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <button className={styles.mobileToggle} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
}
