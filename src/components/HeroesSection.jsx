import React from 'react';

const HeroesSection = () => {
  const heroes = [
    {
      title: 'Professores de Ensino Fundamental',
      description: 'Transforme suas aulas em aventuras épicas e veja seus alunos se apaixonarem pelo aprendizado.',
      icon: 'bi-mortarboard-fill',
      color: 'primary',
      stats: ['5-11 anos', 'Todas as matérias', 'Fácil adaptação']
    },
    {
      title: 'Educadores de Ensino Médio',
      description: 'Engaje adolescentes com missões desafiadoras que preparam para vestibulares e ENEM.',
      icon: 'bi-journal-bookmark-fill',
      color: 'success',
      stats: ['15-18 anos', 'Preparação ENEM', 'Gamificação avançada']
    },
    {
      title: 'Coordenadores Pedagógicos',
      description: 'Gerencie o progresso de toda a escola com dashboards intuitivos e relatórios detalhados.',
      icon: 'bi-graph-up-arrow',
      color: 'info',
      stats: ['Gestão escolar', 'Relatórios', 'Acompanhamento']
    },
    {
      title: 'Pais e Responsáveis',
      description: 'Acompanhe o desenvolvimento dos seus filhos e participe ativamente da jornada educacional.',
      icon: 'bi-heart-fill',
      color: 'danger',
      stats: ['Acompanhamento', 'Participação ativa', 'Progresso familiar']
    },
    {
      title: 'Diretores de Educação',
      description: 'Implemente inovação educacional em larga escala com resultados mensuráveis e comprovados.',
      icon: 'bi-building-fill',
      color: 'warning',
      stats: ['Gestão institucional', 'Resultados escaláveis', 'ROI educacional']
    },
    {
      title: 'Alunos de Todas as Idades',
      description: 'Seja o herói da sua própria jornada educacional e descubra o prazer de aprender brincando.',
      icon: 'bi-person-arms-up',
      color: 'secondary',
      stats: ['Protagonismo', 'Diversão garantida', 'Aprendizado efetivo']
    }
  ];

  return (
    <section id="herois" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">
            Quem São Nossos Heróis? 
            <i className="bi bi-people-fill text-primary ms-2"></i>
          </h2>
          <p className="lead text-muted">
            Transformamos educadores e estudantes em verdadeiros heróis da educação
          </p>
        </div>
        
        <div className="row g-4">
          {heroes.map((hero, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm hover-lift">
                <div className="card-body p-4">
                  <div className="text-center mb-4">
                    <div className={`hero-icon-wrapper bg-${hero.color} bg-opacity-10 rounded-circle p-3 d-inline-block mb-3`}>
                      <i className={`${hero.icon} display-5 text-${hero.color}`}></i>
                    </div>
                    <h5 className="card-title fw-bold">{hero.title}</h5>
                  </div>
                  
                  <p className="card-text text-muted mb-4">{hero.description}</p>
                  
                  <div className="hero-stats">
                    {hero.stats.map((stat, statIndex) => (
                      <span key={statIndex} className={`badge bg-${hero.color} bg-opacity-10 text-${hero.color} me-2 mb-2`}>
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="card-footer bg-white border-0">
                  <button className={`btn btn-outline-${hero.color} w-100 rounded-pill`}>
                    <i className="bi bi-arrow-right-circle me-2"></i>
                    Começar Jornada
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <div className="alert alert-success border-0 shadow-sm">
            <h5 className="alert-heading">
              <i className="bi bi-check-circle-fill me-2"></i>
              Junte-se à Revolução Educacional!
            </h5>
            <p className="mb-3">
              Mais de <strong>500 escolas</strong> já fazem parte da nossa comunidade de heróis da educação.
            </p>
            <button className="btn btn-success btn-lg rounded-pill px-5">
              <i className="bi bi-rocket-takeoff-fill me-2"></i>
              Quero Ser um Herói
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroesSection;

