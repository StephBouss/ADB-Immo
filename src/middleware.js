import { NextResponse } from 'next/server';

// ─── Outils d'attaque et scanners de vulnérabilités connus ───────────────────
const BLOCKED_UA_FRAGMENTS = [
  'sqlmap',       // Outil d'injection SQL automatisé
  'nikto',        // Scanner de vulnérabilités web
  'nmap ',        // Scanner réseau (note: espace pour éviter "nmap.org")
  'masscan',      // Scanner de ports ultra-rapide
  'acunetix',     // Scanner de sécurité web
  'zgrab',        // Scanner réseau Go
  'nuclei',       // Outil de scan de vulnérabilités
  'dirbuster',    // Bruteforce de répertoires
  'gobuster',     // Bruteforce de répertoires
  'dirb/',        // Scanner de répertoires
  'havij',        // Outil d'injection SQL
  'w3af',         // Framework d'attaque web
  'skipfish',     // Scanner de sécurité web Google
  'openvas',      // Scanner de vulnérabilités
  'nessus',       // Scanner de vulnérabilités Tenable
  'burpsuite',    // Proxy d'attaque web
  'hydra',        // Outil de bruteforce
  'metasploit',   // Framework d'exploitation
  'wfuzz',        // Fuzzer web
  'ffuf',         // Fuzzer web rapide
  'zaproxy',      // OWASP ZAP proxy
  'libwww-perl',  // Client HTTP souvent utilisé pour des attaques
];

// ─── Patterns malveillants dans l'URL ou les paramètres ──────────────────────
const MALICIOUS_URL_PATTERNS = [
  /\.\.[\/\\]/,                    // Traversée de répertoires (../../../)
  /<script[\s>]/i,                 // Injection XSS via balise script
  /\bselect\b.+\bfrom\b/i,        // Injection SQL SELECT ... FROM
  /\bunion\b.+\bselect\b/i,       // Injection SQL UNION SELECT
  /\binsert\b.+\binto\b/i,        // Injection SQL INSERT INTO
  /\bdrop\b.+\btable\b/i,         // Injection SQL DROP TABLE
  /\bexec\s*\(/i,                  // Exécution de code (PHP/SQL)
  /base64_decode\s*\(/i,           // Décodage Base64 (injection PHP)
  /etc\/passwd/,                   // Divulgation du fichier passwd Linux
  /proc\/self\/environ/,           // Accès aux variables d'environnement Linux
  /\/\.git\//,                     // Accès au dépôt Git
  /wp-login\.php/i,                // Scan WordPress
  /xmlrpc\.php/i,                  // Scan WordPress XML-RPC
  /\.env(\b|$)/,                   // Accès au fichier .env
  /cmd\.exe/i,                     // Exécution de commandes Windows
  /system\s*\(/i,                  // Appel système PHP
  /passthru\s*\(/i,               // Exécution de commandes PHP
  /shell_exec\s*\(/i,              // Exécution shell PHP
  /\bROOT\s*@/,                   // Probe de compte root
  /javascript\s*:/i,               // Injection JavaScript via URL
  /vbscript\s*:/i,                 // Injection VBScript
  /data\s*:\s*text\/html/i,        // Injection de données HTML via data URI
];

// ─── Chemins systématiquement sondés par les scanners ────────────────────────
const BLOCKED_EXACT_PATHS = new Set([
  '/.env',
  '/.env.local',
  '/.env.production',
  '/.env.development',
  '/.env.staging',
  '/.git',
  '/.gitignore',
  '/.htaccess',
  '/.htpasswd',
  '/wp-login.php',
  '/wp-signup.php',
  '/wp-cron.php',
  '/xmlrpc.php',
  '/admin.php',
  '/phpmyadmin',
  '/phpMyAdmin',
  '/PMA',
  '/config.php',
  '/configuration.php',
  '/setup.php',
  '/install.php',
  '/adminer.php',
  '/shell.php',
  '/cmd.php',
  '/backdoor.php',
  '/c99.php',
  '/r57.php',
  '/web.config',
  '/server-status',
  '/server-info',
  '/info.php',
  '/phpinfo.php',
  '/test.php',
  '/debug.php',
  '/docker-compose.yml',
  '/Dockerfile',
  '/package.json',
  '/package-lock.json',
]);

// ─── Préfixes de chemins à bloquer ───────────────────────────────────────────
const BLOCKED_PATH_PREFIXES = [
  '/.git/',
  '/.svn/',
  '/.hg/',
  '/wp-admin/',
  '/wp-content/',
  '/wp-includes/',
  '/phpmyadmin/',
  '/phpMyAdmin/',
  '/pma/',
  '/PMA/',
  '/cgi-bin/',
  '/.well-known/pki-validation/',
];

// ─── Extensions de fichiers côté serveur sondées par les scanners ───────────
const SERVER_SCRIPT_EXTENSIONS = /\.(php|php3|php4|php5|phtml|asp|aspx|jsp|jspx|cgi|cfm|cfml|pl|rb|sh|bash|py|lua)(\?|$)/i;

// ─── Méthodes HTTP autorisées ─────────────────────────────────────────────────
const ALLOWED_METHODS = new Set(['GET', 'HEAD', 'POST', 'OPTIONS']);

export function middleware(request) {
  const { pathname, search, method } = request.nextUrl;
  const ua = request.headers.get('user-agent') || '';
  const uaLower = ua.toLowerCase();
  const fullPath = pathname + search;
  const normalizedPath = pathname.toLowerCase();

  // 1. Bloquer les User-Agents vides (les vrais navigateurs envoient toujours un UA)
  if (!ua.trim()) {
    return new NextResponse('Forbidden', { status: 403 });
  }

  // 2. Bloquer les outils d'attaque connus
  if (BLOCKED_UA_FRAGMENTS.some((frag) => uaLower.includes(frag))) {
    return new NextResponse('Forbidden', { status: 403 });
  }

  // 3. Bloquer les chemins de sonde exacts
  if (BLOCKED_EXACT_PATHS.has(pathname) || BLOCKED_EXACT_PATHS.has(normalizedPath)) {
    return new NextResponse('Not Found', { status: 404 });
  }

  // 4. Bloquer les préfixes de chemins suspects
  if (BLOCKED_PATH_PREFIXES.some((prefix) => normalizedPath.startsWith(prefix))) {
    return new NextResponse('Not Found', { status: 404 });
  }

  // 5. Bloquer les sondes de scripts serveur (.php, .asp, .jsp, etc.)
  if (SERVER_SCRIPT_EXTENSIONS.test(pathname)) {
    return new NextResponse('Not Found', { status: 404 });
  }

  // 6. Bloquer les patterns d'attaque dans l'URL et les paramètres
  if (MALICIOUS_URL_PATTERNS.some((pattern) => pattern.test(fullPath))) {
    return new NextResponse('Bad Request', { status: 400 });
  }

  // 7. Bloquer les URLs anormalement longues (tentatives de buffer overflow)
  if (fullPath.length > 2048) {
    return new NextResponse('URI Too Long', { status: 414 });
  }

  // 8. Bloquer les méthodes HTTP non autorisées (DELETE, PUT, PATCH, TRACE, CONNECT)
  if (!ALLOWED_METHODS.has(request.method)) {
    return new NextResponse('Method Not Allowed', { status: 405 });
  }

  return NextResponse.next();
}

// Appliquer le middleware sur toutes les routes sauf les assets statiques
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.ico|logo\\.png|images/|robots\\.txt|sitemap\\.xml).*)',
  ],
};
