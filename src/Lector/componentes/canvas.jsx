import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Layer, Stage, Image as KonvaImage } from 'react-konva';
import { isMobile } from 'react-device-detect';
import useImage from 'use-image';
import { Box, Spinner, Container, Center } from '@chakra-ui/react';

const Hoja = (props) => {
  const { index, capitulo, name, pagina, window, onLoad } = props;
  const [posX, setPosX] = useState(0);
  const [Image] = useImage(
    `https://pendejosapi.space/img/${name}/${capitulo}/${pagina}`,
  );
  console.log(`https://pendejosapi.space/img/${name}/${capitulo}/${pagina}`);
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
      onLoad({ w: newWidth, h: newHeight });
    }
  }, [Image]);
  return <KonvaImage image={Image} x={posX} />;
};

const Canvas = (props) => {
  const hojas = props.hojas;
  const name = props.nombre;
  const capitulo = props.capitulo;
  const [display, setDisplay] = useState({ w: 720, h: 1280 });
  const [imageSize, setImageSize] = useState([]);
  const [pags, setPags] = useState([]);
  const [indexPag, setIndexPag] = useState(0);
  const { ref, inView } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      addPage();
    }
  }, [inView]);

  useEffect(() => {
    if (isMobile) {
      setDisplay({ w: window.innerWidth, h: window.innerHeight });
    }
  }, []);
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
      {pags.map((pag) => {
        const size = imageSize[pag.pagina] || {
          w: display.w,
          h: display.h,
        };
        return (
          <Stage width={size.w} height={size.h}>
            <Layer listening={false}>
              <Hoja
                capitulo={capitulo}
                name={name}
                pagina={hojas[pag.pagina]}
                window={{ w: display.w, h: display.h }}
                onLoad={(sizeImage) => {
                  setImageSize((prev) => {
                    const newSizes = [...prev];
                    newSizes[pag.pagina] = sizeImage;
                    return newSizes;
                  });
                }}
              />
            </Layer>
          </Stage>
        );
      })}
      <Container alignContent="center" mt="2em">
        <Center>
          <Spinner
            size="xl"
            ref={ref}
            hidden={indexPag == hojas.length}
            color="orange.300"
          />
        </Center>
      </Container>
    </div>
  );
};

export default Canvas;
