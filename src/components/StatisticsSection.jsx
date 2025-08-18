import React from "react";

const StatisticsSection = () => {
  const stats = [
    {
      percentage: "74%",
      title:
        " dos estudantes dizem estar desmotivados com o ensino tradicional",
      bgColor: "bg-danger",
      icon: "bi-graph-up-arrow",
    },
    {
      percentage: "6h+",
      title: "por dia nas telas, mas zero engajamento com estudos",
      bgColor: "bg-warning",
      icon: "bi-clock-fill",
    },
    {
      percentage: "1 em 4",
      title: "jovens abandona o Enino Médio no Brasil",
      bgColor: "bg-success",
      icon: "bi-people-fill",
    },
    {
      percentage: "60%",
      title: "dos professores relatam dificuldade para engajar alunos",
      bgColor: "bg-info",
      icon: "bi-clipboard-data-fill",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5 animate-fade-in-up hidden-on-load">
          <h2 className="fw-bold mb-3">
            A Educação Brasileira Precisa de Heróis!
            <i className="bi bi-exclamation-triangle-fill text-danger ms-2"></i>
          </h2>
          <p className="lead text-muted">
            Os dados mostram que é hora de uma mudança na educação
          </p>
        </div>

        <div className="row g-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`col-lg-3 col-md-6 animate-scale-in hidden-on-load animate-delay-${
                index + 1
              }`}
            >
              <div
                className={`card h-100 ${stat.bgColor} text-white border-0 shadow-lg`}
              >
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
