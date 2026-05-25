"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './HeroSlider.module.css';

const slides = [
  "/images/hero.png",
  "/images/villa1.png",
  "/images/apartment1.png"
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          style={{ backgroundImage: `url(${slide})` }}
        ></div>
      ))}
      <div className={styles.heroOverlay}></div>
      
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Trouvez votre bien idéal au Gabon</h1>
        <p className={styles.heroSubtitle}>Achat • Vente • Location • Gestion Immobilière</p>
        <div className={styles.heroButtons}>
          <Link href="/properties" className="btn btn-primary">Voir les biens</Link>
          <a href="https://wa.me/24177353433" className="btn btn-gold">Contact WhatsApp</a>
        </div>
      </div>
      
    </section>
  );
}
