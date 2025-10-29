export default function QuienesSomos() {
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
        <div className="quienes-somos-container">
          <div className="quienes-somos-content">
            <div className="quienes-somos-image">
              <img 
                src="https://phantom-telva.unidadeditorial.es/9132d2a2c7abb6ab7cf099d4af093fa6/resize/1280/f/webp/assets/multimedia/imagenes/2023/03/05/16780029716658.jpg" 
                alt="Ruth Yan - Fundadora de Joyería Ruth" 
              />
            </div>
            <div className="quienes-somos-text">
              <h1>Ruth Yan</h1>
              <h4>
                Empresaria de PyME enfocada en entregar a mis clientes la mejor joyería y accesorios por encargo, 
                y ayudarles a encontrar su propio estilo e imagen.
              </h4>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
