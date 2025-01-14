import { Link, useParams } from 'react-router-dom';
let ToolBar = (props) => {
  let caps = props.caps;
  let { nombre, cap } = useParams();
  return (
    <div className="Bar">
      <ul>
        <li>
          <Link to="/Inicio">
            <button>
              <span>Inicio</span>
            </button>
          </Link>
        </li>
        {cap > caps[0] && (
          <Link to={`/${nombre}/${cap - 1}`}>
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
        {cap < caps[caps.length - 1] && (
          <Link to={`/${nombre}/${Number(cap) + 1}`}>
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
