// Utilitaire pour vérifier les variables d'environnement
export const getEnvVar = (key: string, defaultValue?: string): string => {
  const value = process.env[key] || defaultValue;
  
  return value || '';
};

// Variables d'environnement typées
export const ENV = {
  DISCORD_WEBHOOK_URL: getEnvVar('NEXT_PUBLIC_DISCORD_WEBHOOK_URL', 'https://discord.com/api/webhooks/1395058117372543249/7jgRSavOmF6OlAKLkD4mcjAJjRR5ZU8amQ_B1_BMBVpUp4IGp5ju0IfWtRb7rVsUVthQ'),
} as const;