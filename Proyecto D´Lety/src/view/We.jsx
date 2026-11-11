import React from 'react';
import '../css/We.css';

const We = () => {
  return (
    <section className="nosotros-container" id="we">
      <div className="nosotros-wrapper">

        {/* Imagen / Collage de la marca */}
        <div className="nosotros-image-container">
          <div className="image-card main-img">
            <div className="img-placeholder">
              <span>Pasión por el Sabor</span>
              <img src="/nosotros.jpg" />
            </div>
          </div>
          <div className="experience-badge">
            <span className="badge-number">10+</span>
            <span className="badge-text">Años de Tradición</span>
          </div>
        </div>

        {/* Contenido de Texto */}
        <div className="nosotros-content">
          <span className="nosotros-subtitle">NUESTRA HISTORIA</span>
          <h2 className="nosotros-title">
            Pasión por la comida <span>artesanal y auténtica</span>
          </h2>
          <p className="nosotros-description">
            En <strong>La cocina de D´Lety</strong>, creemos que la buena comida une a las personas.
            Comenzamos con una cocina pequeña y el sueño de llevar productos con ingredientes
            100% naturales, seleccionados a mano y elaborados con recetas tradicionales directamente a tu mesa.
          </p>

          {/* Tarjetas de Puntos Clave */}
          <div className="nosotros-features">
            <div className="feature-card">
              <div>
                <h4>Ingredientes Orgánicos</h4>
                <p>Sin conservadores artificiales ni saborizantes.</p>
              </div>
            </div>

            <div className="feature-card">
              <div>
                <h4>Proceso Artesanal</h4>
                <p>Cuidado en cada detalle del proceso de producción.</p>
              </div>
            </div>
          </div>

          <button className="nosotros-btn">Descubrir Más</button>
        </div>

      </div>
    </section>
  );
};

export default We;