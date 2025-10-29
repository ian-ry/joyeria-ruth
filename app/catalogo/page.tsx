export default function Catalogo() {
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
            <div className="catalogo-grid">
              <div className="producto">
                <img src="https://via.placeholder.com/200" alt="Aretes de Plata" />
                <h4>Aretes de Plata</h4>
              </div>
              <div className="producto">
                <img src="https://via.placeholder.com/200" alt="Anillo de Oro" />
                <h4>Anillo de Oro</h4>
              </div>
              <div className="producto">
                <img src="https://via.placeholder.com/200" alt="Collar de Perlas" />
                <h4>Collar de Perlas</h4>
              </div>
              <div className="producto">
                <img src="https://via.placeholder.com/200" alt="Pulsera de Cuero" />
                <h4>Pulsera de Cuero</h4>
              </div>
              <div className="producto">
                <img src="https://via.placeholder.com/200" alt="Aretes de Plata" />
                <h4>Aretes de Plata</h4>
              </div>
              <div className="producto">
                <img src="https://via.placeholder.com/200" alt="Anillo de Oro" />
                <h4>Anillo de Oro</h4>
              </div>
              <div className="producto">
                <img src="https://via.placeholder.com/200" alt="Collar de Perlas" />
                <h4>Collar de Perlas</h4>
              </div>
              <div className="producto">
                <img src="https://via.placeholder.com/200" alt="Pulsera de Cuero" />
                <h4>Pulsera de Cuero</h4>
              </div>
            </div>
          </div>
          <div className="cajader">
            <nav>
              <h1>
                <a href="/pedidos">Realizar un pedido</a>
              </h1>
            </nav>
          </div>
        </div>
      </main>
    </>
  );
}
