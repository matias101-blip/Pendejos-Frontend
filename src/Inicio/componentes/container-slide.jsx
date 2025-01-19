import '../styles/container-slide.css';

function ContainerSlide(props) {
  const { nombre, portada, resumen } = props.proyectos;

  const fondo_img = {
    backgroundImage: `url(http://34.58.10.132/img/Aizawa Koharu tiene prisa por morir/portada-png)`,
    backgroundSize: 'cover',
    color: '#363435',
  };
  return (
    <div className="Slider">
      <div className="container-slide" style={fondo_img}>
        <div className="container-opacity">
          <div className="portada-slide">
            <img src={`http://34.58.10.132/img/${nombre}/${portada}`} alt="" />
          </div>
          <div className="info-slide">
            <div className="Titulo-slide">
              <h2>{nombre}</h2>
            </div>
            <div className="Resumen-slide">
              <p>{resumen}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContainerSlide;
