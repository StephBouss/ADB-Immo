import Link from 'next/link';
import { Eye, Award, Users, Lightbulb, Star } from 'lucide-react';
import styles from './about.module.css';

export const metadata = {
  title: "À Propos | ADB Immo",
  description: "Découvrez l'histoire, la vision et l'équipe de ADB Immo, l'agence immobilière de référence à Libreville.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>Notre Histoire</span>
          <h1 className={styles.heroTitle}>L’Immobilier Repensé, pour Vous</h1>
          <div className={styles.heroGoldLine}><span className={styles.heroGoldDot}></span></div>
          <p className={styles.heroText}>Découvrez l’équipe et la philosophie qui se cachent derrière l’agence immobilière de référence à Libreville.</p>
        </div>
      </section>

      {/* Histoire Section */}
      <section className={styles.historySection}>
        <div className="container">
          <div className={styles.historyGrid}>
            <div>
              <h2 className="section-title">Une vision née de l'exigence.</h2>
              <p style={{fontSize: '1.1rem', color: '#555', lineHeight: '1.8', marginBottom: '20px'}}>
                Fondée avec la conviction que le marché immobilier gabonais méritait un standard de service international, ADB Immo est née d'une passion pour l'excellence.
              </p>
              <p style={{fontSize: '1.1rem', color: '#555', lineHeight: '1.8'}}>
                Nous avons repensé le métier d'agent immobilier pour le transformer en un véritable rôle de conseiller privé, où la qualité de la relation humaine prime sur la simple transaction. Chez ADB Immo, chaque projet est unique.
              </p>
            </div>
            <div className={styles.historyImgWrapper}>
              <img src="/images/residence-contemporaine-1.jpg.png" alt="Histoire ADB Immo" className={styles.historyImg} />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className={styles.visionSection}>
        <div className={styles.quoteMark}>«</div>
        <div className="container">
          <div className={styles.visionGrid}>
            <div className={styles.visionCard}>
              <h3>Notre Vision</h3>
              <p style={{fontSize: '1.1rem', color: '#555', lineHeight: '1.8'}}>
                Devenir l'acteur incontournable de l'immobilier premium en Afrique Centrale en redéfinissant les standards du luxe et du service client.
              </p>
            </div>
            <div className={styles.visionCard}>
              <h3>Notre Mission</h3>
              <p style={{fontSize: '1.1rem', color: '#555', lineHeight: '1.8'}}>
                Connecter nos clients aux espaces qui inspireront leur avenir, avec intégrité, transparence et un dévouement absolu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className={styles.valuesSection}>
        <div className="container">
          <h2 className="section-title text-center">L'ADN de notre marque</h2>
          <p className="section-subtitle text-center">Les principes qui guident chacune de nos actions.</p>
          
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}><Eye size={40} /></div>
              <h4>Transparence</h4>
              <p>Aucune zone d'ombre. Vous êtes informés à chaque étape avec clarté et honnêteté.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}><Award size={40} /></div>
              <h4>Excellence</h4>
              <p>Le souci du détail dans la sélection de nos biens et l'exécution de nos services.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}><Users size={40} /></div>
              <h4>Accompagnement</h4>
              <p>Nous sommes à vos côtés bien au-delà de la simple remise des clés.</p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}><Lightbulb size={40} /></div>
              <h4>Innovation</h4>
              <p>L'utilisation des meilleures technologies digitales pour fluidifier votre expérience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approche Section */}
      <section className={styles.approachSection}>
        <div className="container">
          <div className={styles.approachContent}>
            <h2 className={styles.approachTitle}>L'Humain au Cœur de la Pierre.</h2>
            <p className={styles.approachText}>
              Ce qui nous distingue, c'est notre capacité à écouter. Nous ne vous proposons pas un catalogue de maisons, nous vous offrons une sélection d'adresses qui correspondent à votre identité. Notre connaissance intime de Libreville (Akanda, Sablière, Batterie IV) couplée à notre rigueur internationale fait d'ADB Immo le partenaire de confiance de l'élite locale et de la diaspora.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className="container">
          <h2 className="section-title text-center">Les Architectes de vos Projets.</h2>
          <p className="section-subtitle text-center">Rencontrez les femmes et les hommes qui s'engagent au quotidien pour votre satisfaction.</p>
          
          <div className={styles.teamGrid}>
            {/* Team placeholders */}
            <div className={styles.teamMember}>
              <img src="/images/appartement-luxe-1.jpg.png" alt="Membre de l'équipe" className={styles.teamImg} />
              <div className={styles.teamOverlay}>
                <h4 className={styles.teamName}>Directeur Agence</h4>
                <p className={styles.teamRole}>Fondateur & CEO</p>
              </div>
            </div>
            <div className={styles.teamMember}>
              <img src="/images/villa-piscine-2.jpg.png" alt="Membre de l'équipe" className={styles.teamImg} />
              <div className={styles.teamOverlay}>
                <h4 className={styles.teamName}>Responsable Ventes</h4>
                <p className={styles.teamRole}>Expert Marché Local</p>
              </div>
            </div>
            <div className={styles.teamMember}>
              <img src="/images/appartement-luxe-2.jpg.png" alt="Membre de l'équipe" className={styles.teamImg} />
              <div className={styles.teamOverlay}>
                <h4 className={styles.teamName}>Consultant Luxe</h4>
                <p className={styles.teamRole}>Investissement International</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className={styles.trustSection}>
        <div className="container">
          <h2 className="section-title">Ils nous ont fait confiance.</h2>
          
          <div className={styles.testimonialSlider}>
            <div className={styles.stars}>
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
            </div>
            <p className={styles.quote}>"Le professionnalisme de l'équipe ADB Immo a été remarquable. Ils ont su trouver la villa parfaite pour ma famille à la Sablière en un temps record, avec une discrétion absolue."</p>
            <p className={styles.clientName}>M. E., Expatrié</p>
            <p className={styles.clientTitle}>Directeur Général</p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className={styles.ctaFinal}>
        <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(10,67,198,0.85)', zIndex: 1}}></div>
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <h2 className="section-title" style={{color: 'white'}}>Écrivons ensemble la suite de votre histoire.</h2>
          <p className="section-subtitle" style={{color: 'white', opacity: 0.9, marginBottom: '40px'}}>Passez nous voir à l'agence ou planifiez un appel vidéo avec l'un de nos experts.</p>
          
          <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <Link href="/contact" className="btn btn-gold">Prendre Rendez-vous</Link>
            <Link href="/contact" className="btn btn-primary" style={{background: 'transparent', border: '2px solid white'}}>
              Nous Situer (Résidence Équateur)
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
