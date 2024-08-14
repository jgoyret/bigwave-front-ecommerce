import React from "react";
import { useSelector } from "react-redux";

const Checkout2 = () => {
  const cart = useSelector((state) => state.cart);
  const [preferenceId, setPreferenceId] = React.useState(null);

  const cartItems = cart.map((item) => ({
    title: item.name,
    unit_price: item.price,
    quantity: item.quantity,
  }));
  console.log(cartItems);

  const handleCheckout = async () => {
    try {
      const response = await fetch("http://localhost:3000/create_preference", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cartItems }),
      });

      const data = await response.json();
      console.log(data); // Verifica el contenido de la respuesta
      setPreferenceId(data.id); // Guarda el ID de la preferencia
    } catch (error) {
      console.error("Error al crear la preferencia:", error);
    }
  };

  React.useEffect(() => {
    // Cargar el SDK de Mercado Pago
    const script = document.createElement("script");
    script.src = "https://sdk.mercadopago.com/js/v2";
    script.async = true;

    document.body.appendChild(script);

    // Cleanup del script cuando el componente se desmonte
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  React.useEffect(() => {
    if (preferenceId) {
      // Inicializar Mercado Pago cuando el ID de preferencia está disponible
      const mp = new window.MercadoPago(import.meta.env.VITE_PUBLIC_KEY, {
        locale: "es-UY", // Reemplaza por el código de tu región
      });

      // Mostrar el checkout utilizando la preferencia generada
      mp.checkout({
        preference: {
          id: preferenceId,
        },
        autoOpen: true, // Abre automáticamente el modal de pago
      });
    }
  }, [preferenceId]);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <button className="btn btn-success" onClick={handleCheckout}>
        Pay with Mercado Pago{" "}
        <span>
          <img style={{width:40, height:30}} src="https://wztvrfnbajbjaglagabq.supabase.co/storage/v1/object/public/images/Front%20images/favicon.ico" />
        </span>
      </button>
    </div>
  );
};

export default Checkout2;
