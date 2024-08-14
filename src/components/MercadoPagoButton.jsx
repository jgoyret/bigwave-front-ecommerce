import React, { useEffect } from "react";


const MercadoPagoButton = ({ preferenceId }) => {
  useEffect(() => {
    if (preferenceId) {
    
      const mp = new window.MercadoPago(import.meta.env.VITE_PUBLIC_KEY, {
        locale: "es-UY",
      });

      mp.checkout({
        preference: {
          id: preferenceId,
        },
        render: {
          container: ".cho-container",
          label: "Pagar",
        },
      });
    }
  }, [preferenceId]);

  return <div className="cho-container" />;
};

export default MercadoPagoButton;
