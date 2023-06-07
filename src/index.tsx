import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '../src/app.css';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
