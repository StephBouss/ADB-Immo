import Link from 'next/link';
import { ShieldCheck, Search, FileText, TrendingUp, Phone, MessageCircle, Star } from 'lucide-react';
import PropertyCard from '@/components/PropertyCard';
import styles from './buy.module.css';

export const metadata = {
  title: "Acheter un bien | ADB Immo",
  description: "Trouvez le bien idéal à acheter à Libreville avec ADB Immo. Villas, appartements, terrains et immeubles de prestige au Gabon.",
};

const forSale = [
  {
    id: 1,
    title: "Villa Moderne avec Piscine",
    price: "150 000 000 FCFA",
    location: "Sablière, Libreville",
    beds: 5,
    baths: 4,
    surface: 350,
    image: "/images/villa-piscine-1.jpg.png",
    exclusive: true,
  },
  {
    id: 2,
    title: "Appartement de Luxe Vue Mer",
    price: "85 000 000 FCFA",
    location: "Batterie IV, Libreville",
    beds: 3,
    baths: 2,
    surface: 180,
    image: "/images/appartement-luxe-1.jpg.png",
    exclusive: false,
  },
  {
    id: 3,
    title: "Résidence Contemporaine",
    price: "220 000 000 FCFA",
    location: "Akanda, Libreville",
    beds: 3,
    baths: 2,
    surface: 420,
    image: "/images/residence-contemporaine-1.jpg.png",
    exclusive: true,
  },
  {
    id: 4,
    title: "Appartement Centre-Ville",
    price: "45 000 000 FCFA",
    location: "Centre-Ville, Libreville",
    beds: 2,
    baths: 1,
    surface: 90,
    image: "/images/appartement-luxe-3.jpg.png",
    exclusive: false,
  },
  {
    id: 5,
    title: "Villa Familiale",
    price: "110 000 000 FCFA",
    location: "Angondjé, Libreville",
    beds: 4,
    baths: 3,
    surface: 280,
    image: "/images/villa-piscine-2.jpg.png",
    exclusive: false,
  },
  {
    id: 6,
    title: "Terrain Constructible",
    price: "35 000 000 FCFA",
    location: "Cap Estérias, Libreville",
    beds: 0,
    baths: 0,
    surface: 1000,
    image: "/images/terrain-constructible-1.jpg.png",
    exclusive: false,
  },
  {
    id: 7,
    title: "Immeuble R+2 en Construction",
    price: "180 000 000 FCFA",
    location: "Angondjé, Libreville",
    beds: 0,
    baths: 0,
    surface: 800,
    image: "/images/immeuble-chantier-1.jpg.jpg",
    exclusive: true,
  },
];

const avantages = [
  {
    icon: <ShieldCheck size={24} />,
    title: "Sécurisation juridique",
    desc: "Nous vérifions systématiquement les titres fonciers, les servitudes et la conformité administrative de chaque bien avant toute transaction.",
  },
  {
    icon: <Search size={24} />,
    title: "Recherche sur mesure",
    desc: "Notre réseau et notre connaissance du marché gabonais nous permettent de trouver des biens correspondant précisément à vos critères, y compris hors marché.",
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Négociation experte",
    desc: "Nos agents négocient en votre nom pour obtenir le meilleur prix et les meilleures conditions, en s'appuyant sur une connaissance fine des valeurs du marché.",
  },
  {
    icon: <FileText size={24} />,
    title: "Accompagnement notarial",
    desc: "Nous coordonnons toutes les étapes administratives et notariales jusqu'au transfert définitif du titre de propriété à votre nom.",
  },
];

const zones = [
  { name: "Sablière", count: "18 biens à vendre", img: "/images/villa-piscine-1.jpg.png" },
  { name: "Akanda", count: "12 biens à vendre", img: "/images/residence-contemporaine-1.jpg.png" },
  { name: "Batterie IV", count: "15 biens à vendre", img: "/images/appartement-luxe-1.jpg.png" },
  { name: "Charbonnages", count: "9 biens à vendre", img: "/images/appartement-luxe-3.jpg.png" },
  { name: "Angondjé", count: "11 biens à vendre", img: "/images/immeuble-chantier-1.jpg.jpg" },
  { name: "Cap Estérias", count: "7 biens à vendre", img: "/images/terrain-constructible-1.jpg.png" },
];

export default function BuyPage() {
  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>Achat Immobilier — Gabon</span>
          <h1 className={styles.heroTitle}>Investissez dans votre avenir à Libreville</h1>
          <p className={styles.heroSubtitle}>
            Villas, appartements, terrains et immeubles — ADB Immo vous accompagne dans chaque étape de votre projet d'acquisition immobilière au Gabon.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/properties" className="btn btn-gold">Voir tous les biens</Link>
            <a href="https://wa.me/24177353433" className="btn btn-secondary" style={{ color: 'white', borderColor: 'white' }}>
              <MessageCircle size={18} style={{ marginRight: '8px' }} /> Nous contacter
            </a>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className={styles.statsBand}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <strong>150+</strong>
              <span>Biens vendus</span>
            </div>
            <div className={styles.statItem}>
              <strong>6</strong>
              <span>Quartiers couverts</span>
            </div>
            <div className={styles.statItem}>
              <strong>10 ans</strong>
              <span>D'expertise locale</span>
            </div>
            <div className={styles.statItem}>
              <strong>100%</strong>
              <span>Titres vérifiés</span>
            </div>
          </div>
        </div>
      </section>

      {/* Properties grid */}
      <section className={styles.propertiesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="section-title">Biens disponibles à l'achat</h2>
            <p className="section-subtitle">
              Une sélection rigoureuse de propriétés à vendre dans les quartiers les plus prisés de Libreville.
            </p>
          </div>
          <div className={styles.grid}>
            {forSale.map((p) => (
              <PropertyCard key={p.id} {...p} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/properties" className="btn btn-primary">
              Voir tous les biens disponibles
            </Link>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className={styles.avantagesSection}>
        <div className="container">
          <div className={styles.avantagesGrid}>
            <div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Pourquoi acheter avec ADB Immo ?</h2>
              <p style={{ color: '#666', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '40px', textAlign: 'justify' }}>
                Acquérir un bien immobilier au Gabon est une décision majeure. Notre équipe vous guide à chaque étape pour sécuriser votre investissement et concrétiser votre projet dans les meilleures conditions.
              </p>
              <div className={styles.avantagesList}>
                {avantages.map((av, i) => (
                  <div key={i} className={styles.avantageItem}>
                    <div className={styles.avantageIcon}>{av.icon}</div>
                    <div>
                      <h4>{av.title}</h4>
                      <p>{av.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="/images/appartement-luxe-2.jpg.png" alt="Acheter avec ADB Immo" className={styles.avantagesImg} />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.processSection}>
        <div className="container">
          <h2 className="section-title text-center">Comment se déroule un achat ?</h2>
          <p className="section-subtitle text-center">Quatre étapes claires pour concrétiser votre acquisition en toute sérénité.</p>
          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNum}>1</div>
              <h4>Définissez votre projet</h4>
              <p>Budget, type de bien, quartier, usage — partagez vos critères avec notre conseiller dédié pour cibler les meilleures opportunités.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>2</div>
              <h4>Visites et sélection</h4>
              <p>Nous organisons des visites privées et exclusives selon vos disponibilités, avec une analyse comparative des biens visités.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>3</div>
              <h4>Offre et négociation</h4>
              <p>Notre équipe négocie en votre nom pour obtenir le meilleur prix et rédige la promesse de vente dans les règles de l'art.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>4</div>
              <h4>Signature et remise des clés</h4>
              <p>Acte authentique chez le notaire, transfert du titre foncier — vous devenez officiellement propriétaire.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Zones */}
      <section className={styles.zonesSection}>
        <div className="container">
          <h2 className="section-title text-center">Où acheter à Libreville ?</h2>
          <p className="section-subtitle text-center">Explorez nos biens disponibles dans les quartiers les plus recherchés de la capitale.</p>
          <div className={styles.zonesGrid}>
            {zones.map((zone, i) => (
              <Link href={`/properties?location=${encodeURIComponent(zone.name)}`} key={i} className={styles.zoneCard}>
                <img src={zone.img} alt={zone.name} />
                <div className={styles.zoneOverlay}></div>
                <div className={styles.zoneInfo}>
                  <h3>{zone.name}</h3>
                  <span>{zone.count}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section style={{ padding: '80px 0', background: 'var(--off-white)' }}>
        <div className="container text-center">
          <div style={{ maxWidth: '750px', margin: '0 auto', background: 'white', borderRadius: '20px', padding: '50px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <div style={{ color: 'var(--premium-gold)', marginBottom: '20px', display: 'flex', justifyContent: 'center', gap: '5px' }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#555', lineHeight: '1.8', marginBottom: '25px' }}>
              "Grâce à ADB Immo, nous avons trouvé notre villa à la Sablière en moins de trois semaines. Le titre foncier a été vérifié, la négociation menée avec brio et la remise des clés s'est faite sans le moindre accroc. Une confiance totale."
            </p>
            <p style={{ fontWeight: '600', color: 'var(--royal-blue)' }}>M. & Mme A. N.</p>
            <p style={{ fontSize: '0.9rem', color: '#888' }}>Acquéreurs — Sablière</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaOverlay}></div>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Prêt à devenir propriétaire au Gabon ?</h2>
            <p>Nos conseillers sont disponibles 6j/7 pour vous accompagner dans votre projet d'achat immobilier à Libreville.</p>
            <div className={styles.ctaButtons}>
              <a href="tel:+24177353433" className="btn btn-gold">
                <Phone size={18} style={{ marginRight: '8px' }} /> +(241) 77 353 433
              </a>
              <a href="https://wa.me/24177353433" className="btn btn-secondary" style={{ color: 'white', borderColor: 'white' }}>
                <MessageCircle size={18} style={{ marginRight: '8px' }} /> WhatsApp
              </a>
              <Link href="/contact" className="btn btn-primary" style={{ background: 'white', color: 'var(--royal-blue)' }}>
                Planifier une visite
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
