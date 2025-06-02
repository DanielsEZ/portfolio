# Detener cualquier proceso de Node.js que pueda estar usando node_modules
taskkill /F /IM node.exe /T > $null 2>&1

# Eliminar node_modules y package-lock.json
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue node_modules
Remove-Item -Force -ErrorAction SilentlyContinue package-lock.json

# Limpiar la caché de npm
npm cache clean --force

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
