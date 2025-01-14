import '../styles/noticias.css';

function Noticias() {
  return (
    <div className="news">
      <img
        className="port_news"
        src="/img/portada_kimetsu-357.jpg"
        alt="port_news"
      />
      <div className="info_news">
        <h3>Kimetsu no Yaiba: ‘Rengoku’ es arrestado en Japón</h3>
        <p>
          Un conocido YouTuber japonés, Kazuaki Sugita, de 40 años, conocido en
          línea como “Rengoku......
        </p>
        <button type="button">Leer noticas</button>
      </div>
    </div>
  );
}

export default Noticias;
