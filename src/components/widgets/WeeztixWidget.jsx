import React, { useEffect } from 'react';

const WeeztixWidget = () => {
  useEffect(() => {
    const scriptSrc = 'https://shop.weeztix.com/build/integrate.js';
    
    // Voeg het script alleen toe als het nog niet op de pagina staat
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      id="shop-frame"
      data-url="https://shop.weeztix.com/1f8fcfa2-8a4b-11f0-a9cb-7e126431635e"
      style={{ maxWidth: '600px', margin: '0 auto' }}
    ></div>
  );
};

export default WeeztixWidget;