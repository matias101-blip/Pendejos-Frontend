import { useEffect, useState, createContext, useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import { Layer, Stage, Image as KonvaImage } from 'react-konva';
import { isMobile } from 'react-device-detect';
import useImage from 'use-image';
import { Box, Spinner, Container, Center } from '@chakra-ui/react';
const Hoja = (props) => {
  const { index, capitulo, name, pagina, window } = props;
  const [posX, setPosX] = useState(0);

  const [Image] = useImage(
    `https://pendejosapi.space/img/${name}/${capitulo}/${pagina}-webp`,
  );
  useEffect(() => {
    if (Image) {
      const ImageWOrg = Image.width;
      const ImageHOrg = Image.height;
      const hRatio = window.w / ImageWOrg;
      const vRatio = window.h / ImageHOrg;

      console.log(window.h);
      const ratio = Math.min(hRatio, vRatio);
      const newWidth = ImageWOrg * ratio;
      const newHeight = ImageHOrg * ratio;

      Image.width = newWidth;
      Image.height = newHeight;
      console.log(`${Image.width}:${Image.height}`);

      setPosX((window.w - newWidth) / 2);
    }
  }, [Image]);

  return <KonvaImage image={Image} x={posX} />;
};

const Canvas = (props) => {
  const hojas = props.hojas;
  const name = props.nombre;
  const capitulo = props.capitulo;
  const [loadImages, setLoadImages] = useState(0);
  const [imageHeights, setImageHeights] = useState([]);
  const [pags, setPags] = useState([]);
  const [indexPag, setIndexPag] = useState(0);
  const [sizeWindow, setSizeWindow] = useState({
    w: window.innerWidth,
    h: 0,
  });

  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      addPage();
    }
  }, [inView]);

  const addPage = () => {
    setPags((prevPags) => [
      ...prevPags,
      {
        id: `pags-${indexPag}`,
        pagina: indexPag,
      },
    ]);
    setIndexPag(indexPag + 1);
  };

  return (
    <div>
      {pags.map((pag) => (
        <Stage width={720} height={1080}>
          <Layer listening={false}>
            <Hoja
              capitulo={capitulo}
              name={name}
              pagina={pag.pagina}
              window={{ w: 720, h: 1080 }}
            />
          </Layer>
        </Stage>
      ))}
      <Container
        alignContent="center"
        ref={ref}
        hidden={indexPag == hojas.length}
      >
        <Center>
          <Spinner size="xl" />
        </Center>
      </Container>
    </div>
  );
};

export default Canvas;
