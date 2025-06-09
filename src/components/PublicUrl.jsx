import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PublicUrl = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Asegurarse de que las rutas se manejen correctamente
    const publicUrl = process.env.PUBLIC_URL || '';
    const fullPath = `${publicUrl}${location.pathname}`.replace(/\/+$/, '');
    
    if (window.location.pathname !== fullPath) {
      window.history.replaceState({}, '', fullPath);
    }
  }, [location]);

  return children;
};

export default PublicUrl;
