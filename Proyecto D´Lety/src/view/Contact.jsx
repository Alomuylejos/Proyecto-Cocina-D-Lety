import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensaje enviado con éxito');
  };

  return (
    <div style={styles.container}>
      <div style={styles.twoColumnsWrapper}>
        
        {/* COLUMNA IZQUIERDA: DÓNDE ENCONTRARNOS + UBICACIÓN */}
        <div style={styles.leftColumn}>
          <section style={styles.sectionLeft}>
            <h2 style={styles.sectionTitle}>¿Dónde encontrarnos?</h2>
            <p style={styles.subtitle}>
              Visítanos en nuestra planta de producción o en nuestros puntos autorizados.
            </p>

            <div style={styles.cardsContainer}>
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>LOCALIDAD:</h3>
                <p style={styles.cardText}>Barrio Arenales CR 27 CL 23-17</p>
              </div>

              <div style={styles.card}>
                <h3 style={styles.cardTitle}>HORARIOS:</h3>
                <p style={styles.cardText}>Lunes a Sábado: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </section>

          <section style={styles.locationGrid}>
            <div style={styles.locationInfo}>
              <h2 style={styles.locationTitle}>Ubicación</h2>
              <p style={styles.locationText}>
                Encuéntranos fácilmente desde cualquier punto de la ciudad.
              </p>
              <a
                href="https://maps.google.com/?q=Santa+Rosa+de+Osos,+Antioquia"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.mapBtn}
              >
                Abrir en Google Maps
              </a>
            </div>

            <div style={styles.mapContainer}>
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.858273648118!2d-75.46369062500645!3d6.54084539345209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442fae9ed4bbcd%3A0x8e0df0777bf82aa0!2sSanta%20Rosa%20de%20Osos%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1710000000000!5m2!1ses!2sco"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>
        </div>

        {/* COLUMNA DERECHA: FORMULARIO HAZ TU PEDIDO */}
        <div style={styles.rightColumn}>
          <section style={styles.formBox}>
            <h1 style={styles.mainTitle}>Haz tu pedido</h1>
            <p style={styles.subtitle}>
              Escríbenos para cotizaciones al por mayor o pedidos especiales.
            </p>

            <form onSubmit={handleSubmit} style={styles.form}>
              <input
                type="text"
                name="nombre"
                placeholder="Tu Nombre"
                value={formData.nombre}
                onChange={handleChange}
                style={styles.input}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Correo Electrónico"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                required
              />
              <textarea
                name="mensaje"
                placeholder="¿En qué podemos ayudarte?"
                value={formData.mensaje}
                onChange={handleChange}
                rows="6"
                style={styles.textarea}
                required
              />
              <button type="submit" style={styles.submitBtn}>
                Enviar Mensaje
              </button>
            </form>
          </section>
        </div>

      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#0d0d0d',
    color: '#ffffff',
    minHeight: '100vh',
    padding: '80px 20px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  twoColumnsWrapper: {
    width: '100%',
    maxWidth: '1350px', // Ampliado para aprovechar mejor el ancho de la pantalla
    display: 'grid',
    gridTemplateColumns: '1.1fr 0.9fr', // Distribución equilibrada
    gap: '40px',
    alignItems: 'center', // Centra ambas columnas verticalmente
    margin: '0 auto'
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    width: '100%'
  },
  rightColumn: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  sectionLeft: {
    width: '100%',
    textAlign: 'left'
  },
  formBox: {
    backgroundColor: '#121212',
    border: '1px solid #222222',
    borderRadius: '14px',
    padding: '40px',
    textAlign: 'center',
    width: '100%',
    boxSizing: 'border-box'
  },
  mainTitle: {
    color: '#ff3b25',
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '8px'
  },
  sectionTitle: {
    color: '#ff3b25',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '8px'
  },
  subtitle: {
    color: '#b0b0b0',
    fontSize: '0.9rem',
    marginBottom: '24px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    textAlign: 'left'
  },
  input: {
    backgroundColor: '#181818',
    border: '1px solid #2a2a2a',
    borderRadius: '8px',
    padding: '14px',
    color: '#ffffff',
    fontSize: '0.9rem',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box'
  },
  textarea: {
    backgroundColor: '#181818',
    border: '1px solid #2a2a2a',
    borderRadius: '8px',
    padding: '14px',
    color: '#ffffff',
    fontSize: '0.9rem',
    outline: 'none',
    resize: 'vertical',
    width: '100%',
    boxSizing: 'border-box'
  },
  submitBtn: {
    backgroundColor: '#181818',
    border: '1px solid #ffffff',
    color: '#ffffff',
    padding: '14px',
    borderRadius: '8px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px',
    width: '100%'
  },
  cardsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px'
  },
  card: {
    backgroundColor: '#141414',
    border: '1px solid #2b1d1d',
    borderRadius: '12px',
    padding: '20px',
    textAlign: 'center'
  },
  cardTitle: {
    color: '#ff3b25',
    fontSize: '0.85rem',
    letterSpacing: '1px',
    marginBottom: '8px'
  },
  cardText: {
    color: '#ffffff',
    fontSize: '0.9rem',
    fontWeight: '500',
    margin: 0
  },
  locationGrid: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1.2fr',
    gap: '20px',
    alignItems: 'center',
    backgroundColor: '#121212',
    border: '1px solid #222222',
    borderRadius: '14px',
    padding: '24px',
    boxSizing: 'border-box'
  },
  locationInfo: {
    textAlign: 'left'
  },
  locationTitle: {
    color: '#ff3b25',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px'
  },
  locationText: {
    color: '#b0b0b0',
    fontSize: '0.88rem',
    marginBottom: '20px'
  },
  mapBtn: {
    display: 'inline-block',
    border: '1px solid #ff3b25',
    color: '#ff3b25',
    padding: '10px 16px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontSize: '0.85rem',
    fontWeight: 'bold'
  },
  mapContainer: {
    width: '100%',
    borderRadius: '12px',
    overflow: 'hidden'
  }
};