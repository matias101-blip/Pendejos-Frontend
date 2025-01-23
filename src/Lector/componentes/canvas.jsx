import { useEffect, useRef, useState } from 'react';
import { Canvg } from 'canvg';
import { Box } from '@chakra-ui/react';
import { Layer, Stage, Image as KonvaImage } from 'react-konva';
import useImage from 'use-image';

const Canvas = (props) => {
  const hojas = props.hojas;
  const name = props.nombre;
  const capitulo = props.capitulo;
  const [image, setImage] = useState(null);
  const [ImageL] = useImage(image);
  useEffect(() => {
    const loadImage = async () => {
      let v = null;
      let Canvas = document.createElement('canvas');
      const context = Canvas.getContext('2d');
      const responseSvg = await fetch(
        'https://pendejosapi.space/img/Maria no Danzai/1/3',
      );
      const Svgdata = await responseSvg.text();
      v = await Canvg.from(context, Svgdata);
      v.start();
      setImage(Canvas.toDataURL());
    };
    loadImage();
  }, [hojas]);
  return (
    <Stage width={(window, innerWidth)} height={window.innerHeight}>
      <Layer>
        <KonvaImage image={ImageL} />
      </Layer>
    </Stage>
  );
};
export default Canvas;
