import { useNavigate, Link } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();

  let userRole = localStorage.getItem("userRole");

  const handleSubmit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid3">
            <a className="navbar-brand" href="/">
              Home
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                {/* Traveler pages */}
                <a
                  style={{
                    display: userRole === "Traveler" ? "flex" : "none",
                    textDecoration: "none",
                  }}
                  className="sidebarListItem"
                  aria-current="page"
                  href="/"
                >
                 
                </a>
                <a
                  style={{
                    display: userRole === "Traveler" ? "flex" : "none",
                    textDecoration: "none",
                  }}
                  className="sidebarListItem"
                  href="/"
                  aria-current="page"
                >
                  aaa
                </a>
                <a
                  style={{
                    display: userRole === "Traveler" ? "flex" : "none",
                    textDecoration: "none",
                  }}
                  className="sidebarListItem"
                  aria-current="page"
                  href="/"
                >
                  bbbb
                </a>

                {/*   back office */}
                <a
                  style={{
                    display: userRole === "BackOffice" ? "flex" : "none",
                    textDecoration: "none",
                  }}
                  className="sidebarListItem"
                  href="/"
                  aria-current="page"
                >
                  vvv
                </a>
                <a
                  style={{
                    display: userRole === "Backoffice" ? "flex" : "none",
                    textDecoration: "none",
                  }}
                  className="sidebarListItem"
                  href="/"
                  aria-current="page"
                >
                  ddddddd
                </a>
                <a
                  style={{
                    display: userRole === "Backoffice" ? "flex" : "none",
                    textDecoration: "none",
                  }}
                  className="sidebarListItem"
                  href="/"
                  aria-current="page"
                >
                  eeeeee
                </a>
                <a
                  style={{
                    display: userRole === "Backoffice" ? "flex" : "none",
                    textDecoration: "none",
                  }}
                  className="sidebarListItem"
                  href="/"
                  aria-current="page"
                >
                  ffffff
                </a>
                <a
                  style={{
                    display: userRole === "Backoffice" ? "flex" : "none",
                    textDecoration: "none",
                  }}
                  className="sidebarListItem"
                  href="/"
                  aria-current="page"
                >
                  iiiiiiiiii
                </a>
                <a
                  style={{
                    display: userRole === "Backoffice" ? "flex" : "none",
                    textDecoration: "none",
                  }}
                  className="sidebarListItem"
                  href="/"
                  aria-current="page"
                >
                  kkkkkk
                </a>
                

                {/*Travel Agent pages*/}
                <a
                  style={{
                    display: userRole === "TravelAgent" ? "flex" : "none",
                    textDecoration: "none",
                  }}
                  className="sidebarListItem"
                  href="/"
                  aria-current="page"
                >
                  ggg
                </a>
               
              </div>
            </div>
          </div>
          <Link to="/userprofile">
            <button
              className="btn btn-secondary"
              type="submit"
              style={{
                float: "right",
                display: userRole ? "flex" : "none",
                textDecoration: "none",
              }}
            >
              Profile
            </button>
          </Link>
          <button
            onClick={handleSubmit}
            className="btn btn-primary"
            type="submit"
            style={{
              float: "right",
              marginRight: "10px",
              display: userRole ? "flex" : "none",
            }}
          >
            {"Logout"}
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
