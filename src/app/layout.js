import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "ADB Immo | L'Excellence Immobilière à Votre Portée",
  description: "Trouvez votre bien idéal au Gabon avec ADB Immo. Achat, vente, location et gestion immobilière de luxe à Libreville.",
  keywords: "immobilier, Gabon, Libreville, ADB Immo, luxe, villas, appartements, vente, location, gestion immobilière",
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main style={{ minHeight: 'calc(100vh - 300px)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
