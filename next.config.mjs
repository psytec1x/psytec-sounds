import { existsSync } from 'fs';

let userConfig = {}; // Standardmäßig ein leeres Objekt

const userConfigPath = './v0-user-next.config.mjs';
if (existsSync(userConfigPath)) {
  try {
    userConfig = await import(userConfigPath);
  } catch (e) {
    console.error('Fehler beim Importieren der Next.js Benutzerkonfiguration:', e);
    userConfig = {}; // Rückfall auf ein leeres Objekt, wenn der Import fehlschlägt
  }
}


/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // unoptimized: true,  // Dies sollte überdacht werden - Bildoptimierung ist wichtig
  },
  experimental:
    // ... Rest der Konfiguration
};

mergeConfig(nextConfig, userConfig);

// ... die mergeConfig Funktion bleibt unverändert ...

export default nextConfig;