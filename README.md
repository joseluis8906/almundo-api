# almundo-api
Demostración de servicio Api Rest.<br />

##Endpoints

Consultar la lista de hoteles:<br />
http://localhost:3000/api/v1/hotels
<br />
Filtrar hoteles por nombre:<br />
http://localhost:3000/api/v1/hotels?name=Hotel Stefano<br />
<br />
Filtrar hoteles por número de estrellas:<br />
http://localhost:3000/api/v1/hotels?stars=3<br />
<br />
Filtrar hoteles por amenities:<br />
http://localhost:3000/api/v1/hotels?amenities=amenity1,amenity2,...<br />
<br />
Todos los endpoints reciben el paramentro ?page=1.. para continuar con las páginas siguientes del stream de objetos.

##Desarrollo

Para desplegar el proyecto almundo api en un entorno de desarrollo, siga las siguientes instrucciones:<br />
<br />
1). cd "ruta hasta el proyecto almudo api"<br />
2). npm install<br />
3). npm run dev<br />
<br />
Abrir la dirección http://localhost:3000/

##Producción

Para desplegar el proyecto en productivo siga las siguientes instrucciones:<br />
<br />
1). cd "ruta del proyecto almundo api"<br />
2). npm install<br />
3). npm run build<br />
4). npm run serve<br />
<br />
Abrir la dirección http://localhost:3000/

##Producción alternativa

Si cuenta con el software de contenedores docker, puede ejecutar el siguiente comando para desplegar en productivo el proyecto.<br />
<br />
docker run -it -p 3000:3000 -d joseluis8906/almundo-api:latest<br />
<br />
Abrir la dirección http://localhost:3000/

##Demo de prueba online

En la dirección https://almundoapi-portafolio.josecaceres.info puede consumir una instancia del proyecto que se despliega de forma continua mediante jenkins.

##Reportes

En el endpoint /static/reports/unit.html y /static/reports/factory.html se pueden encontrar los reportes de pruebas unitarias y de integración.
