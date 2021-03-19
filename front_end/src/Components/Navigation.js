import { Link } from "react-router-dom";
import "../App.css";

const Navigation = (props) => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Accomodation
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Link type="button" class="btn btn-outline-primary mr-3" to="/login">
          Login
        </Link>
        <Link
          type="button"
          class="btn btn-outline-primary mr-5"
          to="/registration"
        >
          Registration
        </Link>
        <Link to="/ownerprofile">
          <span class="material-icons iconfont">account_circle</span>
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
