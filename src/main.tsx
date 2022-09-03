import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@components/app';
import { AuthProvider } from '@hooks';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AuthProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthProvider>
);
