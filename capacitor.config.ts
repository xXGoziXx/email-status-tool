import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.stafford.vite.capacitor',
  appName: 'email-status-tool',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
