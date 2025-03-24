import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'host_remote_app',
  exposes: {
    './TestComponent': './src/components/TestComponent.tsx',
  },
  remotes: {
    'remote_1a': 'remote_1a@http://localhost:3003/mf-manifest.json',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
});
