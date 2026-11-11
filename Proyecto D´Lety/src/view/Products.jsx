import React from 'react';

const productos = [
  {
    id: 1,
    titulo: "Chorizo Artesanal",
    descripcion: "Sabor intenso y ahumado tradicional, ideal para la parrilla.",
    imagen: "/chorizos.jpg"
  },
  {
    id: 2,
    titulo: "Morcilla",
    descripcion: "Recetas tradicionales, nuestra morcilla destaca por su textura melosa y un equilibrio perfecto de especias seleccionadas.",
    imagen: "/images.jpg"
  },
  {
    id: 3,
    titulo: "Lasaña",
    descripcion: "\"Capas de puro sabor. Pasta tierna, carne seleccionada y delicioso queso fundido.",
    imagen: "/lasaña.avif"
  },
  {
    id: 4,
    titulo: "Tamalitos",
    descripcion: "Sabor auténtico en cada capa. Masa de maíz de textura sedosa, relleno abundante y el toque justo de sazón tradicional.",
    imagen: "/Tamales.jpg"
  },
  {
    id: 5,
    titulo: "Carnes",
    descripcion: "Llevamos lo mejor del campo a su mesa. Carne 100% fresca, seleccionada rigurosamente para asegurar cortes limpios, tiernos y con el aporte nutricional que su familia merece.",
    imagen: "/carnes.jpg"
  },
  {
    id: 6,
    titulo: "Embutidos",
    descripcion: "Sabor intenso, origen garantizado y curación perfecta.",
    imagen: "/Embutidos.jpg"
  }
];

export default function Products() {
  return (
    <section style={styles.section}>
      <h2 style={styles.mainTitle}>Nuestra Selección</h2>

      <div style={styles.grid}>
        {productos.map((item) => (
          <div key={item.id} style={styles.card}>
            <div style={styles.imageContainer}>
              <img src={item.imagen} alt={item.titulo} style={styles.image} />
            </div>
            <div style={styles.cardBody}>
              <h3 style={styles.cardTitle}>{item.titulo}</h3>
              <p style={styles.cardDescription}>{item.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#0d0d0d',
    minHeight: '100vh',
    paddingTop: '120px',
    paddingBottom: '60px',
    paddingLeft: '5%',
    paddingRight: '5%',
    fontFamily: 'system-ui, sans-serif',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  mainTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#ffffff',
    width: '100%',
    maxWidth: '1100px',
    textAlign: 'left'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', 
    gap: '24px',
    maxWidth: '1100px',
    width: '100%'
  },
  card: {
    backgroundColor: '#161616',
    borderRadius: '12px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #262626'
  },
  imageContainer: {
    width: '100%',
    height: '200px',
    backgroundColor: '#222'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  cardBody: {
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    flex: 1
  },
  cardTitle: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    margin: 0,
    color: '#ffffff'
  },
  cardDescription: {
    fontSize: '0.85rem',
    color: '#b0b0b0',
    lineHeight: '1.4',
    margin: 0
  }
};