import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light mt-3 mb-3">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active text-dark" to={`/`}>
              Todos
            </Link>
            <Link className="nav-link active text-dark" to={`/servicio/autos`}>
              Autos
            </Link>
            <Link className="nav-link active text-dark" to={`/servicio/salud`}>
              Salud
            </Link>
            <Link className="nav-link active text-dark" to={`/servicio/hogar`}>
              Hogar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
