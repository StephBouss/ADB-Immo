import Link from 'next/link';
import { Shield, Home, Key, MapPin, Search, Star, MessageCircle, ArrowRight } from 'lucide-react';
import HeroSlider from '@/components/HeroSlider';
import PropertyCard from '@/components/PropertyCard';
import FloatingSearchBar from '@/components/FloatingSearchBar';
import styles from './page.module.css';

export default function HomePage() {
  const featuredProperties = [
    {
      id: 1,
      title: "Villa Moderne avec Piscine",
      price: "150 000 000",
      location: "Sablière",
      beds: 5,
      baths: 4,
      surface: 350,
      image: "/images/hero.png",
      exclusive: true
    },
    {
      id: 2,
      title: "Appartement de Luxe Vue Mer",
      price: "85 000 000",
      location: "Batterie IV",
      beds: 3,
      baths: 2,
      surface: 180,
      image: "/images/apartment1.png",
      exclusive: false
    },
    {
      id: 3,
      title: "Résidence Contemporaine",
      price: "220 000 000",
      location: "Akanda",
      beds: 6,
      baths: 5,
      surface: 420,
      image: "/images/villa1.png",
      exclusive: true
    }
  ];

  const areas = ['Sablière', 'Akanda', 'Batterie IV', 'Charbonnages', 'Angondjé', 'Louis'];
  const areaImages = ['/images/villa1.png', '/images/hero.png', '/images/apartment1.png'];

  return (
    <>
      <HeroSlider />

      <div className={styles.searchWrapper}>
        <FloatingSearchBar />
      </div>

      <section className="py-5">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Propriétés en Vedette</h2>
            <p className="section-subtitle">Découvrez notre sélection exclusive de biens immobiliers de prestige à travers le Gabon.</p>
          </div>
          
          <div className={styles.propertyGrid}>
            {featuredProperties.map(prop => (
              <PropertyCard key={prop.id} {...prop} />
            ))}
          </div>
          
          <div className="text-center mt-3">
            <Link href="/properties" className="btn btn-secondary">Voir toutes les propriétés <ArrowRight size={18} style={{marginLeft: '8px', verticalAlign: 'middle'}} /></Link>
          </div>
        </div>
      </section>

      <section className={`py-5 ${styles.servicesSection}`}>
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Nos Services</h2>
            <p className="section-subtitle">Une expertise complète pour tous vos projets immobiliers.</p>
          </div>
          
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}><Key size={32} /></div>
              <h3>Achat Immobilier</h3>
              <p>Accompagnement personnalisé pour trouver le bien qui correspond parfaitement à vos attentes et à votre budget.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}><Home size={32} /></div>
              <h3>Vente Immobilière</h3>
              <p>Mise en valeur de votre propriété et réseau d'acheteurs qualifiés pour une vente rapide et au meilleur prix.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}><Search size={32} /></div>
              <h3>Location</h3>
              <p>Vaste choix d'appartements et de villas à louer dans les meilleurs quartiers de Libreville.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}><Shield size={32} /></div>
              <h3>Gestion Locative</h3>
              <p>Sérénité totale avec notre service de gestion complète : encaissement, entretien, et relation locataire.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>150+</div>
              <div className={styles.statLabel}>Propriétés Vendues</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Clients Satisfaits</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>10</div>
              <div className={styles.statLabel}>Années d'Expérience</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>85</div>
              <div className={styles.statLabel}>Biens Disponibles</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Quartiers Prisés</h2>
            <p className="section-subtitle">Explorez les zones les plus recherchées de Libreville.</p>
          </div>
          
          <div className={styles.areasGrid}>
            {areas.map((area, idx) => (
              <div key={idx} className={styles.areaCard}>
                <div className={styles.areaOverlay}></div>
                <img src={areaImages[idx % areaImages.length]} alt={area} className={styles.areaImage} />
                <div className={styles.areaContent}>
                  <h3>{area}</h3>
                  <p>{Math.floor(Math.random() * 20) + 5} propriétés</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container text-center">
          <h2>Vous recherchez un bien immobilier au Gabon ?</h2>
          <p>Notre équipe d'experts est à votre disposition pour concrétiser votre projet.</p>
          <div className={styles.ctaButtons}>
            <a href="tel:+24177353433" className="btn btn-primary">Appeler maintenant</a>
            <a href="https://wa.me/24177353433" className="btn btn-gold">WhatsApp</a>
            <Link href="/contact" className="btn btn-secondary" style={{color: 'white', borderColor: 'white'}}>Planifier une visite</Link>
          </div>
        </div>
      </section>
    </>
  );
}
