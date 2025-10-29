import { NextRequest, NextResponse } from 'next/server';
import { crearContacto, obtenerTodosLosContactos } from '@/lib/db-utils';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validar datos requeridos
    if (!body.nombre || !body.email || !body.asunto || !body.mensaje) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Formato de email inválido' },
        { status: 400 }
      );
    }

    // Crear el contacto
    const contacto = await crearContacto({
      nombre: body.nombre,
      email: body.email,
      telefono: body.telefono || null,
      asunto: body.asunto,
      mensaje: body.mensaje,
      estado: 'nuevo',
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensaje enviado exitosamente',
        contacto 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error al crear contacto:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const contactos = await obtenerTodosLosContactos();
    return NextResponse.json(contactos);
  } catch (error) {
    console.error('Error al obtener contactos:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
