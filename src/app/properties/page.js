import PropertyCard from '@/components/PropertyCard';
import FloatingSearchBar from '@/components/FloatingSearchBar';
import styles from './properties.module.css';

export const metadata = {
  title: "Biens Immobiliers | ADB Immo",
  description: "Découvrez notre catalogue complet de biens immobiliers au Gabon.",
};

const allProperties = [
  {
    id: 1,
    title: "Villa Moderne avec Piscine",
    price: "150 000 000",
    location: "Sablière",
    beds: 5,
    baths: 4,
    surface: 350,
    image: "/images/villa1.png",
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
  },
  {
    id: 4,
    title: "Appartement Centre-Ville",
    price: "45 000 000",
    location: "Centre-Ville",
    beds: 2,
    baths: 1,
    surface: 90,
    image: "/images/apartment1.png",
    exclusive: false
  },
  {
    id: 5,
    title: "Villa Familiale",
    price: "110 000 000",
    location: "Angondjé",
    beds: 4,
    baths: 3,
    surface: 280,
    image: "/images/villa1.png",
    exclusive: false
  },
  {
    id: 6,
    title: "Terrain Constructible",
    price: "35 000 000",
    location: "Cap Estérias",
    beds: 0,
    baths: 0,
    surface: 1000,
    image: "/images/hero.png",
    exclusive: false
  }
];

export default async function PropertiesPage(props) {
  const searchParams = await props.searchParams;
  const typeParam = searchParams?.type || 'Tous';
  const locationParam = searchParams?.location || 'Toutes zones';
  const budgetParam = searchParams?.budget || 'Peu importe';

  let filteredProperties = allProperties;

  if (typeParam !== 'Tous') {
    filteredProperties = filteredProperties.filter(p => {
      if (typeParam === 'Terrain') return p.title.toLowerCase().includes('terrain');
      if (typeParam === 'Villa') return p.title.toLowerCase().includes('villa') || p.title.toLowerCase().includes('résidence');
      if (typeParam === 'Appartement') return p.title.toLowerCase().includes('appartement');
      return true;
    });
  }

  if (locationParam !== 'Toutes zones') {
    filteredProperties = filteredProperties.filter(p => p.location.includes(locationParam));
  }

  if (budgetParam !== 'Peu importe') {
    const maxBudget = parseInt(budgetParam, 10);
    filteredProperties = filteredProperties.filter(p => {
      const propPrice = parseInt(p.price.replace(/\s/g, ''), 10);
      return propPrice <= maxBudget;
    });
  }

  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Biens Immobiliers</h1>
          <p className={styles.heroSubtitle}>Trouvez le bien qui vous correspond parmi notre sélection.</p>
        </div>
      </section>

      <div style={{ paddingBottom: '60px', minHeight: '60vh', marginTop: '60px' }}>
        <div className="container">
          <div style={{ marginBottom: '60px' }}>
          <FloatingSearchBar theme="dark" />
        </div>
        
        {filteredProperties.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            {filteredProperties.map(prop => (
              <PropertyCard key={prop.id} {...prop} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 0', background: 'var(--off-white)', borderRadius: '16px' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--royal-blue)', marginBottom: '15px' }}>Aucun bien ne correspond à vos critères</h3>
            <p style={{ color: '#666', fontSize: '1.1rem' }}>Essayez de modifier vos filtres pour trouver plus de résultats.</p>
          </div>
        )}
      </div>
      </div>
    </main>
  );
}
