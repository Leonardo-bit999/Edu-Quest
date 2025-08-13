import React from 'react';

const FAQSection = () => {
  const faqs = [
    {
      id: 'faq1',
      question: 'Como funciona a gamificação na educação?',
      answer: 'Nossa plataforma transforma conteúdos educacionais tradicionais em missões, desafios e aventuras. Os alunos ganham pontos, badges e sobem de nível conforme progridem no aprendizado, mantendo-os motivados e engajados.'
    },
    {
      id: 'faq2',
      question: 'A plataforma substitui o professor tradicional?',
      answer: 'Não! Nossa plataforma é uma ferramenta que potencializa o trabalho do professor. Ela oferece recursos para tornar as aulas mais dinâmicas e envolventes, mas o educador continua sendo fundamental no processo de ensino-aprendizagem.'
    },
    {
      id: 'faq3',
      question: 'Funciona em smartphones e tablets também?',
      answer: 'Sim! Nossa plataforma é totalmente responsiva e funciona perfeitamente em computadores, tablets e smartphones. Os alunos podem continuar suas missões em qualquer dispositivo, a qualquer hora e lugar.'
    },
    {
      id: 'faq4',
      question: 'Quais matérias estão disponíveis na plataforma?',
      answer: 'Oferecemos conteúdos gamificados para todas as principais disciplinas: Matemática, Português, Ciências, História, Geografia, Inglês e muito mais. Nosso catálogo está em constante expansão.'
    },
    {
      id: 'faq5',
      question: 'É possível acompanhar o progresso dos alunos?',
      answer: 'Absolutamente! Professores e pais têm acesso a dashboards detalhados com métricas de progresso, tempo de estudo, áreas de dificuldade e conquistas dos alunos em tempo real.'
    },
    {
      id: 'faq6',
      question: 'Quanto custa para implementar na escola?',
      answer: 'Oferecemos planos flexíveis para diferentes tamanhos de instituições. Entre em contato conosco para uma proposta personalizada que se adeque ao orçamento da sua escola.'
    },
    {
      id: 'faq7',
      question: 'Há treinamento para os professores?',
      answer: 'Sim! Oferecemos treinamento completo para toda a equipe pedagógica, incluindo workshops presenciais, materiais didáticos e suporte técnico contínuo para garantir o sucesso da implementação.'
    },
    {
      id: 'faq8',
      question: 'Como garantem a segurança dos dados dos alunos?',
      answer: 'A segurança é nossa prioridade. Seguimos rigorosamente a LGPD (Lei Geral de Proteção de Dados) e utilizamos criptografia de ponta para proteger todas as informações dos usuários.'
    }
  ];

  return (
    <section id="faq" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">
            Perguntas Frequentes 
            <i className="bi bi-question-circle-fill text-info ms-2"></i>
          </h2>
          <p className="lead text-muted">
            Tire suas dúvidas sobre nossa plataforma educacional gamificada
          </p>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div key={faq.id} className="accordion-item border-0 shadow-sm mb-3">
                  <h3 className="accordion-header">
                    <button 
                      className="accordion-button collapsed fw-semibold"
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target={`#${faq.id}`}
                      aria-expanded="false" 
                      aria-controls={faq.id}
                    >
                      <i className="bi bi-patch-question-fill text-primary me-3"></i>
                      {faq.question}
                    </button>
                  </h3>
                  <div 
                    id={faq.id} 
                    className="accordion-collapse collapse" 
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body text-muted">
                      <i className="bi bi-arrow-right-circle-fill text-success me-2"></i>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-5">
              <div className="alert alert-light border shadow-sm">
                <h5 className="alert-heading">
                  <i className="bi bi-headset me-2"></i>
                  Ainda tem dúvidas?
                </h5>
                <p className="mb-3">
                  Nossa equipe de especialistas está pronta para ajudar você!
                </p>
                <button className="btn btn-primary btn-lg rounded-pill px-4">
                  <i className="bi bi-chat-dots-fill me-2"></i>
                  Falar com Especialista
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

