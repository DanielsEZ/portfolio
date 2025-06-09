const isProduction = process.env.NODE_ENV === 'production';

export const PUBLIC_URL = isProduction ? '' : '';

// Rutas de assets
export const ASSETS = {
  images: `${PUBLIC_URL}/assets/images`,
  fonts: `${PUBLIC_URL}/assets/fonts`,
  css: `${PUBLIC_URL}/assets/css`,
};

// Rutas de archivos estáticos
export const STATIC_FILES = {
  CV_EN: `${PUBLIC_URL}/cv-en.pdf`,
  CV_ES: `${PUBLIC_URL}/cv-es.pdf`,
};
