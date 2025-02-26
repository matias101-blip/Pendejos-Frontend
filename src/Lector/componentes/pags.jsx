import { useEffect, useState, useContext } from 'react';
import { Image as KonvaImage } from 'react-konva';
import useImage from 'use-image';

const Hoja = (props) => {
  const hoja = {
    name: props.name,
    capitulo: props.capitulo,
    pagina: props.pagina,
  };

  const valorInicial = props.valorInicial;
  const index = props.index;
  const { posImg, setPosImg } = useContext(PosImg);
  const [posY, setPosY] = useState(0);

  const windowR = {
    w: props.windowW,
    h: props.windowH,
  };

  const [posx, setPosx] = useState(0);
  const [Image] = useImage(
    `https://pendejosapi.space/img/${hoja.name}/${hoja.capitulo}/${hoja.pagina}-webp`,
  );

  useEffect(() => {
    if (Image) {
      const orgW = Image.width;
      const orgH = Image.height;
      const hRation = windowR.w / orgW;
      const vRation = Image.height / orgH;
      const ration = Math.min(hRation, vRation);
      Image.width = orgW * ration;
      Image.height = orgH * ration;
      props.updateSizeWindow(Image.height);
      const ofX = (windowR.w - Image.width) / 2;
      const offsetY = valorInicial + index * (orgH * ration);
      setPosx(ofX);
      setPosY(offsetY);
      props.updatePosImg(10); // Asegúrate de que este valor tenga sentido
    }
  }, [Image]);

  return <KonvaImage image={Image} x={posx} y={posY} />;
};

export default Hoja;
