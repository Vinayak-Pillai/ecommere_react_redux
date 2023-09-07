import React from "react";
// import routes from "../utils/navRoutes";
import { Link } from "react-router-dom";

const Header = ({ routes }) => {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-between bg-light p-2">
        <div>
          <p className="fw-bold">E-Commerce</p>
        </div>
        <div className="d-flex">
          {routes.map((route) => {
            return (
              <div key={route.id}>
                <Link
                  to={route.path}
                  className="text-decoration-none text-dark"
                >
                  <p className="mx-2">{route.name}</p>
                </Link>
              </div>
            );
          })}
          <p className="mx-2">Cart 2</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
