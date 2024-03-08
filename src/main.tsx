import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import AppRoutes from './AppRoutes.tsx';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SpeedInsights />
    <Analytics />
    <AppRoutes />
  </React.StrictMode>,
);
