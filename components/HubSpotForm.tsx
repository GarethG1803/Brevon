'use client';

import { useEffect } from 'react';

export default function HubSpotForm({ locale }: { locale: string }) {
  useEffect(() => {
    // Load HubSpot script
    const script = document.createElement('script');
    script.src = 'https://js-na2.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    document.body.appendChild(script);

    // Create form when script loads
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "244622464",
          formId: "2f8dc52a-84bc-44bf-913d-8e713c553b34",
          region: "na2",
          target: '#hubspot-form-container',
        });
      }
    };

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div id="hubspot-form-container" className="hubspot-form-wrapper"></div>
  );
}

// Add type definition for HubSpot
declare global {
  interface Window {
    hbspt: any;
  }
}
