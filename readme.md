## En la carpeta prisma agrega un archivo .env para que se pueda conectar a tu base de datos con prisma

### Tu archivo .env debe tener un DATABASE_URL:

```
DATABASE_URL="postgresql://usuario:contraseña@host:puerto/nombre_db?schema=public"
```

### Elimina esto del gitignore:

```
# Locks
package-lock.json
yarn.lock
```

## Antes de correr algún script del package.json recuerda correr

```
yarn o npm install
```

### Dependiendo de cual sea el que uses

## Configuracion de prisma

### Comandos para iniciar prisma:

```
npx prisma introspect
npx prisma generate
```
