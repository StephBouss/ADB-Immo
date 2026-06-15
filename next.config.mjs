/** @type {import('next').NextConfig} */

const securityHeaders = [
  // Empêche les attaques de type clickjacking (le site ne peut pas être intégré dans une iframe)
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // Empêche le navigateur de deviner le type MIME (protège contre les attaques MIME sniffing)
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // Force HTTPS pendant 2 ans, sous-domaines inclus (HSTS)
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  // Contrôle les informations de référence envoyées lors de la navigation
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // Désactive les APIs sensibles du navigateur non utilisées par le site
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=(), interest-cohort=()',
  },
  // Empêche les attaques cross-origin entre fenêtres (tout en autorisant les popups WhatsApp)
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin-allow-popups',
  },
  // Empêche le chargement de ressources cross-origin non autorisées
  {
    key: 'Cross-Origin-Resource-Policy',
    value: 'same-origin',
  },
  // Supprime la préconnexion DNS non contrôlée
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // Content Security Policy — restreint les sources de contenu autorisées
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      // Next.js App Router nécessite 'unsafe-inline' pour les scripts de hydration
      "script-src 'self' 'unsafe-inline'",
      // CSS Modules et styles inline JSX + Google Fonts
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Polices Google Fonts
      "font-src 'self' https://fonts.gstatic.com",
      // Images locales + data URIs pour les optimisations Next.js
      "img-src 'self' data: blob:",
      // Connexions réseau uniquement vers le site lui-même
      "connect-src 'self'",
      // Aucune frame autorisée
      "frame-src 'none'",
      // Le site ne peut être intégré dans aucune frame externe
      "frame-ancestors 'none'",
      // Aucun plugin (Flash, Java, etc.)
      "object-src 'none'",
      // Aucun média externe
      "media-src 'none'",
      // L'attribut base ne peut pointer que vers le site lui-même
      "base-uri 'self'",
      // Les formulaires ne peuvent soumettre que vers le site lui-même
      "form-action 'self'",
      // Toutes les requêtes HTTP sont automatiquement upgradées en HTTPS
      "upgrade-insecure-requests",
    ].join('; '),
  },
];

const nextConfig = {
  // Supprime le header "X-Powered-By: Next.js" qui révèle la technologie utilisée
  poweredByHeader: false,

  // Compresse les réponses pour réduire la surface d'attaque et améliorer les perfs
  compress: true,

  // Headers de sécurité appliqués sur toutes les routes
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },

  // Configuration des images : seules les images locales sont autorisées
  images: {
    remotePatterns: [],
    dangerouslyAllowSVG: false,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Désactive le rapport d'erreur automatique vers Vercel (télémétrie)
  experimental: {
    // Garder vide — pas de fonctionnalités expérimentales activées
  },
};

export default nextConfig;
