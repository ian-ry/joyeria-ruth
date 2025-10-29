'use client';

import { useState } from 'react';

export default function Pedidos() {
  const [formData, setFormData] = useState({
    numero_contacto: '',
    descripcion: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/pedidos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          numero_contacto: '',
          descripcion: '',
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Error al enviar el pedido');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Error de conexión. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <header>
        <div className="header-container">
          <a href="/" className="header-logo">
            <h1>Joyería Ruth</h1>
          </a>
          <nav className="header-links">
            <a href="/contacto">Contacto</a>
            <a href="/quienes-somos">¿Quiénes somos?</a>
            <a href="/pedidos">Realiza un pedido</a>
          </nav>
        </div>
      </header>

      <main>
        <div className="contenedor">
          <div className="cajaizq">
            <div className="pedido">
              <fieldset className="pedido-fieldset">
                <legend>
                  <h2>Pedido</h2>
                </legend>
                
                {submitStatus === 'success' && (
                  <div className="success-message">
                    <h3>¡Pedido enviado exitosamente!</h3>
                    <p>Nos pondremos en contacto contigo pronto.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="error-message">
                    <h3>Error al enviar el pedido</h3>
                    <p>{errorMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="pedido-form">
                  <div className="form-group">
                    <h4>Número de contacto:</h4>
                    <input 
                      type="tel" 
                      name="numero_contacto" 
                      id="numero_contacto" 
                      placeholder="Número de contacto"
                      value={formData.numero_contacto}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="form-group">
                    <h4>Descripción de pedido:</h4>
                    <textarea 
                      name="descripcion" 
                      id="descripcion" 
                      rows={6}
                      placeholder="Describe el pedido que deseas realizar..."
                      value={formData.descripcion}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="pedido-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                  </button>
                </form>
              </fieldset>
              <button className="regresar-btn">
                <a href="/">Regresar</a>
              </button>
            </div>
          </div>
          <div className="cajader">
            <img 
              src="https://cdn-3.expansion.mx/dims4/default/3d0104d/2147483647/strip/true/crop/1000x1209+0+0/resize/1200x1451!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F2c%2Fd7%2F043101ee4fb0834651fb7684f546%2Frj.jpg" 
              alt="Joyería elegante" 
            />
          </div>
        </div>
      </main>
    </>
  );
}
