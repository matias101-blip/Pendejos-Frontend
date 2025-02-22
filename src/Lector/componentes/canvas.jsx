import { useEffect, useState, createContext, useContext } from 'react';
import { Layer, Stage, Image as KonvaImage } from 'react-konva';
import { isMobile } from 'react-device-detect';
import useImage from 'use-image';

const CtxHojas = createContext();

const Hoja = (props) => {
  const { index, capitulo, name, pagina, window, PoscY, onLoad } = props;
  const [posX, setPosX] = useState(0);
  const { sizeWindow, setSizeWindow } = useContext(CtxHojas);

  const [Image] = useImage(
    `https://pendejosapi.space/img/${name}/${capitulo}/${pagina}-webp`,
  );
  useEffect(() => {
    if (Image) {
      const ImageWOrg = Image.width;
      const ImageHOrg = Image.height;
      const hRatio = window.w / ImageWOrg;
      const vRatio = 1080 / ImageHOrg;

      const ratio = Math.min(hRatio, vRatio);
      const newWidth = ImageWOrg * ratio;
      const newHeight = ImageHOrg * ratio;

      Image.width = newWidth;
      Image.height = newHeight;

      setPosX((window.w - newWidth) / 2);

      setSizeWindow((prev) => ({
        ...prev,
        h: prev.h + newHeight,
      }));

      onLoad(newHeight); // Pasa la altura de la imagen al callback
    }
  }, [Image]);

  return <KonvaImage image={Image} x={posX} y={PoscY} />;
};

const Canvas = (props, { children }) => {
  const hojas = props.hojas;
  const name = props.nombre;
  const capitulo = props.capitulo;
  const [loadImages, setLoadImages] = useState(0);
  const [imageHeights, setImageHeights] = useState([]);
  const [pags, setPags] = useState([]);

  const [sizeWindow, setSizeWindow] = useState({
    w: window.innerWidth,
    h: 0,
  });

  useEffect(() => {
    if (!isMobile) {
      setSizeWindow((prev) => ({
        ...prev,
        w: 1024,
      }));
    }
  }, []);
  const addPage = () => {
    setPags((prevPags) => [
      ...prevPags,
      <Hoja
        id={prevPags.length + 1}
        key={prevPags.length}
        capitulo={3}
        name={name}
        pagina={1}
        window={{ w: sizeWindow.w, h: sizeWindow.h }}
        PoscY={imageHeights}
        onLoad={(height) => {
          setImageHeights((prev) => [...prev, height]); // Guarda la altura de la imagen
          setLoadImages((prev) => prev + 1);
        }}
      />,
    ]);
  };
  return (
    <div>
      <Stage width={sizeWindow.w} height={sizeWindow.h}>
        <Layer listening={false}>
          <CtxHojas.Provider
            value={{ sizeWindow, setSizeWindow, setImageHeights }}
          >
            {pags}
          </CtxHojas.Provider>
        </Layer>
      </Stage>
      <button onClick={addPage}>Dame click!!</button>
    </div>
  );
};

export default Canvas;
