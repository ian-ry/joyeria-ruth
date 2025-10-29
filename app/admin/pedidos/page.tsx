import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { obtenerTodosLosPedidos } from '@/lib/db-utils';

export default async function AdminPedidosPage() {
  const cookieStore = await cookies();
  const auth = cookieStore.get('admin_auth');
  if (!auth) {
    redirect('/admin');
  }

  const pedidos = await obtenerTodosLosPedidos();

  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Pedidos</h1>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #e5e7eb', padding: 8 }}>ID</th>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #e5e7eb', padding: 8 }}>Número contacto</th>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #e5e7eb', padding: 8 }}>Descripción</th>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #e5e7eb', padding: 8 }}>Estado</th>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #e5e7eb', padding: 8 }}>Fecha pedido</th>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #e5e7eb', padding: 8 }}>Notas</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((p) => (
              <tr key={p.id}>
                <td style={{ borderBottom: '1px solid #f3f4f6', padding: 8 }}>{p.id}</td>
                <td style={{ borderBottom: '1px solid #f3f4f6', padding: 8 }}>{p.numero_contacto}</td>
                <td style={{ borderBottom: '1px solid #f3f4f6', padding: 8 }}>{p.descripcion}</td>
                <td style={{ borderBottom: '1px solid #f3f4f6', padding: 8 }}>{p.estado}</td>
                <td style={{ borderBottom: '1px solid #f3f4f6', padding: 8 }}>{new Date(p.fecha_pedido).toLocaleString()}</td>
                <td style={{ borderBottom: '1px solid #f3f4f6', padding: 8 }}>{p.notas || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


