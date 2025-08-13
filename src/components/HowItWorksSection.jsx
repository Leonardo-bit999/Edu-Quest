import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      step: '01',
      title: 'Criação do Herói',
      description: 'Cada aluno cria seu personagem único com habilidades e características especiais',
      icon: 'bi-person-plus-fill',
      color: 'text-primary'
    },
    {
      step: '02',
      title: 'Jornada de Missões',
      description: 'Transformamos conteúdos educacionais em missões épicas e desafios envolventes',
      icon: 'bi-map-fill',
      color: 'text-success'
    },
    {
      step: '03',
      title: 'Sistema de Recompensas',
      description: 'Ganhe pontos e desbloqueie conquistas conforme avança no aprendizado',
      icon: 'bi-trophy-fill',
      color: 'text-warning'
    },
    {
      step: '04',
      title: 'Ranking e Guilds',
      description: 'Compete com amigos, forme equipes e participe de torneios educacionais',
      icon: 'bi-people-fill',
      color: 'text-danger'
    }
  ];

  return (
    <section id="como-funciona" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">
            Como Transformamos Alunos em Heróis 
            <i className="bi bi-magic ms-2 text-primary"></i>
          </h2>
          <p className="lead text-muted">
            Nosso processo único de gamificação em 4 etapas simples
          </p>
        </div>
        
        <div className="row g-4">
          {steps.map((step, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="card h-100 border-0 shadow-sm hover-lift">
                <div className="card-body text-center p-4">
                  <div className="step-number mb-3">
                    <span className="badge bg-light text-dark rounded-circle p-3 fs-5 fw-bold">
                      {step.step}
                    </span>
                  </div>
                  
                  <div className="mb-3">
                    <i className={`${step.icon} display-4 ${step.color}`}></i>
                  </div>
                  
                  <h5 className="card-title fw-bold mb-3">{step.title}</h5>
                  <p className="card-text text-muted">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

