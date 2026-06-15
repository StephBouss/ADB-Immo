import Link from 'next/link';
import { Bed, Bath, Square, MapPin } from 'lucide-react';
import styles from './PropertyCard.module.css';

export default function PropertyCard({ id, image, title, price, location, beds, baths, surface, exclusive }) {
  return (
    <Link href={`/property/${id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
        {exclusive && <span className={styles.exclusiveBadge}>Exclusivité</span>}
        <div className={styles.priceOverlay}>{price}</div>
      </div>
      <div className={styles.content}>
        <div className={styles.location}><MapPin size={14} /> {location}</div>
        <h3 className={styles.title}>{title}</h3>
        
        <div className={styles.features}>
          {beds > 0 && <div className={styles.feature}><Bed size={16} /> {beds} Ch</div>}
          {baths > 0 && <div className={styles.feature}><Bath size={16} /> {baths} Sdb</div>}
          <div className={styles.feature}><Square size={16} /> {surface} m²</div>
        </div>
      </div>
    </Link>
  );
}
