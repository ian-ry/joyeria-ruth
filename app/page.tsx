export default function Home() {
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
            <img
              src="https://media.gq.com.mx/photos/61d71814ed3f3306292cea9c/16:9/w_1920,c_limit/joyeri%CC%81a-855839820.jpg"
              alt="Joyería imagen"
            />
          </div>
          <div className="cajader">
            <div className="cajader-content">
              <div>
                <h2>Joyería Ruth</h2>
              </div>
              <h3></h3>
              <h4>
                Joyería Ruth es una joyería y tienda de accesorios que combina
                elegancia, estilo y tendencias actuales. Cada pieza está
                cuidadosamente seleccionada para realzar la belleza y
                personalidad de quienes la usan, ofreciendo desde diseños
                clásicos hasta opciones modernas y únicas para cada ocasión.
              </h4>
              <nav>
                <a href="/catalogo">Catálogo</a>
                <a href="/pedidos">Pedidos</a>
                <a href="/contacto">Contacto</a>
              </nav>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <a href="/login">Log In</a>
      </footer>
    </>
  );
}
