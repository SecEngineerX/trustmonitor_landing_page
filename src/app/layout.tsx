"use client";

import '@/styles/globals.css';
import '@/styles/typography.css';
import '@/styles/variables.css';

import { useEffect, useRef } from 'react';
import { perfEngine } from '@/utils/performance';
import { contentGuard } from '@/utils/copyProtection';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const initialized = useRef(false);

  useEffect(() => {
    // Only run on the client
    if (typeof window === 'undefined' || initialized.current) return;

    try {
      // 1. ENGAGE Performance Engine
      // If you followed my previous refactor, use the instance methods:
      perfEngine.reportMetric({ name: 'APP_INITIALIZED', timestamp: Date.now() });

      // 2. ENGAGE Security Engine
      // THIS IS THE MISSING LINK. YOU MUST CALL THE RUN METHOD.
      contentGuard.run(); 

      console.log("🛡️ TrustMonitor: Systems Operational");
      initialized.current = true;
    } catch (err) {
      console.error("Critical: Security/Performance Engine Failure", err);
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

