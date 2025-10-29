import { NextRequest, NextResponse } from 'next/server';

const COOKIE_NAME = 'admin_auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password } = body || {};

    if (!password) {
      return NextResponse.json({ error: 'Contraseña requerida' }, { status: 400 });
    }

    if (password !== 'admin') {
      return NextResponse.json({ success: false, error: 'Credenciales inválidas' }, { status: 401 });
    }

    const response = NextResponse.json({ success: true }, { status: 200 });
    response.cookies.set(COOKIE_NAME, 'ok', {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 8,
    });
    return response;
  } catch (error) {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

