import { NextRequest, NextResponse } from 'next/server';
import { crearPedido, obtenerTodosLosPedidos } from '@/lib/db-utils';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validar datos requeridos
    if (!body.numero_contacto || !body.descripcion) {
      return NextResponse.json(
        { error: 'Número de contacto y descripción son requeridos' },
        { status: 400 }
      );
    }

    // Crear el pedido
    const pedido = await crearPedido({
      cliente_id: body.cliente_id || null,
      numero_contacto: body.numero_contacto,
      descripcion: body.descripcion,
      estado: 'pendiente',
      fecha_entrega: body.fecha_entrega || null,
      notas: body.notas || null,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Pedido creado exitosamente',
        pedido 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error al crear pedido:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const pedidos = await obtenerTodosLosPedidos();
    return NextResponse.json(pedidos);
  } catch (error) {
    console.error('Error al obtener pedidos:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
