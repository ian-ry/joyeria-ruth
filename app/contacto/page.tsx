export default function Contacto() {
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
        <div className="contacto-hero">
          <div className="contacto-hero-content">
            <h1>Contacto</h1>
            <p>Conecta con nosotros para consultas, pedidos especiales o cualquier información sobre nuestras joyas únicas.</p>
          </div>
        </div>

        <div className="contacto-container">
          <div className="contacto-info">
            <h2>Información de Contacto</h2>
            <div className="contacto-item">
              <div className="contacto-icon">📱</div>
              <div className="contacto-details">
                <h3>WhatsApp</h3>
                <p>+52 123 456 7890</p>
                <a href="https://wa.me/521234567890" className="contacto-link">Enviar mensaje</a>
              </div>
            </div>
            
            <div className="contacto-item">
              <div className="contacto-icon">📘</div>
              <div className="contacto-details">
                <h3>Facebook</h3>
                <p>Joyería Ruth Oficial</p>
                <a href="#" className="contacto-link">Visitar página</a>
              </div>
            </div>

            <div className="contacto-item">
              <div className="contacto-icon">📧</div>
              <div className="contacto-details">
                <h3>Email</h3>
                <p>info@joyeriarth.com</p>
                <a href="mailto:info@joyeriarth.com" className="contacto-link">Enviar email</a>
              </div>
            </div>

            <div className="contacto-item">
              <div className="contacto-icon">📍</div>
              <div className="contacto-details">
                <h3>Ubicación</h3>
                <p>Azcapotzalco, Ciudad de México</p>
                <a href="#" className="contacto-link">Ver en mapa</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
