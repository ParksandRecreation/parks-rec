import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';

import { GoogleOAuthProvider } from '@react-oauth/google';

const container = document.getElementById('app-root')!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="143680018728-1fb574qfkojddts9msssul16a7jo6kjc.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
