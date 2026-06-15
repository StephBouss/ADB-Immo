import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export const metadata = {
  title: "Contact | ADB Immo",
  description: "Contactez l'agence ADB Immo pour vos projets immobiliers au Gabon.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        position: 'relative',
        height: '50vh',
        minHeight: '360px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: "url('/images/villa-piscine-2.jpg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
        color: 'white',
        textAlign: 'center',
        padding: '0 20px',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(10,25,84,0.80) 0%, rgba(10,25,84,0.88) 100%)',
        }} />
        <div style={{ position: 'relative', zIndex: 2, marginTop: '80px' }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(244,180,0,0.15)',
            border: '1.5px solid var(--premium-gold)',
            color: 'var(--premium-gold)',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            padding: '7px 20px',
            borderRadius: '4px',
            marginBottom: '20px',
          }}>Contactez-nous</span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            color: 'white',
            marginBottom: '14px',
            textShadow: '0 4px 24px rgba(0,0,0,0.6)',
          }}>Parlons de votre projet</h1>
          <p style={{
            fontSize: '1.05rem',
            color: 'rgba(255,255,255,0.85)',
            maxWidth: '520px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>Notre équipe est à votre disposition 6j/7 pour vous accompagner dans tous vos projets immobiliers.</p>
        </div>
      </section>

      {/* Contenu */}
      <div style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '50px',
          }}>
            {/* Informations de contact */}
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '30px', color: 'var(--royal-blue)' }}>
                Informations de contact
              </h3>

              <div style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
                <div style={{ color: 'var(--premium-gold)', marginTop: '5px', flexShrink: 0 }}><MapPin size={24} /></div>
                <div>
                  <strong style={{ display: 'block', marginBottom: '5px', color: 'var(--navy-deep)' }}>Adresse de l'Agence</strong>
                  <span style={{ color: '#666' }}>Résidence Équateur, Villa 3<br />Libreville – Gabon</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
                <div style={{ color: 'var(--premium-gold)', marginTop: '5px', flexShrink: 0 }}><Phone size={24} /></div>
                <div>
                  <strong style={{ display: 'block', marginBottom: '5px', color: 'var(--navy-deep)' }}>Téléphone</strong>
                  <a href="tel:+24177353433" style={{ color: '#666', display: 'block' }}>+(241) 77 353 433</a>
                  <a href="tel:+24166257839" style={{ color: '#666', display: 'block' }}>+(241) 66 257 839</a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
                <div style={{ color: 'var(--premium-gold)', marginTop: '5px', flexShrink: 0 }}><Mail size={24} /></div>
                <div>
                  <strong style={{ display: 'block', marginBottom: '5px', color: 'var(--navy-deep)' }}>Email</strong>
                  <a href="mailto:adbimmo01@gmail.com" style={{ color: '#666' }}>adbimmo01@gmail.com</a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '15px', marginBottom: '35px' }}>
                <div style={{ color: 'var(--premium-gold)', marginTop: '5px', flexShrink: 0 }}><Clock size={24} /></div>
                <div>
                  <strong style={{ display: 'block', marginBottom: '5px', color: 'var(--navy-deep)' }}>Heures d'ouverture</strong>
                  <span style={{ color: '#666' }}>Lundi – Vendredi : 08h00 – 18h00<br />Samedi : 09h00 – 13h00</span>
                </div>
              </div>

              <a href="https://wa.me/24177353433" className="btn btn-gold" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <MessageCircle size={20} style={{ marginRight: '8px' }} /> Discuter sur WhatsApp
              </a>
            </div>

            {/* Formulaire */}
            <div className="glass" style={{ padding: '35px' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '25px', color: 'var(--royal-blue)' }}>
                Envoyez-nous un message
              </h3>
              <form>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, fontSize: '0.9rem' }}>Nom complet</label>
                  <input
                    type="text"
                    name="nom"
                    placeholder="Votre nom"
                    required
                    minLength={2}
                    maxLength={100}
                    autoComplete="name"
                    style={{ width: '100%', padding: '12px 15px', border: '1px solid var(--light-gray)', borderRadius: '8px', fontFamily: 'inherit', fontSize: '1rem', boxSizing: 'border-box' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, fontSize: '0.9rem' }}>Téléphone</label>
                    <input
                      type="tel"
                      name="telephone"
                      placeholder="Votre numéro"
                      maxLength={20}
                      autoComplete="tel"
                      style={{ width: '100%', padding: '12px 15px', border: '1px solid var(--light-gray)', borderRadius: '8px', fontFamily: 'inherit', fontSize: '1rem', boxSizing: 'border-box' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, fontSize: '0.9rem' }}>Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Votre email"
                      required
                      maxLength={150}
                      autoComplete="email"
                      style={{ width: '100%', padding: '12px 15px', border: '1px solid var(--light-gray)', borderRadius: '8px', fontFamily: 'inherit', fontSize: '1rem', boxSizing: 'border-box' }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, fontSize: '0.9rem' }}>Sujet de votre demande</label>
                  <select style={{ width: '100%', padding: '12px 15px', border: '1px solid var(--light-gray)', borderRadius: '8px', fontFamily: 'inherit', fontSize: '1rem', boxSizing: 'border-box' }}>
                    <option>Acheter un bien</option>
                    <option>Louer un bien</option>
                    <option>Vendre un bien</option>
                    <option>Mettre en location</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, fontSize: '0.9rem' }}>Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Comment pouvons-nous vous aider ?"
                    required
                    minLength={10}
                    maxLength={2000}
                    style={{ width: '100%', padding: '12px 15px', border: '1px solid var(--light-gray)', borderRadius: '8px', fontFamily: 'inherit', fontSize: '1rem', resize: 'vertical', boxSizing: 'border-box' }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
