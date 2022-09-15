# Rutas

- /api/v1/users
- /api/v1/users/:id
- /api/v1/users/me

- /api/v1/auth/login
- /api/v1/auth/registrer
- /api/v1/auth/password-recovery
- /api/v1/auth/verify-account


- /api/v1/users
- - GET

- /api/v1/users/:id
- - GET 
- - PUT (ADMIN)
- - DELETE (ADMIN)

- /api/v1/users/me
- - GET
- - PUT
- - PATCH
- - DELETE

- /api/v1/auth/login
- - POST

- /api/v1/auth/registrer
- - POST

- /api/v1/auth/password-recovery
- - POST
- - PATCH


# Paths de mi usuario a traves de mi aplicacion

[✅] registrar mi suusario 
[✅] loggear mi usuario

### Usuario sin sesion iniciada

1. Ver los lugares
2. Puede ver la infomacion de un lugar

### Guest

1. Ver los lugares
2. Puede ver la informacion de un lugar
3. Reservar
4. Cancelar su reservación
5. Dar un score una vez finalizada la reservacion

### Host

1. Ver los lugares
2. Puede ver la informacion de un lugar
3. Reservar
4. Dar un score una vez finalizada la reservación
5. Crear lugares
6. Cancelar reservaciones en los lugares donde es host
7. Puede ver perfiles de usuario
8. Puede ver todos los lugares que le pertenecen
9. Editar el lugar
10. Eliminar el lugar

### Admin

1. Ver los lugares
2. Puede ver la informacion de un lugar
3. Reservar
4. Dar un score una vez finalizada la reservación
5. Puede ver perfiles de usuario
6. Editar el lugar
7. Eliminar el lugar
8. Modificar roles
9. Eliminar un usuario
10. Modificar un usuario
11. Ver lugares de los hosts

### Accommodations

- /api/v1/accommodations

- /
- - GET
- - POST

- /me
- - GET (HOST)
- - POST 

- /me/:id
- - DELETE (HOST)
- - PUT (HOST)

- /:id
- - GET
- - DELETE (ADMIN)
- - PUT (ADMIN)

- /:id/available/?arrival=values&departure=value
- - GET

- /:id/make-reservation
- - POST

### Reservations

- /api/v1/reservations

- /
- - GET (ADMIN)

- /me
- - GET (HOST)

- /me/:id
- - GET 
- - DELETE (HOST, GUEST)
- - PUT (GUEST)

- /:id
- - GET (ADMIN)



# Ejemplo de documentacion
