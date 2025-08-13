import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold text-primary" href="#">
          <i className="bi bi-shield-fill-check me-2"></i>
          RPG Realms Of The Unplugged
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#como-funciona">
                Como Funciona
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#missoes">
                Missões
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#herois">
                Heróis
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link btn btn-outline-primary px-3 ms-2"
                href="#contato"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

