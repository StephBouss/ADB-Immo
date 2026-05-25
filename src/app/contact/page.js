import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export const metadata = {
  title: "Contact | ADB Immo",
  description: "Contactez l'agence ADB Immo pour vos projets immobiliers au Gabon.",
};

export default function ContactPage() {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '60px' }}>
      <div className="container">
        <h1 className="section-title text-center" style={{marginTop: '20px'}}>Contactez-nous</h1>
        <p className="section-subtitle text-center">Notre équipe est à votre disposition pour vous accompagner dans tous vos projets immobiliers.</p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          marginTop: '40px'
        }}>
          <div>
            <h3 style={{fontSize: '1.5rem', marginBottom: '20px', color: 'var(--royal-blue)'}}>Informations de contact</h3>
            
            <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
              <div style={{ color: 'var(--premium-gold)', marginTop: '5px' }}><MapPin size={24} /></div>
              <div>
                <strong style={{ display: 'block', marginBottom: '5px' }}>Adresse de l'Agence</strong>
                <span style={{ color: '#666' }}>Résidence Équateur, Villa 3<br />Libreville – Gabon</span>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
              <div style={{ color: 'var(--premium-gold)', marginTop: '5px' }}><Phone size={24} /></div>
              <div>
                <strong style={{ display: 'block', marginBottom: '5px' }}>Téléphone</strong>
                <span style={{ color: '#666' }}>+(241) 77 353 433<br />+(241) 66 257 839</span>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
              <div style={{ color: 'var(--premium-gold)', marginTop: '5px' }}><Mail size={24} /></div>
              <div>
                <strong style={{ display: 'block', marginBottom: '5px' }}>Email</strong>
                <span style={{ color: '#666' }}>adbimmo01@gmail.com</span>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '15px', marginBottom: '30px' }}>
              <div style={{ color: 'var(--premium-gold)', marginTop: '5px' }}><Clock size={24} /></div>
              <div>
                <strong style={{ display: 'block', marginBottom: '5px' }}>Heures d'ouverture</strong>
                <span style={{ color: '#666' }}>Lundi - Vendredi: 08h00 - 18h00<br />Samedi: 09h00 - 13h00</span>
              </div>
            </div>
            
            <a href="https://wa.me/24177353433" className="btn btn-gold" style={{width: '100%'}}>
              <MessageCircle size={20} style={{marginRight: '8px'}} /> Discuter sur WhatsApp
            </a>
          </div>
          
          <div className="glass" style={{ padding: '30px' }}>
            <h3 style={{fontSize: '1.5rem', marginBottom: '20px', color: 'var(--royal-blue)'}}>Envoyez-nous un message</h3>
            <form>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Nom complet</label>
                <input type="text" placeholder="Votre nom" style={{ width: '100%', padding: '12px 15px', border: '1px solid var(--light-gray)', borderRadius: '8px', fontFamily: 'inherit', fontSize: '1rem' }} />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Téléphone</label>
                  <input type="tel" placeholder="Votre numéro" style={{ width: '100%', padding: '12px 15px', border: '1px solid var(--light-gray)', borderRadius: '8px', fontFamily: 'inherit', fontSize: '1rem' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Email</label>
                  <input type="email" placeholder="Votre email" style={{ width: '100%', padding: '12px 15px', border: '1px solid var(--light-gray)', borderRadius: '8px', fontFamily: 'inherit', fontSize: '1rem' }} />
                </div>
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Sujet de votre demande</label>
                <select style={{ width: '100%', padding: '12px 15px', border: '1px solid var(--light-gray)', borderRadius: '8px', fontFamily: 'inherit', fontSize: '1rem' }}>
                  <option>Acheter un bien</option>
                  <option>Louer un bien</option>
                  <option>Vendre un bien</option>
                  <option>Mettre en location</option>
                  <option>Autre</option>
                </select>
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Message</label>
                <textarea rows="5" placeholder="Comment pouvons-nous vous aider ?" style={{ width: '100%', padding: '12px 15px', border: '1px solid var(--light-gray)', borderRadius: '8px', fontFamily: 'inherit', fontSize: '1rem' }}></textarea>
              </div>
              
              <button type="button" className="btn btn-primary" style={{ width: '100%' }}>Envoyer le message</button>
            </form>
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '80px', height: '400px', backgroundColor: 'var(--light-gray)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: '#888', fontStyle: 'italic' }}>Intégration Google Maps (Libreville, Gabon)</p>
      </div>
    </div>
  );
}
