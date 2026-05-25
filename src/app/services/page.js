import Link from 'next/link';
import { Key, TrendingUp, DoorOpen, Shield, Search, LineChart, ArrowRight } from 'lucide-react';
import styles from './services.module.css';

export const metadata = {
  title: "Nos Services | ADB Immo",
  description: "De la recherche de votre résidence idéale à la gestion complète de vos investissements, découvrez l'expertise ADB Immo au Gabon.",
};

export default function ServicesPage() {
  const services = [
    {
      id: "achat",
      title: "L'Acquisition d'Exception",
      icon: <Key size={28} />,
      text: "Accédez à un portefeuille exclusif de villas, appartements et terrains à Libreville. Nous dénichons pour vous des biens rares qui répondent à vos critères d'exigence les plus stricts.",
      avantages: ["Accès off-market", "Négociation stratégique", "Accompagnement juridique"],
      diff: "Chasseurs immobiliers dédiés pour les requêtes ultra-spécifiques.",
      cta: "Découvrir nos biens à la vente",
      link: "/properties?status=buy",
      dark: false
    },
    {
      id: "vente",
      title: "Vente Stratégique & Discrète",
      icon: <TrendingUp size={28} />,
      text: "Valorisez votre patrimoine avec une commercialisation premium. De l'estimation précise à la signature notariale, nous assurons une vente fluide, rapide et au meilleur prix.",
      avantages: ["Shooting photo pro", "Diffusion ciblée", "Qualification stricte"],
      diff: "Plan marketing digital sur-mesure pour chaque propriété.",
      cta: "Faire estimer mon bien",
      link: "/contact",
      dark: false
    },
    {
      id: "location",
      title: "La Location de Prestige",
      icon: <DoorOpen size={28} />,
      text: "Trouvez la résidence qui correspond à votre style de vie. Nous vous accompagnons dans la recherche et la location de biens haut de gamme, sécurisés et idéalement situés.",
      avantages: ["Visites privées", "Dossier facilité", "État des lieux rigoureux"],
      diff: "Un catalogue répondant aux standards internationaux.",
      cta: "Explorer les locations",
      link: "/properties?status=rent",
      dark: true
    },
    {
      id: "gestion",
      title: "Gestion Patrimoniale Sereine",
      icon: <Shield size={28} />,
      text: "Libérez-vous des contraintes administratives et techniques. Notre service de gestion locative sécurise vos revenus et veille à la pérennité de votre investissement.",
      avantages: ["Sélection des locataires", "Perception des loyers", "Gestion des travaux"],
      diff: "Reporting financier mensuel détaillé et transparent.",
      cta: "Déléguer ma gestion",
      link: "/contact",
      dark: false
    },
    {
      id: "expertise",
      title: "Évaluation & Expertise",
      icon: <Search size={28} />,
      text: "Obtenez une valeur vénale précise et objective de vos actifs. Nos experts analysent le marché local avec une rigueur absolue pour vous fournir des rapports d'expertise fiables.",
      avantages: ["Connaissance pointue", "Méthodes internationales", "Veille marché"],
      diff: "Rapports reconnus par les institutions financières locales.",
      cta: "Demander une expertise",
      link: "/contact",
      dark: true
    },
    {
      id: "conseil",
      title: "Stratégie & Investissement",
      icon: <LineChart size={28} />,
      text: "Bâtissez un patrimoine rentable. Nous conseillons les investisseurs privés et institutionnels dans l'identification des meilleures opportunités immobilières au Gabon.",
      avantages: ["Étude de rentabilité", "Analyse fiscale", "Montage financier"],
      diff: "Accès en avant-première aux programmes neufs.",
      cta: "Parler à un conseiller",
      link: "/contact",
      dark: false
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>Nos Expertises</span>
          <h1 className={styles.heroTitle}>L’Art de Valoriser Votre Patrimoine Immobilier</h1>
          <div className={styles.heroGoldLine}><span className={styles.heroGoldDot}></span></div>
          <p className={styles.heroText}>De la recherche de votre résidence idéale à la gestion complète de vos investissements, ADB Immo déploie une gamme de services sur-mesure pour concrétiser vos ambitions immobilières au Gabon.</p>
          <Link href="/contact" className="btn btn-gold">Confiez-nous votre projet</Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className="container">
          <div className={styles.introContent}>
            <h2 className={styles.introTitle}>Une approche globale, un service exclusif.</h2>
            <p className={styles.introText}>L'immobilier n'est pas qu'une transaction, c'est un projet de vie. Nous avons structuré nos pôles d'expertise pour vous offrir un accompagnement complet, transparent et rigoureux à chaque étape de votre parcours.</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container">
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={`${styles.serviceCard} ${service.dark ? styles.serviceCardDark : (index % 2 !== 0 ? styles.serviceCardAlt : '')}`}>
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceText}>{service.text}</p>
              
              <ul className={styles.serviceList}>
                {service.avantages.map((av, i) => (
                  <li key={i}>{av}</li>
                ))}
              </ul>
              
              <div className={styles.diff}>
                <strong>Notre différence :</strong> {service.diff}
              </div>
              
              <Link href={service.link} className={service.dark ? "btn btn-gold" : "btn btn-primary"} style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                {service.cta} <ArrowRight size={18} style={{marginLeft: '8px'}} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us Section */}
      <section className={styles.whyUs}>
        <div className="container">
          <div className={styles.whyGrid}>
            <div>
              <h2 className={styles.whyTitle}>L'Exigence pour Standard.</h2>
              <div className={styles.whyPoints}>
                <div className={styles.whyPoint}>
                  <h4>Discrétion absolue</h4>
                  <p>La confidentialité de vos transactions et de votre identité est notre priorité numéro un.</p>
                </div>
                <div className={styles.whyPoint}>
                  <h4>Excellence opérationnelle</h4>
                  <p>Un suivi rigoureux, documenté et proactif à chaque étape de votre projet.</p>
                </div>
                <div className={styles.whyPoint}>
                  <h4>Réseau exclusif</h4>
                  <p>Une mise en relation directe avec les meilleurs acteurs et investisseurs locaux.</p>
                </div>
                <div className={styles.whyPoint}>
                  <h4>Éthique stricte</h4>
                  <p>Une transparence totale sur les prix, les conditions et les honoraires.</p>
                </div>
              </div>
            </div>
            <div style={{height: '100%'}}>
              <img src="/images/hero.png" alt="Excellence ADB Immo" className={styles.whyImg} />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className="container">
          <h2 className="section-title text-center">Un Processus Fluide, Étape par Étape</h2>
          <p className="section-subtitle text-center">Notre méthode pour garantir votre succès.</p>
          
          <div className={styles.timeline}>
            <div className={styles.timelineStep}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Consultation Initiale</h3>
              <p className={styles.stepText}>Découverte approfondie de vos besoins, de vos critères d'exigence et de votre budget lors d'un entretien confidentiel.</p>
            </div>
            <div className={styles.timelineStep}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Stratégie Sur-Mesure</h3>
              <p className={styles.stepText}>Élaboration d'un plan d'action personnalisé, recherche ciblée off-market ou stratégie de commercialisation premium.</p>
            </div>
            <div className={styles.timelineStep}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Action & Visites</h3>
              <p className={styles.stepText}>Organisation de visites privées, filtrage rigoureux des candidats et négociation stratégique de vos intérêts.</p>
            </div>
            <div className={styles.timelineStep}>
              <div className={styles.stepNumber}>4</div>
              <h3 className={styles.stepTitle}>Finalisation Sécurisée</h3>
              <p className={styles.stepText}>Accompagnement administratif, juridique et notarial jusqu'à la signature finale et la remise des clés.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <h3>100+</h3>
              <p>Biens Premium Gérés</p>
            </div>
            <div className={styles.statItem}>
              <h3>98%</h3>
              <p>Clients Satisfaits</p>
            </div>
            <div className={styles.statItem}>
              <h3>15+</h3>
              <p>Années d'Expertise Cumulée</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaBox}>
            <h2 className="section-title">Prêt à concrétiser votre projet immobilier ?</h2>
            <p className="section-subtitle" style={{marginBottom: '40px'}}>Nos conseillers sont à votre disposition pour une consultation confidentielle.</p>
            <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
              <Link href="/contact" className="btn btn-gold">Contactez ADB Immo</Link>
              <a href="tel:+24177353433" className="btn btn-primary" style={{background: 'transparent', color: 'var(--royal-blue)', border: '1px solid var(--royal-blue)'}}>
                +241 77 353 433
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
