import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Tienda Online Avanzada</h1>
    
      <div className="container">
        <div className="productos">
            <div className="producto" data-id="1">
                <img src="https://via.placeholder.com/280x200?text=Zapatillas" alt="Zapatillas Deportivas"></img>
                <h3>Zapatillas Deportivas</h3>
                <p className="descripcion">Zapatillas ideales para running y entrenamiento con amortiguación de alta calidad.</p>
                <div className="precio">$59.99</div>
                <div className="acciones-producto">
                    <button className="btn btn-primary agregar-carrito">Comprar</button>
                    <button className="btn btn-secondary agregar-deseos">Lista de deseos</button>
                </div>
            </div>
            
            <div className="producto" data-id="2">
                <img src="https://via.placeholder.com/280x200?text=Camiseta" alt="Camiseta Básica"></img>
                <h3>Camiseta Básica</h3>
                <p className="descripcion">Camiseta de algodón 100% en varios colores. Cómoda y transpirable.</p>
                <div className="precio">$19.99</div>
                <div className="acciones-producto">
                    <button className="btn btn-primary agregar-carrito">Comprar</button>
                    <button className="btn btn-secondary agregar-deseos">Lista de deseos</button>
                </div>
            </div>
            
            <div className="producto" data-id="3">
                <img src="https://via.placeholder.com/280x200?text=Jeans" alt="Pantalón Jeans"></img>
                <h3>Pantalón Jeans</h3>
                <p className="descripcion">Jeans clásicos de corte recto. Disponible en varios talles y lavados.</p>
                <div className="precio">$39.99</div>
                <div className="acciones-producto">
                    <button className="btn btn-primary agregar-carrito">Comprar</button>
                    <button className="btn btn-secondary agregar-deseos">Lista de deseos</button>
                </div>
            </div>
            
            <div className="producto" data-id="4">
                <img src="https://via.placeholder.com/280x200?text=Reloj" alt="Reloj Inteligente"></img>
                <h3>Reloj Inteligente</h3>
                <p className="descripcion">Con monitor de actividad, notificaciones y resistencia al agua.</p>
                <div className="precio">$129.99</div>
                <div className="acciones-producto">
                    <button className="btn btn-primary agregar-carrito">Comprar</button>
                    <button className="btn btn-secondary agregar-deseos">Lista de deseos</button>
                </div>
            </div>
        </div>
        
        <div className="panel-lateral">
            <div className="tabs">
                <div className="tab activa" data-tab="carrito">Carrito</div>
                <div className="tab" data-tab="deseos">Lista de deseos</div>
            </div>
            
            <div className="contenido-tab activa" id="carrito">
                <div className="carrito">
                    <h2>Tu Carrito</h2>
                    <div id="items-carrito"></div>
                    <div className="total">Total: $<span id="total-carrito">0.00</span></div>
                    <button className="btn btn-vaciar" id="vaciar-carrito">Vaciar Carrito</button>
                    <button className="btn btn-primary" id="finalizar-compra" style={{ marginTop: '10px' }}>Finalizar Compra</button>
                </div>
            </div>
            
            <div className="contenido-tab" id="deseos">
                <div className="lista-deseos">
                    <h2>Tu Lista de Deseos</h2>
                    <div id="items-deseos"></div>
                </div>
            </div>
        </div>
      </div>
    
      {/*-- Modal para reseñas --*/}
      <div className="modal" id="modal-resena">
        <div className="modal-contenido">
            <div className="modal-header">
                <h3>Deja tu reseña</h3>
                <button className="cerrar-modal">&times;</button>
            </div>
            <form id="form-resena">
                <input type="hidden" id="producto-id-resena" />
                <div className="form-group">
                    <label htmlFor="nombre-resena">Tu nombre</label>
                    <input type="text" id="nombre-resena" required />
                </div>
                <div className="form-group">
                    <label>Calificación</label>
                    <div className="estrellas">
                        <span className="estrella" data-valor="1">★</span>
                        <span className="estrella" data-valor="2">★</span>
                        <span className="estrella" data-valor="3">★</span>
                        <span className="estrella" data-valor="4">★</span>
                        <span className="estrella" data-valor="5">★</span>
                    </div>
                    <input type="hidden" id="calificacion" value="0" required />
                </div>
                <div className="form-group">
                    <label htmlFor="comentario-resena">Comentario</label>
                    <textarea id="comentario-resena" required></textarea>
                </div>
                <button type="submit" className="btn btn-enviar">Enviar Reseña</button>
            </form>
        </div>
      </div>
    
      {/*<!-- Modal de compra finalizada -->*/}
      <div className="modal" id="modal-compra">
        <div className="modal-contenido">
            <div className="modal-header">
                <h3>¡Compra Finalizada!</h3>
                <button className="cerrar-modal">&times;</button>
            </div>
            <p>Gracias por tu compra. ¿Te gustaría dejar una reseña sobre los productos adquiridos?</p>
            <div id="productos-comprados"></div>
            <button className="btn btn-primary" id="btn-resenar" style={{ marginTop: '20px' }}>Dejar Reseña</button>
        </div>
      </div>
    </div>
  );
}

export default App;
