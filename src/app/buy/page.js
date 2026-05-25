import Link from 'next/link';

export default function GenericPage() {
  return (
    <div style={{ paddingTop: '150px', paddingBottom: '100px', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <h1 className="section-title">En construction</h1>
      <p className="section-subtitle">Cette page est actuellement en cours de développement.</p>
      <Link href="/" className="btn btn-primary mt-2">Retour à l'accueil</Link>
    </div>
  );
}
