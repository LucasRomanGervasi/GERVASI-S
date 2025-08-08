<script lang="ts">
  import Icon from "@iconify/svelte";
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
  } from "flowbite-svelte";
  import { onMount } from "svelte";

  onMount(() => {
    // Dar tiempo para que el DOM se renderice completamente
    setTimeout(() => {
      const timelineItems = document.querySelectorAll(".simple-fade");
      console.log("Elementos encontrados:", timelineItems.length);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log("Animando elemento");
              const delay = entry.target.getAttribute("data-delay") || "0";
              setTimeout(() => {
                entry.target.classList.add("visible");
              }, parseInt(delay));
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        }
      );

      timelineItems.forEach((item) => observer.observe(item));
    }, 100);
  });
</script>

<div class="bg-black min-h-screen text-white">
  <Navbar let:NavContainer color="primary">
    <NavContainer class="border px-5 py-2 rounded-lg">
      <NavBrand href="/">
        <img src="/image/logo.png" alt="Logo" />
      </NavBrand>
      <NavHamburger />
      <NavUl>
        <NavLi href="#features">Beneficios</NavLi>
        <NavLi href="#how">Cómo funciona</NavLi>
        <NavLi href="#contact">Contacto</NavLi>
      </NavUl>
    </NavContainer>
  </Navbar>

  <!-- Hero Section -->
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title">Automatizá tu atención con Agente IA</h1>
      <p class="hero-subtitle">Responde consultas con velocidad y estilo.</p>
      <a href="#contact" class="hero-cta">
        Comenzar gratis
        <Icon icon="mdi:arrow-right" width="20" height="20" />
      </a>
    </div>
  </section>

  <!-- Benefits Section -->
  <section id="features" class="benefits-section">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="benefits-title">Beneficios</h2>
      <div class="benefits-grid">
        <div class="benefit-card">
          <div class="benefit-icon">
            <Icon icon="mingcute:time-fill" width="32" height="32" />
          </div>
          <h3 class="benefit-title">Atención 24/7</h3>
          <p class="benefit-description">
            Tu negocio nunca duerme: responde consultas y pedidos todo el día
            sin esfuerzo.
          </p>
        </div>

        <div class="benefit-card">
          <div class="benefit-icon">
            <Icon icon="mdi:trending-up" width="32" height="32" />
          </div>
          <h3 class="benefit-title">Más ventas</h3>
          <p class="benefit-description">
            No pierdas clientes por demoras: el bot atiende al instante y guía
            la compra.
          </p>
        </div>

        <div class="benefit-card">
          <div class="benefit-icon">
            <Icon icon="mdi:cog" width="32" height="32" />
          </div>
          <h3 class="benefit-title">A medida</h3>
          <p class="benefit-description">
            Configuramos el agente con tu estilo, respuestas y catálogo de
            productos.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- How it Works Section -->
  <section id="how">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Cómo funciona</h2>
        <p class="section-subtitle">
          Un proceso simple y efectivo para tener tu agente IA funcionando en
          días
        </p>
      </div>

      <div class="timeline">
        <div class="timeline-item simple-fade" data-delay="0">
          <div class="timeline-number">1</div>
          <div class="timeline-content">
            <h3 class="timeline-title">
              <Icon
                icon="mdi:clipboard-text"
                width="24"
                height="24"
                class="inline mr-2"
              />
              Nos contás sobre tu negocio
            </h3>
            <p class="timeline-description">
              Entendemos qué tipo de consultas recibís, qué productos o
              servicios querés ofrecer y cuáles son tus objetivos comerciales.
            </p>
          </div>
        </div>

        <div class="timeline-item simple-fade" data-delay="150">
          <div class="timeline-number">2</div>
          <div class="timeline-content">
            <h3 class="timeline-title">
              <Icon
                icon="mdi:robot"
                width="24"
                height="24"
                class="inline mr-2"
              />
              Configuramos tu agente IA
            </h3>
            <p class="timeline-description">
              Personalizamos mensajes, respuestas rápidas, catálogo de productos
              y flujos conversacionales según tu marca y estilo único.
            </p>
          </div>
        </div>

        <div class="timeline-item simple-fade" data-delay="300">
          <div class="timeline-number">3</div>
          <div class="timeline-content">
            <h3 class="timeline-title">
              <Icon
                icon="mdi:whatsapp"
                width="24"
                height="24"
                class="inline mr-2"
              />
              Lo conectamos a WhatsApp
            </h3>
            <p class="timeline-description">
              Integramos el bot con tu número de WhatsApp para que empiece a
              atender consultas y generar ventas en tiempo real.
            </p>
          </div>
        </div>

        <div class="timeline-item simple-fade" data-delay="450">
          <div class="timeline-number">4</div>
          <div class="timeline-content">
            <h3 class="timeline-title">
              <Icon
                icon="mdi:chart-line"
                width="24"
                height="24"
                class="inline mr-2"
              />
              Monitoreamos y mejoramos
            </h3>
            <p class="timeline-description">
              Supervisamos las interacciones diariamente y ajustamos el bot para
              mejorar respuestas y maximizar conversiones.
            </p>
          </div>
        </div>

        <div class="timeline-item simple-fade" data-delay="600">
          <div class="timeline-number">5</div>
          <div class="timeline-content">
            <h3 class="timeline-title">
              <Icon
                icon="mdi:headset"
                width="24"
                height="24"
                class="inline mr-2"
              />
              Soporte continuo
            </h3>
            <p class="timeline-description">
              Estamos disponibles para ayudarte siempre que lo necesites y para
              actualizar funcionalidades según tu crecimiento.
            </p>
          </div>
        </div>
      </div>

      <div class="cta-section">
        <h3 class="cta-title">¿Listo para automatizar tu atención?</h3>
        <p class="cta-text">
          Comenzá en minutos y tendrás tu agente funcionando esta semana
        </p>
        <a href="#contact" class="cta-button">
          Empezar ahora
          <Icon icon="mdi:arrow-right" width="16" height="16" />
        </a>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="contact-section">
    <div class="contact-content">
      <h2 class="contact-title">Solicitá tu Agente IA</h2>
      <p class="contact-subtitle">
        Dejanos tus datos y te contactamos para armar tu bot a medida.
      </p>
      <a
        href="https://forms.gle/TU_FORM_DE_GOOGLE"
        target="_blank"
        class="contact-button"
      >
        <Icon icon="mdi:form-select" width="20" height="20" />
        Completar formulario
      </a>
    </div>
  </section>

  <footer class="footer">
    <p>
      © {new Date().getFullYear()} GERVASI'S - Todos los derechos reservados.
    </p>
  </footer>
</div>

<style>
  /* Hero Section */
  .hero-section {
    display: flex;
    background: linear-gradient(135deg, #000000 0%, #3533cd 100%);
    min-height: 85vh;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .hero-section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 20% 80%,
        rgba(120, 119, 198, 0.3) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 20%,
        rgba(255, 255, 255, 0.1) 0%,
        transparent 50%
      );
  }

  .hero-content {
    text-align: center;
    position: relative;
    z-index: 1;
    max-width: 800px;
    padding: 0 24px;
  }

  .hero-title {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    margin-bottom: 24px;
    background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.2;
  }

  .hero-subtitle {
    font-size: 1.25rem;
    color: #cbd5e1;
    margin-bottom: 32px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-cta {
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    color: white;
    padding: 16px 32px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    transition: all 0.3s ease;
    font-size: 1.1rem;
  }

  .hero-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 40px rgba(59, 130, 246, 0.3);
  }

  /* Benefits Section */
  .benefits-section {
    padding: 100px 0;
    background: #000000;
  }

  .benefits-title {
    text-align: center;
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 64px;
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 32px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .benefit-card {
    background: linear-gradient(
      135deg,
      rgba(59, 130, 246, 0.1) 0%,
      rgba(139, 92, 246, 0.1) 100%
    );
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 32px;
    text-align: center;
    transition: all 0.3s ease;
  }

  .benefit-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
    border-color: rgba(59, 130, 246, 0.3);
  }

  .benefit-icon {
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    width: 64px;
    height: 64px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 24px;
    color: white;
  }

  .benefit-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 16px;
    color: #f1f5f9;
  }

  .benefit-description {
    color: #94a3b8;
    line-height: 1.6;
  }

  /* How it Works Section */
  #how {
    position: relative;
    background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
    padding: 100px 0;
    overflow: hidden;
  }

  #how::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 30% 20%,
        rgba(59, 130, 246, 0.1) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 70% 80%,
        rgba(147, 51, 234, 0.1) 0%,
        transparent 50%
      );
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    position: relative;
    z-index: 1;
  }

  .section-header {
    text-align: center;
    margin-bottom: 80px;
  }

  .section-title {
    font-size: 3rem;
    font-weight: 800;
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 16px;
  }

  .section-subtitle {
    font-size: 1.2rem;
    color: #94a3b8;
    max-width: 600px;
    margin: 0 auto;
  }

  .timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
  }

  .timeline::before {
    content: "";
    position: absolute;
    left: 30px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(180deg, #3b82f6 0%, #8b5cf6 100%);
    border-radius: 2px;
  }

  .timeline-item {
    position: relative;
    margin-bottom: 48px;
    padding-left: 80px;
  }

  .timeline-number {
    position: absolute;
    left: 16px;
    top: 8px;
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 14px;
    color: white;
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
    z-index: 2;
  }

  .timeline-content {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 32px;
    transition: all 0.3s ease;
  }

  .timeline-content:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(59, 130, 246, 0.3);
  }

  .timeline-title {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 12px;
    color: #f1f5f9;
    display: flex;
    align-items: center;
  }

  .timeline-description {
    color: #94a3b8;
    line-height: 1.6;
    font-size: 1rem;
  }

  /* Animaciones del Timeline */
  .simple-fade {
    transform: translateY(30px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .simple-fade.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .cta-section {
    text-align: center;
    margin-top: 80px;
    padding: 48px;
    background: rgba(59, 130, 246, 0.1);
    border-radius: 24px;
    border: 1px solid rgba(59, 130, 246, 0.2);
  }

  .cta-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 16px;
    color: #f1f5f9;
  }

  .cta-text {
    color: #94a3b8;
    margin-bottom: 32px;
    font-size: 1.1rem;
  }

  .cta-button {
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    color: white;
    padding: 16px 40px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    transition: all 0.3s ease;
    font-size: 1.1rem;
  }

  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(59, 130, 246, 0.3);
  }

  /* Contact Section */
  .contact-section {
    padding: 100px 0;
    background: #000000;
    text-align: center;
  }

  .contact-content {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .contact-title {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 24px;
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .contact-subtitle {
    margin-bottom: 40px;
    color: #94a3b8;
    font-size: 1.2rem;
  }

  .contact-button {
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    color: white;
    padding: 16px 32px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    transition: all 0.3s ease;
    font-size: 1.1rem;
  }

  .contact-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(59, 130, 246, 0.3);
  }

  /* Footer */
  .footer {
    background: #0f172a;
    color: #64748b;
    padding: 32px 0;
    text-align: center;
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    .section-title,
    .benefits-title,
    .contact-title {
      font-size: 2.5rem;
    }

    .timeline::before {
      left: 20px;
    }

    .timeline-item {
      padding-left: 60px;
    }

    .timeline-number {
      left: 6px;
      width: 28px;
      height: 28px;
      font-size: 12px;
    }

    .benefits-grid {
      grid-template-columns: 1fr;
    }

    .cta-section {
      padding: 32px 24px;
    }
  }
</style>
