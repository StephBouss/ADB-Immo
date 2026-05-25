"use client";

import { useState } from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import styles from './property.module.css';

export default function ContactCard({ propertyTitle, propertyId }) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  const handleEmail = () => {
    const subject = encodeURIComponent(
      `Intérêt pour "${propertyTitle}" — Réf: ${propertyId}`
    );
    const body = encodeURIComponent(
      `Bonjour,\n\nJe suis intéressé(e) par la propriété "${propertyTitle}" (Réf : ${propertyId}).\n\nMes coordonnées :\n- Nom : ${name || 'Non renseigné'}\n- Contact : ${contact || 'Non renseigné'}\n\nMerci de me recontacter dans les plus brefs délais.\n\nCordialement,\n${name}`
    );
    window.location.href = `mailto:adbimmo01@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className={`glass ${styles.contactCard}`}>
      <h3>Intéressé par ce bien ?</h3>
      <p>Contactez directement notre agence ou envoyez-nous un message.</p>

      {/* Numéros de téléphone */}
      <ul className={styles.phoneList}>
        <li>
          <a href="tel:+24177353433" className={styles.phoneItem}>
            <Phone size={18} color="var(--royal-blue)" />
            +(241) 77 353 433
          </a>
        </li>
        <li>
          <a href="tel:+24166257839" className={styles.phoneItem}>
            <Phone size={18} color="var(--royal-blue)" />
            +(241) 66 257 839
          </a>
        </li>
      </ul>

      <a
        href="https://wa.me/24177353433"
        className="btn btn-gold"
        style={{ width: '100%', marginBottom: '20px' }}
      >
        <MessageCircle size={18} style={{ marginRight: '8px' }} />
        Contacter sur WhatsApp
      </a>

      <hr className={styles.divider} />

      {/* Formulaire email */}
      <p style={{ marginBottom: '15px' }}>
        Ou envoyez-nous un email en renseignant vos coordonnées :
      </p>

      <div className={styles.formGroup}>
        <label>Votre nom</label>
        <input
          type="text"
          placeholder="Ex : Jean Dupont"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <label>Votre email</label>
        <input
          type="email"
          placeholder="Ex : votre@email.com"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </div>

      <button
        className="btn btn-primary"
        style={{ width: '100%' }}
        onClick={handleEmail}
      >
        <Mail size={18} style={{ marginRight: '8px' }} />
        Envoyer un email
      </button>
    </div>
  );
}
