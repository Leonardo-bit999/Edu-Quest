import React from "react";

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
                Não deixe seus alunos ficarem para trás! Transforme sua sala de
                aula em um mundo de aventuras épicas, onde cada lição é uma
                conquista e cada aluno é o herói de sua própria jornada
                educacional.
              </p>

              {/* Benefícios no lugar de números */}
              <div className="cta-stats mb-5">
                <div className="row text-center">
                  {[
                    {
                      icon: "🎮",
                      title: "Aprendizado Gamificado",
                      desc: "Missões, recompensas e aventuras para manter a motivação sempre alta.",
                    },
                    {
                      icon: "🌍",
                      title: "Acessível em Qualquer Lugar",
                      desc: "Funciona no computador, tablet ou celular, online e offline.",
                    },
                    {
                      icon: "🛡️",
                      title: "100% Gratuito",
                      desc: "Sem custos para professores, alunos ou escolas.",
                    },
                  ].map((item, idx) => (
                    <div className="col-md-4 mb-3" key={idx}>
                      <div className="stat-item h-100 d-flex flex-column align-items-center justify-content-start p-3">
                        <div className="display-5 mb-3">{item.icon}</div>
                        <h3
                          className="fw-bold text-warning mb-3 text-center"
                          style={{ minHeight: "3rem" }}
                        >
                          {item.title}
                        </h3>
                        <p className="mb-0 text-white opacity-85 text-center">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botões */}
              <div className="cta-buttons">
                <button className="btn btn-warning btn-lg me-3 mb-3 px-5 py-3 rounded-pill shadow-lg">
                  <i className="bi bi-play-circle-fill me-2"></i>
                  <span className="fw-bold">Iniciar Aventura</span>
                </button>
                <button className="btn btn-outline-light btn-lg mb-3 px-5 py-3 rounded-pill">
                  <i className="bi bi-search-heart-fill me-2"></i>
                  Explorar Recursos
                </button>
              </div>

              {/* Mensagem de gratuidade no lugar de garantia/oferta */}
              <div className="cta-guarantee mt-4">
                <div className="alert alert-warning bg-warning bg-opacity-20 border-warning text-white">
                  <i className="bi bi-gift-fill me-2"></i>
                  <strong>Disponível para todos</strong>! O RPG Realms Of The
                  Unplugged é gratuito para sempre, para qualquer aluno ou
                  professor que queira embarcar nessa jornada.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
