import React from 'react';

const EpicMissionsSection = () => {
  const missions = [
    {
      title: 'Salve o Reino da Matemática',
      description: 'Derrote o Dragão das Equações e salve a princesa Álgebra usando suas habilidades matemáticas',
      points: '500',
      difficulty: 'Médio',
      time: '45 min',
      color: 'primary',
      icon: 'bi-calculator-fill'
    },
    {
      title: 'Aventura na Terra da Gramática',
      description: 'Explore dungeons repletas de verbos, substantivos e adjetivos para dominar a língua portuguesa',
      points: '350',
      difficulty: 'Fácil',
      time: '30 min',
      color: 'success',
      icon: 'bi-book-fill'
    },
    {
      title: 'Expedição Científica Espacial',
      description: 'Viaje pelo sistema solar e descubra os segredos da física e química em uma missão intergaláctica',
      points: '750',
      difficulty: 'Difícil',
      time: '60 min',
      color: 'warning',
      icon: 'bi-rocket-takeoff-fill'
    }
  ];

  return (
    <section id="missoes" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">
            Missões Épicas que Seus Alunos Vão Amar! 
            <i className="bi bi-lightning-charge-fill text-warning ms-2"></i>
          </h2>
          <p className="lead text-muted">
            Transforme qualquer conteúdo em uma aventura inesquecível
          </p>
        </div>
        
        <div className="row g-4">
          {missions.map((mission, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-lg hover-lift">
                <div className="card-header bg-white border-0 text-center pt-4">
                  <div className={`mission-icon mb-3`}>
                    <i className={`${mission.icon} display-4 text-${mission.color}`}></i>
                  </div>
                  <h5 className="card-title fw-bold">{mission.title}</h5>
                </div>
                
                <div className="card-body">
                  <p className="card-text text-muted mb-4">{mission.description}</p>
                  
                  <div className="mission-stats mb-4">
                    <div className="row text-center">
                      <div className="col-4">
                        <div className="stat-item">
                          <i className="bi bi-gem text-warning"></i>
                          <div className="fw-bold">{mission.points}</div>
                          <small className="text-muted">Pontos</small>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="stat-item">
                          <i className="bi bi-speedometer2 text-info"></i>
                          <div className="fw-bold">{mission.difficulty}</div>
                          <small className="text-muted">Nível</small>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="stat-item">
                          <i className="bi bi-clock text-success"></i>
                          <div className="fw-bold">{mission.time}</div>
                          <small className="text-muted">Duração</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="card-footer bg-white border-0 pb-4">
                  <button className={`btn btn-${mission.color} w-100 btn-lg rounded-pill`}>
                    <i className="bi bi-play-circle-fill me-2"></i>
                    Iniciar Missão
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EpicMissionsSection;

