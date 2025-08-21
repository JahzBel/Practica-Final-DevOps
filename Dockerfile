# Imagen base oficial de Node
FROM node:18

# Carpeta de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Puerto que usará la app
EXPOSE 3000

# Comando por defecto
CMD ["npm", "start"]
