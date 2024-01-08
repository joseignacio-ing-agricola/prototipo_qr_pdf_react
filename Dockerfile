# Utiliza la última versión de Ubuntu
FROM ubuntu:latest

# Actualiza el sistema operativo e instala las dependencias necesarias
RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y nodejs npm

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el directorio actual en el contenedor en /app
COPY . /app

# Instala las dependencias de tu proyecto
RUN npm install @testing-library/jest-dom@^5.17.0
RUN npm install @testing-library/react@^13.4.0
RUN npm install @testing-library/user-event@^13.5.0
RUN npm install qrcode.react@^3.1.0
RUN npm install react@^18.2.0
RUN npm install react-dom@^18.2.0
RUN npm install react-pdf@^7.6.0
#RUN npm install react-router-dom@^6.20.1
RUN npm install react-scripts@5.0.1
RUN npm install web-vitals@^2.1.4

# Expone el puerto 3000
EXPOSE 3000

# Comando por defecto a ejecutar cuando se inicia el contenedor
CMD ["npm", "start"]
