'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setError(data.error || 'Error de autenticación');
        return;
      }
      router.push('/admin/pedidos');
    } catch (err) {
      setError('Error de red');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: 360, margin: '64px auto' }}>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Acceso Admin</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="password" style={{ display: 'block', marginBottom: 8 }}>Contraseña</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: 8, border: '1px solid #ccc', borderRadius: 4 }}
          placeholder="Ingresa la contraseña (admin)"
        />
        {error ? (
          <p style={{ color: 'crimson', marginTop: 8 }}>{error}</p>
        ) : null}
        <button
          type="submit"
          disabled={loading}
          style={{
            marginTop: 16,
            width: '100%',
            padding: '10px 12px',
            background: '#111827',
            color: 'white',
            border: 0,
            borderRadius: 6,
            cursor: 'pointer',
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? 'Entrando…' : 'Entrar'}
        </button>
      </form>
    </div>
  );
}


