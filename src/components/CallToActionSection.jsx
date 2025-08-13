import React from 'react';

const CallToActionSection = () => {
  return (
    <section className="cta-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="cta-content text-white">
              <div className="mb-4">
                <i className="bi bi-rocket-takeoff-fill display-2 text-warning"></i>
              </div>
              
              <h2 className="display-4 fw-bold mb-4">
                Junte-se à Revolução da Aprendizagem!
              </h2>
              
              <p className="lead mb-4 opacity-90">
                Não deixe seus alunos ficarem para trás! Transforme sua sala de aula 
                em um mundo de aventuras épicas onde cada lição é uma conquista 
                e cada aluno é o herói de sua própria jornada educacional.
              </p>
              
              <div className="cta-stats mb-5">
                <div className="row text-center">
                  <div className="col-md-4 mb-3">
                    <div className="stat-item">
                      <h3 className="display-6 fw-bold text-warning">10.000+</h3>
                      <p className="mb-0">Alunos Transformados</p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="stat-item">
                      <h3 className="display-6 fw-bold text-warning">500+</h3>
                      <p className="mb-0">Escolas Parceiras</p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="stat-item">
                      <h3 className="display-6 fw-bold text-warning">89%</h3>
                      <p className="mb-0">Melhoria no Engajamento</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="cta-buttons">
                <button className="btn btn-warning btn-lg me-3 mb-3 px-5 py-3 rounded-pill shadow-lg">
                  <i className="bi bi-play-circle-fill me-2"></i>
                  <span className="fw-bold">Iniciar Aventura</span>
                </button>
                <button className="btn btn-outline-light btn-lg mb-3 px-5 py-3 rounded-pill">
                  <i className="bi bi-calendar-check me-2"></i>
                  Agendar Demonstração
                </button>
              </div>
              
              <div className="cta-guarantee mt-4">
                <div className="alert alert-warning bg-warning bg-opacity-20 border-warning text-white">
                  <i className="bi bi-shield-check-fill me-2"></i>
                  <strong>Garantia de 30 dias</strong> - Se não ficar satisfeito, devolvemos 100% do seu investimento!
                </div>
              </div>
              
              <div className="cta-urgency mt-4">
                <p className="mb-0 opacity-75">
                  <i className="bi bi-clock-fill me-2 text-warning"></i>
                  Oferta especial para as primeiras <strong>100 escolas</strong> - 
                  <span className="text-warning fw-bold"> 50% de desconto no primeiro ano!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;

