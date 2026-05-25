"use client";

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';
import styles from './FloatingSearchBar.module.css';

function SearchBarContent({ theme }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [activeTab, setActiveTab] = useState(searchParams?.get('status') || 'buy');
  const [type, setType] = useState(searchParams?.get('type') || 'Tous');
  const [location, setLocation] = useState(searchParams?.get('location') || 'Toutes zones');
  const [budget, setBudget] = useState(searchParams?.get('budget') || 'Peu importe');

  const handleSearch = () => {
    const params = new URLSearchParams();
    params.set('status', activeTab);
    params.set('type', type);
    params.set('location', location);
    params.set('budget', budget);
    
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <div className={`glass ${styles.searchContainer} ${theme === 'dark' ? styles.darkTheme : ''}`}>
      <div className={styles.tabs}>
        <button 
          className={`${styles.tab} ${activeTab === 'buy' ? styles.active : ''}`}
          onClick={() => setActiveTab('buy')}
        >
          Acheter
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'rent' ? styles.active : ''}`}
          onClick={() => setActiveTab('rent')}
        >
          Louer
        </button>
      </div>
      
      <div className={styles.searchForm}>
        <div className={styles.inputGroup}>
          <label>Type de bien</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="Tous">Tous</option>
            <option value="Villa">Villa</option>
            <option value="Appartement">Appartement</option>
            <option value="Terrain">Terrain</option>
          </select>
        </div>
        
        <div className={styles.divider}></div>
        
        <div className={styles.inputGroup}>
          <label>Localisation</label>
          <select value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="Toutes zones">Libreville (Toutes zones)</option>
            <option value="Akanda">Akanda</option>
            <option value="Sablière">Sablière</option>
            <option value="Batterie IV">Batterie IV</option>
            <option value="Angondjé">Angondjé</option>
            <option value="Centre-Ville">Centre-Ville</option>
            <option value="Cap Estérias">Cap Estérias</option>
          </select>
        </div>
        
        <div className={styles.divider}></div>
        
        <div className={styles.inputGroup}>
          <label>Budget Max (FCFA)</label>
          <select value={budget} onChange={(e) => setBudget(e.target.value)}>
            <option value="Peu importe">Peu importe</option>
            <option value="50000000">50 Millions</option>
            <option value="100000000">100 Millions</option>
            <option value="150000000">150 Millions</option>
            <option value="250000000">250 Millions</option>
            <option value="500000000">500+ Millions</option>
          </select>
        </div>
        
        <button className={`btn btn-gold ${styles.searchBtn}`} onClick={handleSearch}>
          <Search size={20} style={{ marginRight: '8px' }} /> Rechercher
        </button>
      </div>
    </div>
  );
}

export default function FloatingSearchBar({ theme = 'light' }) {
  return (
    <Suspense fallback={<div className={`glass ${styles.searchContainer}`} style={{height: '100px'}}></div>}>
      <SearchBarContent theme={theme} />
    </Suspense>
  );
}
