import React, { useState } from 'react';
import '../css/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [modalContent, setModalContent] = useState(null);

  const legalTexts = {
    terminos: {
      title: 'Términos y Condiciones',
      sections: [
        {
          heading: '1. Pedidos y Cotizaciones',
          text: 'Los pedidos al por mayor y solicitudes especiales deben realizarse con anticipación a través de nuestros canales oficiales. Toda cotización está sujeta a disponibilidad de producción y confirmación de pago.'
        },
        {
          heading: '2. Horarios y Entregas',
          text: 'Nuestro horario de atención y despacho en planta es de lunes a sábado de 8:00 AM a 6:00 PM. Los tiempos de entrega varían según la ubicación y el volumen del pedido.'
        },
        {
          heading: '3. Política de Cambios en Alimentos',
          text: 'Por tratarse de productos alimenticios perecederos, no se aceptan devoluciones una vez recibido el producto a satisfacción, salvo por defectos comprobables de calidad o empaque reportados el mismo día de la entrega.'
        },
        {
          heading: '4. Protección de Datos Personales',
          text: 'De conformidad con la Ley 1581 de 2012, los datos suministrados en nuestros formularios serán utilizados exclusivamente para dar respuesta a sus solicitudes y gestionar sus pedidos.'
        }
      ]
    },
    calidad: {
      title: 'Políticas de Calidad',
      sections: [
        {
          heading: 'Nuestro Compromiso',
          text: 'En La Cocina de Doña Lety trabajamos bajo la tradición artesanal combinada con estrictos estándares de higiene e inocuidad alimentaria para garantizar productos seguros, frescos y de excelente sabor.'
        },
        {
          heading: 'Buenas Prácticas de Manufactura (BPM)',
          text: 'Toda nuestra planta de producción opera cumpliendo protocolos rigurosos de limpieza, desinfección, manipulación de alimentos y control de procesos.'
        },
        {
          heading: 'Selección de Ingredientes',
          text: 'Seleccionamos materias primas frescas y proveedores confiables para asegurar la consistencia y calidad en cada lote producido.'
        },
        {
          heading: 'Satisfacción del Cliente',
          text: 'Mantenemos canales abiertos de comunicación para escuchar a nuestros clientes y puntos autorizados, asegurando la mejora continua de nuestros productos.'
        }
      ]
    }
  };

  return (
    <>
      <footer className="footer-container">
        <div className="footer-features">
          <div className="feature-item">
            <span className="feature-icon"></span>
            <div>
              <h4>Ingredientes Naturales</h4>
              <p>100% orgánicos y seleccionados</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon"></span>
            <div>
              <h4>Calidad Garantizada</h4>
              <p>Sabor auténtico en cada producto</p>
            </div>
          </div>
          <div className="feature-item">
            <span className="feature-icon"></span>
            <div>
              <h4>Envíos Frescos</h4>
              <p>Directo a tu mesa con la máxima frescura</p>
            </div>
          </div>
        </div>

        {/* Sección principal de contenido */}
        <div className="footer-content">
          {/* Columna 1: Marca & Descripción */}
          <div className="footer-brand">
            <h2 className="brand-title">La Cocina de Doña Lety
              <br />
              <span>Tradicion artesanal</span></h2>
            <p className="brand-description">
              Nos apasiona llevar los mejores sabores y la más alta calidad a tu mesa. Alimentos frescos creados con dedicación y tradición.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="footer-links-col">
            <h3>Navegación</h3>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/products">Nuestros Productos</Link></li>
              <li><Link to="/we">Sobre Nosotros</Link></li>
            </ul>
          </div>

          {/* Columna 3: Información Legal / Ayuda */}
          <div className="footer-links-col">
            <h3>Atención al Cliente</h3>
            <ul>
              <li><Link to="/contact">Contacto</Link></li>
              <li>
                <button 
                  onClick={() => setModalContent(legalTexts.calidad)} 
                  className="footer-link-btn"
                >
                  Políticas de Calidad
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setModalContent(legalTexts.terminos)} 
                  className="footer-link-btn"
                >
                  Términos y Condiciones
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 4: Redes & Contacto */}
          <div className="footer-social-col">
            <h3>Síguenos</h3>
            <p className="contact-info"> Santa Rosa de Osos</p>
            <p className="contact-info"> +57 321 503 4123</p>
            <p className="contact-info"> +57 320 609 9520</p>
            <div className="social-links">
              <a href="https://www.instagram.com/lacocinadedonalety?igsh=dzZ5bXpyZGtqcWtl" aria-label="Instagram" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.facebook.com/share/1Eu6oxVv9i/" aria-label="Facebook" target="_blank" rel="noreferrer">Facebook</a>
              <a href="#whatsapp" aria-label="WhatsApp">WhatsApp</a>
            </div>
          </div>
        </div>

        {/* Sección inferior: Derechos de autor */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} La Cocina de Doña Lety. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* VENTANA MODAL (mantiene los estilos limpios en JS) */}
      {modalContent && (
        <div style={styles.overlay} onClick={() => setModalContent(null)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>{modalContent.title}</h2>
              <button
                onClick={() => setModalContent(null)}
                style={styles.closeBtn}
              >
                ✕
              </button>
            </div>

            <div style={styles.modalBody}>
              {modalContent.sections.map((sec, index) => (
                <div key={index} style={styles.sectionBlock}>
                  <h4 style={styles.sectionHeading}>{sec.heading}</h4>
                  <p style={styles.sectionText}>{sec.text}</p>
                </div>
              ))}
            </div>

            <div style={styles.modalFooter}>
              <button
                onClick={() => setModalContent(null)}
                style={styles.acceptBtn}
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

/* Estilos exclusivamente para la ventana modal emergente */
const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    padding: '20px',
    boxSizing: 'border-box'
  },
  modal: {
    backgroundColor: '#121212',
    border: '1px solid #2a2a2a',
    borderRadius: '14px',
    maxWidth: '600px',
    width: '100%',
    maxHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    color: '#ffffff',
    boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
  },
  modalHeader: {
    padding: '20px 24px',
    borderBottom: '1px solid #222',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  modalTitle: {
    margin: 0,
    color: '#d32f2f',
    fontSize: '1.3rem',
    fontWeight: 'bold'
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    color: '#b0b0b0',
    fontSize: '1.2rem',
    cursor: 'pointer'
  },
  modalBody: {
    padding: '24px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  sectionBlock: {
    textAlign: 'left'
  },
  sectionHeading: {
    color: '#ffffff',
    fontSize: '0.95rem',
    margin: '0 0 6px 0',
    fontWeight: 'bold'
  },
  sectionText: {
    color: '#a0a0a0',
    fontSize: '0.88rem',
    lineHeight: '1.5',
    margin: 0
  },
  modalFooter: {
    padding: '16px 24px',
    borderTop: '1px solid #222',
    textAlign: 'right'
  },
  acceptBtn: {
    backgroundColor: '#d32f2f',
    color: '#ffffff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '0.88rem',
    transition: 'background-color 0.2s'
  }
};

export default Footer;