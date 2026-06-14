import Link from 'next/link';
import { Shield, Home, Key, Search, ArrowRight } from 'lucide-react';
import HeroSlider from '@/components/HeroSlider';
import PropertyCard from '@/components/PropertyCard';
import FloatingSearchBar from '@/components/FloatingSearchBar';
import styles from './page.module.css';

export default function HomePage() {
  const featuredProperties = [
    {
      id: 1,
      title: "Villa Moderne avec Piscine",
      price: "150 000 000 FCFA",
      location: "Sablière, Libreville",
      beds: 5,
      baths: 4,
      surface: 350,
      image: "/images/villa-piscine-1.jpg.png",
      exclusive: true
    },
    {
      id: 2,
      title: "Appartement de Luxe Vue Mer",
      price: "85 000 000 FCFA",
      location: "Batterie IV, Libreville",
      beds: 3,
      baths: 2,
      surface: 180,
      image: "/images/apartment1.png",
      exclusive: false
    },
    {
      id: 3,
      title: "Résidence Contemporaine",
      price: "220 000 000 FCFA",
      location: "Akanda, Libreville",
      beds: 6,
      baths: 5,
      surface: 420,
      image: "/images/villa1.png",
      exclusive: true
    }
  ];

  const areas = ['Sablière', 'Akanda', 'Batterie IV', 'Charbonnages', 'Angondjé', 'Louis'];
  const areaImages = ['/images/villa1.png', '/images/hero.png', '/images/apartment1.png'];
  const areaCounts = [18, 12, 15, 9, 11, 7];

  return (
    <>
      <HeroSlider />

      <div className={styles.searchWrapper}>
        <FloatingSearchBar />
      </div>

      {/* ─── Propriétés en vedette ─── */}
      <section className="py-5">
        <div className="container">
          <div className="text-center">
            <div className="section-tag">Sélection Exclusive</div>
            <h2 className="section-title">Propriétés en <span>Vedette</span></h2>
            <div className="gold-line"><span className="gold-line-dot"></span></div>
            <p className="section-subtitle">Découvrez notre sélection exclusive de biens immobiliers de prestige à travers le Gabon.</p>
          </div>

          <div className={styles.propertyGrid}>
            {featuredProperties.map(prop => (
              <PropertyCard key={prop.id} {...prop} />
            ))}
          </div>

          <div className="text-center mt-3">
            <Link href="/properties" className="btn btn-secondary">
              Voir toutes les propriétés <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Nos services ─── */}
      <section className={`py-5 ${styles.servicesSection}`}>
        <div className="container">
          <div className="text-center">
            <div className="section-tag">Ce que nous faisons</div>
            <h2 className="section-title">Nos <span>Services</span></h2>
            <div className="gold-line"><span className="gold-line-dot"></span></div>
            <p className="section-subtitle">Une expertise complète pour tous vos projets immobiliers, de l'achat à la gestion locative.</p>
          </div>

          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}><Key size={30} /></div>
              <h3>Achat Immobilier</h3>
              <p>Accompagnement personnalisé pour trouver le bien qui correspond parfaitement à vos attentes et à votre budget.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}><Home size={30} /></div>
              <h3>Vente Immobilière</h3>
              <p>Mise en valeur de votre propriété et réseau d'acheteurs qualifiés pour une vente rapide et au meilleur prix.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}><Search size={30} /></div>
              <h3>Location</h3>
              <p>Vaste choix d'appartements et de villas à louer dans les meilleurs quartiers de Libreville.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}><Shield size={30} /></div>
              <h3>Gestion Locative</h3>
              <p>Sérénité totale avec notre service de gestion complète : encaissement, entretien, et relation locataire.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
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

      {/* ─── Quartiers ─── */}
      <section className="py-5">
        <div className="container">
          <div className="text-center">
            <div className="section-tag">Où investir</div>
            <h2 className="section-title">Quartiers <span>Prisés</span></h2>
            <div className="gold-line"><span className="gold-line-dot"></span></div>
            <p className="section-subtitle">Explorez les zones les plus recherchées de Libreville.</p>
          </div>

          <div className={styles.areasGrid}>
            {areas.map((area, idx) => (
              <Link key={idx} href={`/properties?location=${area}`} className={styles.areaCard}>
                <div className={styles.areaOverlay}></div>
                <img src={areaImages[idx % areaImages.length]} alt={area} className={styles.areaImage} />
                <div className={styles.areaContent}>
                  <h3>{area}</h3>
                  <p>{areaCounts[idx]} propriétés</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className={styles.ctaSection}>
        <div className="container text-center">
          <div className="section-tag" style={{ background: 'rgba(244,180,0,0.15)', color: 'var(--premium-gold)' }}>Contactez-nous</div>
          <h2>Vous recherchez un bien immobilier au Gabon ?</h2>
          <p>Notre équipe d'experts est à votre disposition pour concrétiser votre projet immobilier.</p>
          <div className={styles.ctaButtons}>
            <a href="tel:+24177353433" className="btn btn-gold">Appeler maintenant</a>
            <a href="https://wa.me/24177353433" className="btn btn-primary">WhatsApp</a>
            <Link href="/contact" className="btn btn-secondary" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.5)' }}>Planifier une visite</Link>
          </div>
        </div>
      </section>
    </>
  );
}
