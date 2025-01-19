import { Link, useParams } from 'react-router-dom';
let ToolBar = (props) => {
  let caps = JSON.parse(props.caps);
  let { nombre, cap } = useParams();
  cap = Number(cap);
  return (
    <div className="Bar">
      <ul>
        <li>
          <Link to="/">
            <button>
              <span>Inicio</span>
            </button>
          </Link>
        </li>
        {caps.indexOf(parseFloat(cap)) != 0 && (
          <Link to={`/${nombre}/${caps[caps.indexOf(cap) - 1]}`}>
            <li>
              <button>
                <span>Prev</span>
              </button>
            </li>
          </Link>
        )}
        <li>
          <button>
            <span>Caps</span>
          </button>
        </li>
        {caps.indexOf(cap) != caps.indexOf(caps[caps.length - 1]) && (
          <Link to={`/${nombre}/${caps[caps.indexOf(cap) + 1]}`}>
            <li>
              <button>
                <span>Next</span>
              </button>
            </li>
          </Link>
        )}
      </ul>
    </div>
  );
};
export default ToolBar;
