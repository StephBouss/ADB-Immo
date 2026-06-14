import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Bed, Bath, Square, MapPin, Check, ArrowLeft, Car } from 'lucide-react';
import styles from './property.module.css';
import ContactCard from './ContactCard';
import { propertiesData } from './propertiesData';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const property = propertiesData[id];
  return {
    title: property ? `${property.title} | ADB Immo` : 'Bien introuvable | ADB Immo',
  };
}

export default async function PropertyDetailsPage({ params }) {
  const { id } = await params;
  const property = propertiesData[id];

  if (!property) notFound();

  const showBedBath = property.beds > 0 || property.baths > 0;

  return (
    <div className={styles.pageContainer}>
      {/* Hero */}
      <div className={styles.heroImageContainer}>
        <img src={property.image} alt={property.title} className={styles.heroImage} />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>{property.title}</h1>
        </div>
      </div>

      {/* Info bar between hero and content */}
      <div className={styles.infoBar}>
        <div className="container">
          <div className={styles.infoBarInner}>
            <Link href="/properties" className={styles.backBtn}>
              <ArrowLeft size={18} /> Retour aux biens
            </Link>
            <div className={styles.infoBarRight}>
              <span className={styles.badge}>{property.status}</span>
              <div className={styles.locationLine}>
                <MapPin size={16} /> {property.location}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className={styles.mainGrid}>
          <div className={styles.detailsCol}>
            <div className={styles.priceSection}>
              <div className={styles.priceLabel}>
                {property.status === 'À Louer' ? 'Loyer mensuel' : 'Prix demandé'}
              </div>
              <div className={styles.priceValue}>
                {property.price} {property.priceUnit}
              </div>
            </div>

            <div className={styles.quickFeatures}>
              {showBedBath && (
                <>
                  <div className={styles.qFeature}>
                    <Bed size={24} color="var(--royal-blue)" />
                    <span>{property.beds} Chambre{property.beds > 1 ? 's' : ''}</span>
                  </div>
                  <div className={styles.qFeature}>
                    <Bath size={24} color="var(--royal-blue)" />
                    <span>{property.baths} Salle{property.baths > 1 ? 's' : ''} de bain</span>
                  </div>
                </>
              )}
              <div className={styles.qFeature}>
                <Square size={24} color="var(--royal-blue)" />
                <span>{property.surface} m²</span>
              </div>
              {property.parking && property.parking !== '—' && (
                <div className={styles.qFeature}>
                  <Car size={24} color="var(--royal-blue)" />
                  <span>{property.parking}</span>
                </div>
              )}
            </div>

            {(property.image2 || property.image3) && (
              <div className={`${styles.gallery} ${property.image3 ? styles.gallery3 : ''}`}>
                <img src={property.image} alt={`${property.title} — vue 1`} className={styles.galleryImg} />
                {property.image2 && <img src={property.image2} alt={`${property.title} — vue 2`} className={styles.galleryImg} />}
                {property.image3 && <img src={property.image3} alt={`${property.title} — vue 3`} className={styles.galleryImg} />}
              </div>
            )}

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Description</h3>
              <p className={styles.description}>{property.description}</p>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Caractéristiques</h3>
              <div className={styles.featuresGrid}>
                <div className={styles.featureItem}><strong>Type :</strong> {property.type}</div>
                <div className={styles.featureItem}><strong>Surface :</strong> {property.surface} m²</div>
                {showBedBath && (
                  <>
                    <div className={styles.featureItem}><strong>Chambres :</strong> {property.beds}</div>
                    <div className={styles.featureItem}><strong>Salles de bain :</strong> {property.baths}</div>
                  </>
                )}
                <div className={styles.featureItem}><strong>Parking :</strong> {property.parking}</div>
                <div className={styles.featureItem}><strong>Statut :</strong> {property.status}</div>
              </div>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Équipements</h3>
              <ul className={styles.amenitiesList}>
                {property.amenities.map((item, idx) => (
                  <li key={idx}><Check size={18} color="var(--premium-gold)" /> {item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Localisation</h3>
              <div className={styles.mapContainer}>
                <div className={styles.dummyMap}>Carte — {property.location}</div>
              </div>
            </div>
          </div>

          <div className={styles.contactCol}>
            <ContactCard propertyTitle={property.title} propertyId={property.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
