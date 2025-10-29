// Esquemas de base de datos para Joyería Ruth

export interface Cliente {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  direccion?: string;
  fecha_registro: Date;
  created_at: Date;
  updated_at: Date;
}

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  material: string;
  imagen_url?: string;
  stock: number;
  activo: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface Pedido {
  id: number;
  cliente_id: number;
  numero_contacto: string;
  descripcion: string;
  estado: 'pendiente' | 'en_proceso' | 'completado' | 'cancelado';
  fecha_pedido: Date;
  fecha_entrega?: Date;
  notas?: string;
  created_at: Date;
  updated_at: Date;
}

export interface Contacto {
  id: number;
  nombre: string;
  email: string;
  telefono?: string;
  asunto: string;
  mensaje: string;
  estado: 'nuevo' | 'leido' | 'respondido';
  fecha_contacto: Date;
  created_at: Date;
  updated_at: Date;
}

// Tipos para crear nuevos registros
export type NuevoCliente = Omit<Cliente, 'id' | 'fecha_registro' | 'created_at' | 'updated_at'>;
export type NuevoProducto = Omit<Producto, 'id' | 'created_at' | 'updated_at'>;
export type NuevoPedido = Omit<Pedido, 'id' | 'fecha_pedido' | 'created_at' | 'updated_at'>;
export type NuevoContacto = Omit<Contacto, 'id' | 'fecha_contacto' | 'created_at' | 'updated_at'>;
