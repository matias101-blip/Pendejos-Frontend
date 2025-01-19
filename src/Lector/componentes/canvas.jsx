import { useEffect, useRef, useState } from 'react';
import { Canvg, Scale } from 'canvg';

const Canvas = (props) => {
  const number = props.hojas;
  const name = props.nombre;
  const capitulo = props.capitulo;
  const canvasRef = useRef(null);
  const [svgW, setSvgW] = useState();

  useEffect(() => {
    const load = async () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      fetch(
        `http://34.58.10.132/img/${name}/${capitulo.replace('.', '-')}/${number}`,
      ).then(async (response) => {
        const svgData = await response.text();
        const parser = new DOMParser();
        const docSvg = parser.parseFromString(svgData, 'image/svg+xml');

        const svgElement = docSvg.querySelector('svg');

        const v = await Canvg.from(ctx, svgData);
        const widt = parseInt(svgElement.getAttribute('width'));
        const height = parseInt(svgElement.getAttribute('height'));
        if (height > widt) {
          setSvgW(widt * 0.65);
          v.resize(widt * 0.65, height * 0.65);
        } else {
          console.log(widt, height);
          setSvgW(widt * 0.5);
          v.resize(widt * 0.5, height * 0.5);
        }
        v.start();
      });
      // Renderizar el contenido SVG en el lienzo usando Canvg

      // Escalar el contenido del lienzo
    };

    load();
  }, [number]);

  return (
    <div className="pagina" style={{ width: `${svgW}px`, height: 'auto' }}>
      <canvas ref={canvasRef} style={{ padding: '0', border: '0' }} />
    </div>
  );
};

export default Canvas;
