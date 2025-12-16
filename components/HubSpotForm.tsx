'use client';

import { useEffect } from 'react';

export default function HubSpotForm() {
  useEffect(() => {
    // Load HubSpot script
    const script = document.createElement('script');
    script.src = 'https://js-na2.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.async = true;
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
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-8">
      <div id="hubspot-form-container" className="hubspot-form"></div>
    </div>
  );
}

// Add type definition for HubSpot
declare global {
  interface Window {
    hbspt: any;
  }
}
