import { useEffect, useRef, useState } from 'react';
import { Canvg, Scale } from 'canvg';

const Canvas = (props) => {
  const number = props.hojas;
  const name = props.nombre;
  const capitulo = props.capitulo;
  const canvasRef = useRef(null);

  useEffect(() => {
    const load = async () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      // Renderizar el contenido SVG en el lienzo usando Canvg
      const v = await Canvg.from(
        ctx,
        `http://localhost:8000/img/${name}/${capitulo}/${number}`,
      );
      v.start();

      // Escalar el contenido del lienzo
    };

    load();
  }, [number]);

  return <canvas className="Pag" ref={canvasRef} style={{}} />;
};

export default Canvas;
