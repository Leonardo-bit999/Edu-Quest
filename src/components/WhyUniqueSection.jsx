import React from 'react';

const WhyUniqueSection = () => {
  const features = [
    {
      title: 'Narrativa Imersiva Personalizada',
      description: 'Cada aluno vive uma história única, adaptada ao seu ritmo de aprendizado e interesses pessoais.',
      icon: 'bi-book-half',
      color: 'primary',
      bgGradient: 'bg-gradient-primary'
    },
    {
      title: 'Inteligência Artificial Educativa',
      description: 'Nossa IA adapta o conteúdo em tempo real, identificando dificuldades e ajustando os desafios automaticamente.',
      icon: 'bi-cpu-fill',
      color: 'success',
      bgGradient: 'bg-gradient-success'
    },
    {
      title: 'Metodologia Brasileira Inovadora',
      description: 'Desenvolvido especificamente para a realidade educacional brasileira, respeitando nossa cultura e necessidades.',
      icon: 'bi-flag-fill',
      color: 'warning',
      bgGradient: 'bg-gradient-warning'
    }
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">
            Por Que Somos Únicos? 
            <i className="bi bi-stars text-warning ms-2"></i>
          </h2>
          <p className="lead text-muted">
            Três pilares que nos tornam diferentes de qualquer outra plataforma educacional
          </p>
        </div>
        
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-4">
              <div className={`card h-100 border-0 shadow-lg text-white ${feature.bgGradient} hover-lift`}>
                <div className="card-body p-5 text-center">
                  <div className="feature-icon mb-4">
                    <i className={`${feature.icon} display-3`}></i>
                  </div>
                  
                  <h4 className="card-title fw-bold mb-4">{feature.title}</h4>
                  <p className="card-text lead opacity-90">{feature.description}</p>
                  
                  <div className="mt-4">
                    <button className="btn btn-light btn-lg rounded-pill px-4">
                      <i className="bi bi-arrow-right-circle-fill me-2"></i>
                      Saiba Mais
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUniqueSection;

