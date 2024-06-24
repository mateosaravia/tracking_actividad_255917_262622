# BDNR - Tracking de Actividad - Junio 2024

## Integrantes
- Farid Hanna (262622)
- Mateo Saravia (255917)

## Descripción
Este repositorio contiene la implementación del subsistema de tracking de actividad para la plataforma Steam. El subsistema permite
ingresar, almanecenar y consultar datos sobre el registro de actividad, logros y niveles desbloqueados por los usuarios de la plataforma. Además, se ofrece un SDK para que los desarrolladores de juegos puedan integrar el subsistema.

## Guía de Instalación

### Requisitos
- Docker
- Docker Compose
- Node.js

### Pasos para configurar el proyecto

1. Clonar el repositorio
    ```
    git clone https://github.com/mateosaravia/tracking_actividad_255917_262622.git
    ```

2. Ubicarse en la carpeta `backend`
    ```
    cd backend
    ```

3. Crear y ejecutar los contenedores de Docker
    ```
    docker-compose up --build
    ```

Espere a que los contenedores se creen y ejecuten correctamente (principalmente el contenedor de vertica)

4. La API estará disponible en `http://localhost:4000`

5. Ubicarse en la carpeta `frontend`
    ```
    cd ..
    cd frontend
    ```

6. Instalar las dependencias
    ```
    npm install
    ```

7. Iniciar la aplicación
    ```
    npm start
    ```

8. La aplicación estará disponible en `http://localhost:4001`

## Pasos para interactuar con cassandra

1. Ingresar a la consola del contenedor de cassandra
    ```
    docker exec -it {idContenedor} cqlsh
    ```

2. Interactuar con los distintos scrpits de creación de tablas, inserción de datos, etc.
    ````
    SOURCE 'var/lib/cassandra/scripts/schema.cql';
    ...
    