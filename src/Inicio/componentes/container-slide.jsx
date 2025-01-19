import '../styles/container-slide.css';

function ContainerSlide(props) {
  const { nombre, portada, resumen } = props.proyectos;
  var nameCode = encodeURIComponent(nombre);
  const fondo_img = {
    backgroundImage: `url(https://pendejosapi.space/img/${nameCode}/${portada})`,
    backgroundSize: 'cover',
    color: '#363435',
  };
  return (
    <div className="Slider">
      <div className="container-slide" style={fondo_img}>
        <div className="container-opacity">
          <div className="portada-slide">
            <img
              src={`https://pendejosapi.space/img/${nombre}/${portada}`}
              alt=""
            />
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
