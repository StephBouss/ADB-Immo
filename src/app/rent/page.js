import Link from 'next/link';
import { ShieldCheck, Key, Clock, Star, FileText, HeartHandshake, Phone, MessageCircle } from 'lucide-react';
import PropertyCard from '@/components/PropertyCard';
import styles from './rent.module.css';

export const metadata = {
  title: "Louer un bien | ADB Immo",
  description: "Trouvez votre location idéale à Libreville avec ADB Immo. Appartements, villas et résidences de prestige à louer au Gabon.",
};

const rentals = [
  {
    id: 10,
    title: "Appartement Meublé Haut Standing",
    price: "350 000 / mois",
    location: "Batterie IV",
    beds: 3,
    baths: 2,
    surface: 160,
    image: "/images/appartement-luxe-1.jpg.png",
    exclusive: true,
  },
  {
    id: 11,
    title: "Villa avec Jardin Privatif",
    price: "800 000 / mois",
    location: "Sablière",
    beds: 5,
    baths: 4,
    surface: 320,
    image: "/images/villa-piscine-1.jpg.png",
    exclusive: false,
  },
  {
    id: 12,
    title: "Résidence Sécurisée Vue Mer",
    price: "550 000 / mois",
    location: "Akanda",
    beds: 4,
    baths: 3,
    surface: 220,
    image: "/images/residence-contemporaine-1.jpg.png",
    exclusive: true,
  },
  {
    id: 13,
    title: "Studio Moderne Centre-Ville",
    price: "180 000 / mois",
    location: "Centre-Ville",
    beds: 1,
    baths: 1,
    surface: 55,
    image: "/images/appartement-luxe-3.jpg.png",
    exclusive: false,
  },
  {
    id: 14,
    title: "Appartement Familial Spacieux",
    price: "420 000 / mois",
    location: "Angondjé",
    beds: 4,
    baths: 2,
    surface: 190,
    image: "/images/appartement-luxe-2.jpg.png",
    exclusive: false,
  },
  {
    id: 15,
    title: "Villa Contemporaine Climatisée",
    price: "1 200 000 / mois",
    location: "Cap Estérias",
    beds: 6,
    baths: 5,
    surface: 450,
    image: "/images/villa-piscine-2.jpg.png",
    exclusive: true,
  },
];

const avantages = [
  {
    icon: <ShieldCheck size={24} />,
    title: "Biens vérifiés et sécurisés",
    desc: "Chaque bien est inspecté et validé par nos équipes avant d'être proposé à la location. Zéro mauvaise surprise.",
  },
  {
    icon: <Key size={24} />,
    title: "Remise des clés accompagnée",
    desc: "Un agent ADB Immo vous accompagne lors de l'état des lieux d'entrée et reste disponible tout au long du bail.",
  },
  {
    icon: <FileText size={24} />,
    title: "Dossier simplifié",
    desc: "Notre processus de candidature est rapide et sans tracas. Nous facilitons chaque étape administrative.",
  },
  {
    icon: <HeartHandshake size={24} />,
    title: "Relation locataire privilégiée",
    desc: "Un interlocuteur unique dédié pour toute la durée de votre location, joignable rapidement en cas de besoin.",
  },
];

const zones = [
  { name: "Sablière", count: "12 locations", img: "/images/villa-piscine-1.jpg.png" },
  { name: "Akanda", count: "8 locations", img: "/images/residence-contemporaine-1.jpg.png" },
  { name: "Batterie IV", count: "10 locations", img: "/images/appartement-luxe-1.jpg.png" },
  { name: "Angondjé", count: "6 locations", img: "/images/immeuble-chantier-1.jpg.jpg" },
  { name: "Centre-Ville", count: "9 locations", img: "/images/appartement-luxe-3.jpg.png" },
  { name: "Cap Estérias", count: "4 locations", img: "/images/villa-piscine-2.jpg.png" },
];

export default function RentPage() {
  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>Locations au Gabon</span>
          <h1 className={styles.heroTitle}>Trouvez votre résidence idéale à Libreville</h1>
          <p className={styles.heroSubtitle}>
            Appartements, villas et résidences de prestige — ADB Immo vous propose un catalogue sélectionné de biens à louer dans les meilleurs quartiers de Libreville.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/properties?status=rent" className="btn btn-gold">Voir toutes les locations</Link>
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
              <strong>85+</strong>
              <span>Biens disponibles</span>
            </div>
            <div className={styles.statItem}>
              <strong>6</strong>
              <span>Quartiers couverts</span>
            </div>
            <div className={styles.statItem}>
              <strong>48h</strong>
              <span>Délai moyen de réponse</span>
            </div>
            <div className={styles.statItem}>
              <strong>98%</strong>
              <span>Clients satisfaits</span>
            </div>
          </div>
        </div>
      </section>

      {/* Properties grid */}
      <section className={styles.propertiesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="section-title">Nos locations disponibles</h2>
            <p className="section-subtitle">
              Une sélection rigoureuse d'appartements et de villas à louer, pour tous les budgets et tous les styles de vie.
            </p>
          </div>
          <div className={styles.grid}>
            {rentals.map((p) => (
              <PropertyCard key={p.id} {...p} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/properties?status=rent" className="btn btn-primary">
              Voir toutes les locations disponibles
            </Link>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className={styles.avantagesSection}>
        <div className="container">
          <div className={styles.avantagesGrid}>
            <div>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Pourquoi louer avec ADB Immo ?</h2>
              <p style={{ color: '#666', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '40px' }}>
                Louer un bien ne devrait pas être une source de stress. Notre équipe prend en charge chaque détail pour que vous puissiez vous concentrer sur l'essentiel : votre nouveau chez-vous.
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
              <img src="/images/residence-contemporaine-1.jpg.png" alt="Louer avec ADB Immo" className={styles.avantagesImg} />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className={styles.processSection}>
        <div className="container">
          <h2 className="section-title text-center">Comment ça fonctionne ?</h2>
          <p className="section-subtitle text-center">Quatre étapes simples pour trouver et intégrer votre nouvelle résidence.</p>
          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNum}>1</div>
              <h4>Définissez vos critères</h4>
              <p>Budget, zone géographique, nombre de pièces, standing — dites-nous ce que vous cherchez.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>2</div>
              <h4>Visites privées</h4>
              <p>Nous organisons des visites exclusives selon vos disponibilités, avec un conseiller dédié.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>3</div>
              <h4>Constitution du dossier</h4>
              <p>Nous vous guidons dans la préparation de votre dossier de location pour maximiser vos chances.</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNum}>4</div>
              <h4>Remise des clés</h4>
              <p>Signature du bail, état des lieux d'entrée accompagné — vous pouvez emménager sereinement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Zones */}
      <section className={styles.zonesSection}>
        <div className="container">
          <h2 className="section-title text-center">Zones de location</h2>
          <p className="section-subtitle text-center">Découvrez nos locations dans les quartiers les plus recherchés de Libreville.</p>
          <div className={styles.zonesGrid}>
            {zones.map((zone, i) => (
              <Link href={`/properties?status=rent&location=${encodeURIComponent(zone.name)}`} key={i} className={styles.zoneCard}>
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
              "ADB Immo a trouvé notre appartement en moins d'une semaine. Le suivi était impeccable, du premier contact jusqu'à la remise des clés. Une agence vraiment professionnelle et à l'écoute."
            </p>
            <p style={{ fontWeight: '600', color: 'var(--royal-blue)' }}>Mme F. O.</p>
            <p style={{ fontSize: '0.9rem', color: '#888' }}>Locataire — Batterie IV</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaOverlay}></div>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Prêt à trouver votre nouveau chez-vous ?</h2>
            <p>Nos conseillers sont disponibles 6j/7 pour vous accompagner dans votre recherche de location à Libreville.</p>
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
