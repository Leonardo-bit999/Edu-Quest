import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section py-5">
      <div className="container">
        <div className="row align-items-center min-vh-100 pt-5">
          <div className="col-lg-7 col-md-8">
            <div className="hero-content">
              <div className="badge bg-warning text-dark mb-4 px-3 py-2 rounded-pill animate-fade-in-up animate-delay-1 hidden-on-load">
                <i className="bi bi-star-fill me-2"></i>A Revolução na Educação
                Brasileira
              </div>

              <h1 className="display-3 fw-bold mb-4 animate-fade-in-up animate-delay-2 hidden-on-load">
                Transforme a Educação em uma{" "}
                <span className="text-gradient">Aventura Épica!</span>
              </h1>

              <p className="lead mb-4 text-white-75 animate-fade-in-up animate-delay-3 hidden-on-load">
                Uma plataforma gamificada que transforma o aprendizado em uma
                jornada épica, onde cada aluno é o herói de sua própria história
                educacional.
              </p>

              <div className="hero-buttons">
                <button className="btn btn-warning btn-lg me-3 mb-3 px-4 py-3 rounded-pill animate-fade-in-up animate-delay-4 animate-pulse hidden-on-load">
                  <i className="bi bi-play-circle-fill me-2"></i>
                  Testar Protótipo
                </button>
                <button className="btn btn-outline-light btn-lg mb-3 px-4 py-3 rounded-pill animate-fade-in-up animate-delay-5 hidden-on-load">
                  <i className="bi bi-info-circle me-2"></i>
                  Quero Saber Mais
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

