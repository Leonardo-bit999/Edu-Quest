import React from 'react';

const StatisticsSection = () => {
  const stats = [
    {
      percentage: '74%',
      title: 'Dos alunos melhoram',
      subtitle: 'suas notas em até 3 meses',
      bgColor: 'bg-danger',
      icon: 'bi-graph-up-arrow'
    },
    {
      percentage: '6h+',
      title: 'De estudo por dia',
      subtitle: 'sem perceber o tempo passar',
      bgColor: 'bg-warning',
      icon: 'bi-clock-fill'
    },
    {
      percentage: '1 em 4',
      title: 'Professores já usam',
      subtitle: 'gamificação em suas aulas',
      bgColor: 'bg-success',
      icon: 'bi-people-fill'
    },
    {
      percentage: '60%',
      title: 'Mais engajamento',
      subtitle: 'comparado ao método tradicional',
      bgColor: 'bg-info',
      icon: 'bi-heart-fill'
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">
            A Educação Brasileira Precisa de Heróis! 
            <i className="bi bi-exclamation-triangle-fill text-danger ms-2"></i>
          </h2>
          <p className="lead text-muted">
            Os números mostram que é hora de uma mudança na educação
          </p>
        </div>
        
        <div className="row g-4">
          {stats.map((stat, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className={`card h-100 ${stat.bgColor} text-white border-0 shadow-lg`}>
                <div className="card-body text-center p-4">
                  <div className="mb-3">
                    <i className={`${stat.icon} display-4`}></i>
                  </div>
                  <h3 className="display-5 fw-bold mb-2">{stat.percentage}</h3>
                  <h5 className="card-title mb-2">{stat.title}</h5>
                  <p className="card-text opacity-90">{stat.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;

