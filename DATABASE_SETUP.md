# Configuración de Base de Datos Vercel Postgres - Joyería Ruth

## 📋 Pasos para configurar la base de datos

### 1. Crear base de datos en Vercel

1. Ve a tu dashboard de Vercel
2. Selecciona tu proyecto "joyeria-ruth"
3. Ve a la pestaña "Storage"
4. Haz clic en "Create Database"
5. Selecciona "Postgres"
6. Elige un nombre para tu base de datos
7. Selecciona la región más cercana
8. Haz clic en "Create"

### 2. Configurar variables de entorno

1. En Vercel Dashboard, ve a "Settings" > "Environment Variables"
2. Añade las siguientes variables (Vercel las genera automáticamente):

```
POSTGRES_URL
POSTGRES_PRISMA_URL
POSTGRES_URL_NON_POOLING
POSTGRES_USER
POSTGRES_HOST
POSTGRES_PASSWORD
POSTGRES_DATABASE
```

3. Para desarrollo local, copia `env.example` a `.env.local` y configura los valores

### 3. Inicializar las tablas

1. Ve a la pestaña "Storage" en Vercel Dashboard
2. Haz clic en tu base de datos Postgres
3. Ve a la pestaña "Query"
4. Copia y pega el contenido de `lib/init-db.sql`
5. Ejecuta el script para crear las tablas

### 4. Verificar la conexión

El proyecto incluye utilidades para verificar la conexión:

```typescript
import { inicializarBaseDeDatos } from '@/lib/db-utils';

// En tu página o API route
await inicializarBaseDeDatos();
```

## 🗂️ Estructura de la base de datos

### Tablas creadas:

- **clientes**: Información de los clientes
- **productos**: Catálogo de joyas y accesorios
- **pedidos**: Pedidos realizados por los clientes
- **contactos**: Mensajes del formulario de contacto

### Funcionalidades incluidas:

- ✅ Triggers automáticos para `updated_at`
- ✅ Índices para mejorar el rendimiento
- ✅ Datos de ejemplo (productos)
- ✅ Validaciones de estado
- ✅ Relaciones entre tablas

## 🔧 Utilidades disponibles

### Clientes
- `crearCliente()`
- `obtenerClientePorId()`
- `obtenerClientePorEmail()`
- `obtenerTodosLosClientes()`

### Productos
- `crearProducto()`
- `obtenerProductoPorId()`
- `obtenerTodosLosProductos()`
- `obtenerProductosPorCategoria()`

### Pedidos
- `crearPedido()`
- `obtenerPedidoPorId()`
- `obtenerTodosLosPedidos()`
- `obtenerPedidosPorEstado()`
- `actualizarEstadoPedido()`

### Contactos
- `crearContacto()`
- `obtenerContactoPorId()`
- `obtenerTodosLosContactos()`
- `obtenerContactosPorEstado()`
- `actualizarEstadoContacto()`

## 📱 Ejemplo de uso en API Routes

```typescript
// app/api/pedidos/route.ts
import { crearPedido } from '@/lib/db-utils';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const pedido = await crearPedido(data);
    return Response.json(pedido);
  } catch (error) {
    return Response.json({ error: 'Error al crear pedido' }, { status: 500 });
  }
}
```

## 🚀 Próximos pasos

1. Configurar la base de datos siguiendo los pasos anteriores
2. Crear API routes para manejar los formularios
3. Integrar los formularios con la base de datos
4. Añadir autenticación si es necesario
5. Implementar notificaciones por email/WhatsApp
