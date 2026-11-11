import React from 'react'
import '../css/Style.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section className="hero-container">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h4 className="hero-subtitle">SABOR AUTÉNTICO</h4>
          <h1 className="hero-title">
            Disfruta de un sabor <br />
            diferente con <span>Doña Lety</span>
          </h1>

          <p className="hero-description">
            Embutidos artesanales elaborados con procesos tradicionales
            y la mejor selección de carne.
          </p>

          <Link to="/products">
            <button className="btn-ver-productos">VER PRODUCTOS</button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home