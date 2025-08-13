import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row g-4">
          {/* Logo e Descrição */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-brand mb-4">
              <h4 className="fw-bold">
                <i className="bi bi-shield-fill-check me-2 text-warning"></i>
                Mundo Real RPG
              </h4>
              <p className="text-light opacity-75">
                Transformando a educação brasileira através da gamificação,
                criando heróis do aprendizado em cada sala de aula.
              </p>
            </div>

            <div className="social-links">
              <h6 className="fw-semibold mb-3">Siga-nos nas Redes Sociais</h6>
              <div className="d-flex gap-3">
                <a
                  href="#"
                  className="btn btn-outline-light btn-sm rounded-circle"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="#"
                  className="btn btn-outline-light btn-sm rounded-circle"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="#"
                  className="btn btn-outline-light btn-sm rounded-circle"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  href="#"
                  className="btn btn-outline-light btn-sm rounded-circle"
                >
                  <i className="bi bi-youtube"></i>
                </a>
                <a
                  href="#"
                  className="btn btn-outline-light btn-sm rounded-circle"
                >
                  <i className="bi bi-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Links de Navegação */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-semibold mb-3">Navegação</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#como-funciona"
                  className="text-light opacity-75 text-decoration-none hover-link"
                >
                  Como Funciona
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#missoes"
                  className="text-light opacity-75 text-decoration-none hover-link"
                >
                  Missões
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#herois"
                  className="text-light opacity-75 text-decoration-none hover-link"
                >
                  Nossos Heróis
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#faq"
                  className="text-light opacity-75 text-decoration-none hover-link"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-semibold mb-3">Recursos</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="#"
                  className="text-light opacity-75 text-decoration-none hover-link"
                >
                  Blog Educacional
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-light opacity-75 text-decoration-none hover-link"
                >
                  Guias para Professores
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-light opacity-75 text-decoration-none hover-link"
                >
                  Webinars Gratuitos
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="text-light opacity-75 text-decoration-none hover-link"
                >
                  Suporte Técnico
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div className="col-lg-4 col-md-6">
            <h6 className="fw-semibold mb-3">Entre em Contato</h6>
            <div className="contact-info">
              <div className="contact-item mb-3">
                <i className="bi bi-geo-alt-fill text-warning me-2"></i>
                <span className="text-light opacity-75">
                  Salvador, BA - Brasil
                  <br />
                  Rua da Educação, 123 - Centro
                </span>
              </div>

              <div className="contact-item mb-3">
                <i className="bi bi-envelope-fill text-warning me-2"></i>
                <a
                  href="mailto:contato@mundorealrpg.com.br"
                  className="text-light opacity-75 text-decoration-none hover-link"
                >
                  contato@eduquest.com.br
                </a>
              </div>

              <div className="contact-item mb-3">
                <i className="bi bi-telephone-fill text-warning me-2"></i>
                <a
                  href="tel:+5511999999999"
                  className="text-light opacity-75 text-decoration-none hover-link"
                >
                  (71) 99999-9999
                </a>
              </div>

              <div className="contact-item">
                <i className="bi bi-whatsapp text-warning me-2"></i>
                <a
                  href="https://wa.me/5511999999999"
                  className="text-light opacity-75 text-decoration-none hover-link"
                >
                  WhatsApp: (71) 99999-9999
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-4 opacity-25" />

        {/* Copyright e Links Legais */}
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0 text-light opacity-50">
              © 2025 RPG Realms Of The Unplugged. Todos os direitos reservados.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="legal-links">
              <a
                href="#"
                className="text-light opacity-50 text-decoration-none me-3 hover-link"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-light opacity-50 text-decoration-none me-3 hover-link"
              >
                Termos de Uso
              </a>
              <a
                href="#"
                className="text-light opacity-50 text-decoration-none hover-link"
              >
                LGPD
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

