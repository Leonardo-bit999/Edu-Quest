import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section py-5">
      <div className="container">
        <div className="row align-items-center min-vh-100 pt-5">
          <div className="col-lg-7 col-md-8">
            <div className="hero-content">
              <div className="badge bg-warning text-dark mb-4 px-3 py-2 rounded-pill">
                <i className="bi bi-star-fill me-2"></i>
                A Revolução na Educação Brasileira
              </div>
              
              <h1 className="display-3 fw-bold mb-4">
                Transforme a Educação em uma{' '}
                <span className="text-gradient">Aventura Épica!</span>
              </h1>
              
              <p className="lead mb-4 text-white-75">
                Uma plataforma gamificada que transforma o aprendizado em uma jornada 
                épica, onde cada aluno é o herói de sua própria história educacional.
              </p>
              
              <div className="hero-buttons">
                <button className="btn btn-warning btn-lg me-3 mb-3 px-4 py-3 rounded-pill">
                  <i className="bi bi-play-circle-fill me-2"></i>
                  Testar Protótipo
                </button>
                <button className="btn btn-outline-light btn-lg mb-3 px-4 py-3 rounded-pill">
                  <i className="bi bi-info-circle me-2"></i>
                  Quero Saber Mais
                </button>
              </div>
            </div>
          </div>
          
          <div className="col-lg-5 col-md-4 text-center">
            <div className="hero-character">
              <div className="character-circle">
                <i className="bi bi-person-arms-up character-icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

