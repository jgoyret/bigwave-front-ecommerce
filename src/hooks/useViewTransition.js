// hooks/useViewTransition.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useViewTransition = () => {
  const location = useLocation();

  useEffect(() => {
    if (document.startViewTransition) {
      const handleStartTransition = () => {
        document.startViewTransition(() => Promise.resolve());
      };

      handleStartTransition();
    } else {
      console.warn("View Transition API no soportada en este navegador.");
    }
  }, [location]);
};

export default useViewTransition;
