import { Link } from "react-router-dom";
import styles from "./Landing.module.css";
const images = [
  '/PT Sans.jpg',

];

export default function Landing() {
  return (
    <div>
      <header>
        <nav className={styles.navegacion}>
          <div className={styles.navegacion_izquierda}>
            <img src="/Logo.png" alt="Logo" className={styles.logo} />
            <div className={styles.navegacion_menu}>
              <p>Inicio</p>
              <p>Nosotros</p>
              <p>Instalaciones</p>
              <p>Contacto</p>
            </div>
          </div>
          <Link to="/cliente">
            <button className={styles.navegacion_boton_realizar_pedido}>
              Realizar Pedido
            </button>
          </Link>
        </nav>
      </header>
      <main>

        <div className={styles.banner}>
          <img src="/fondo_registro.png" alt="Imagen hamburguesa" />
          <div className={styles.banner_texto}>
            <p>DESARROLLAMOS LA FÓRMULA</p>
            <br />
            <br />
            <br />
            <br />
            <p>A LA QUE NO TE PODRÁS RESISTIR</p>
          </div>

          <section className={styles.seccionNosotros}>
            <div className={styles.seccionNosotros_texto}>
              <p>En FoodLab creemos que la buena comida <br />
                no solo se cocina… ¡se formula! Somos <br />
                un restaurante
                de comida rápida donde cada <br />
                bocado es el resultado de una receta <br />
                precisa: sabor, calidad y rapidez<br />
                en la medida perfecta.</p>
              <br />
              <br />
              <p>Inspirados en la creatividad de un <br />
                laboratorio, combinamos ingredientes <br />
                frescos, técnicas innovadoras y un toque de <br />
                locura culinaria para sorprenderte en cada <br />
                visita.Nuestro objetivo es simple: que <br />
                disfrutes de tu comida favorita con la <br />
                fórmula que siempre funciona — rápida,<br />
                deliciosa y con un estilo único.</p>
            </div>
            <div className={styles.seccionNosotros_imagen}>
              <img src="/pexels-valeriya-1639562.jpg" alt="Fondo nosotros" />
            </div>
          </section >


          <section className={styles.carousel}>
            <button className={styles.arrowLeft}>«</button>

            <div className={styles.container}>
              <div className={`${styles.item} ${styles.center}`}>
                <img src="/PT Sans.png" alt="Instalación" />
              </div>
            </div>

            <button className={styles.arrowRight}>»</button>
          </section>

        </div>
      </main >
    </div >
  );
}
