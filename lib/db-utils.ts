import { sql } from './db';
import { 
  Cliente, 
  Producto, 
  Pedido, 
  Contacto, 
  NuevoCliente, 
  NuevoProducto, 
  NuevoPedido, 
  NuevoContacto 
} from './schemas';

// Utilidades para Clientes
export async function crearCliente(cliente: NuevoCliente): Promise<Cliente> {
  const { rows } = await sql`
    INSERT INTO clientes (nombre, email, telefono, direccion)
    VALUES (${cliente.nombre}, ${cliente.email}, ${cliente.telefono}, ${cliente.direccion || null})
    RETURNING *
  `;
  return rows[0] as Cliente;
}

export async function obtenerClientePorId(id: number): Promise<Cliente | null> {
  const { rows } = await sql`
    SELECT * FROM clientes WHERE id = ${id}
  `;
  return rows[0] as Cliente || null;
}

export async function obtenerClientePorEmail(email: string): Promise<Cliente | null> {
  const { rows } = await sql`
    SELECT * FROM clientes WHERE email = ${email}
  `;
  return rows[0] as Cliente || null;
}

export async function obtenerTodosLosClientes(): Promise<Cliente[]> {
  const { rows } = await sql`
    SELECT * FROM clientes ORDER BY created_at DESC
  `;
  return rows as Cliente[];
}

// Utilidades para Productos
export async function crearProducto(producto: NuevoProducto): Promise<Producto> {
  const { rows } = await sql`
    INSERT INTO productos (nombre, descripcion, precio, categoria, material, imagen_url, stock, activo)
    VALUES (${producto.nombre}, ${producto.descripcion}, ${producto.precio}, ${producto.categoria}, ${producto.material}, ${producto.imagen_url || null}, ${producto.stock}, ${producto.activo})
    RETURNING *
  `;
  return rows[0] as Producto;
}

export async function obtenerProductoPorId(id: number): Promise<Producto | null> {
  const { rows } = await sql`
    SELECT * FROM productos WHERE id = ${id}
  `;
  return rows[0] as Producto || null;
}

export async function obtenerTodosLosProductos(): Promise<Producto[]> {
  const { rows } = await sql`
    SELECT * FROM productos WHERE activo = true ORDER BY created_at DESC
  `;
  return rows as Producto[];
}

export async function obtenerProductosPorCategoria(categoria: string): Promise<Producto[]> {
  const { rows } = await sql`
    SELECT * FROM productos WHERE categoria = ${categoria} AND activo = true ORDER BY created_at DESC
  `;
  return rows as Producto[];
}

// Utilidades para Pedidos
export async function crearPedido(pedido: NuevoPedido): Promise<Pedido> {
  const { rows } = await sql`
    INSERT INTO pedidos (cliente_id, numero_contacto, descripcion, estado, fecha_entrega, notas)
    VALUES (${pedido.cliente_id || null}, ${pedido.numero_contacto}, ${pedido.descripcion}, ${pedido.estado || 'pendiente'}, ${pedido.fecha_entrega || null}, ${pedido.notas || null})
    RETURNING *
  `;
  return rows[0] as Pedido;
}

export async function obtenerPedidoPorId(id: number): Promise<Pedido | null> {
  const { rows } = await sql`
    SELECT * FROM pedidos WHERE id = ${id}
  `;
  return rows[0] as Pedido || null;
}

export async function obtenerTodosLosPedidos(): Promise<Pedido[]> {
  const { rows } = await sql`
    SELECT * FROM pedidos ORDER BY fecha_pedido DESC
  `;
  return rows as Pedido[];
}

export async function obtenerPedidosPorEstado(estado: string): Promise<Pedido[]> {
  const { rows } = await sql`
    SELECT * FROM pedidos WHERE estado = ${estado} ORDER BY fecha_pedido DESC
  `;
  return rows as Pedido[];
}

export async function actualizarEstadoPedido(id: number, estado: string): Promise<Pedido | null> {
  const { rows } = await sql`
    UPDATE pedidos SET estado = ${estado} WHERE id = ${id} RETURNING *
  `;
  return rows[0] as Pedido || null;
}

// Utilidades para Contactos
export async function crearContacto(contacto: NuevoContacto): Promise<Contacto> {
  const { rows } = await sql`
    INSERT INTO contactos (nombre, email, telefono, asunto, mensaje, estado)
    VALUES (${contacto.nombre}, ${contacto.email}, ${contacto.telefono || null}, ${contacto.asunto}, ${contacto.mensaje}, ${contacto.estado || 'nuevo'})
    RETURNING *
  `;
  return rows[0] as Contacto;
}

export async function obtenerContactoPorId(id: number): Promise<Contacto | null> {
  const { rows } = await sql`
    SELECT * FROM contactos WHERE id = ${id}
  `;
  return rows[0] as Contacto || null;
}

export async function obtenerTodosLosContactos(): Promise<Contacto[]> {
  const { rows } = await sql`
    SELECT * FROM contactos ORDER BY fecha_contacto DESC
  `;
  return rows as Contacto[];
}

export async function obtenerContactosPorEstado(estado: string): Promise<Contacto[]> {
  const { rows } = await sql`
    SELECT * FROM contactos WHERE estado = ${estado} ORDER BY fecha_contacto DESC
  `;
  return rows as Contacto[];
}

export async function actualizarEstadoContacto(id: number, estado: string): Promise<Contacto | null> {
  const { rows } = await sql`
    UPDATE contactos SET estado = ${estado} WHERE id = ${id} RETURNING *
  `;
  return rows[0] as Contacto || null;
}

// Utilidades generales
export async function inicializarBaseDeDatos(): Promise<void> {
  try {
    // Verificar si las tablas existen
    const { rows } = await sql`
      SELECT table_name FROM information_schema.tables 
      WHERE table_schema = 'public' AND table_name IN ('clientes', 'productos', 'pedidos', 'contactos')
    `;
    
    if (rows.length === 0) {
      console.log('Las tablas no existen. Ejecuta el script init-db.sql en Vercel Postgres.');
    } else {
      console.log('Base de datos inicializada correctamente.');
    }
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
    throw error;
  }
}
