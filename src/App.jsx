import React, { useEffect, useState } from "react";
import logo from "../logo_pg.png";

const navigation = [
  ["Services", "#services"],
  ["International", "#international"],
  ["Sponsoring", "#sponsoring"],
  ["VIP", "#vip"],
  ["Contact", "#contact"],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".service-card,.step,.ad-card,.vip-card",
    );

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );

    elements.forEach((element) => {
      element.classList.add("reveal");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="header" id="top">
        <a
          className="brand"
          href="#top"
          aria-label="TuniX accueil"
          onClick={closeMenu}
        >
          <img src={logo} alt="TuniX" />
        </a>

        <nav className={`nav${menuOpen ? " open" : ""}`} id="nav">
          {navigation.map(([label, href]) => (
            <a href={href} key={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
        
        </nav>

        <a className="header-cta" href="#contact">
          Nous contacter
        </a>
        <button
          className="menu"
          id="menu"
          type="button"
          aria-label="Menu"
          aria-expanded={menuOpen}
          aria-controls="nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          ☰
        </button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-glow"></div>
          <div className="hero-copy">
            <span className="eyebrow">TuniX • Services digitaux</span>
            <h1>
              Votre accès
              <br />
              <span>au monde.</span>
            </h1>
            <p>
              Abonnements, services numériques, paiements internationaux et
              solutions digitales — réunis au même endroit.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#services">
                Découvrir nos services
              </a>
              <a className="btn ghost" href="#contact">
                Parler avec nous
              </a>
            </div>
            <div className="trust-row">
              <span>Simple</span>
              <i></i>
              <span>Rapide</span>
              <i></i>
              <span>International</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit"></div>
            <div className="card-stack">
              <div className="glass-card small-card">
                <b>GLOBAL</b>
                <span>Digital access</span>
              </div>
              <div className="glass-card main-card">
                <div className="chip"></div>
                <div className="card-top">
                  <span>TuniX</span>
                  <span>•••</span>
                </div>
                <div className="card-number">•••• &nbsp; •••• &nbsp; •••• &nbsp; 2026</div>
                <div className="card-bottom">
                  <span>LIMITED BALANCE</span>
                  <span>WORLD</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="intro section">
          <div>
            <span className="eyebrow">Tout ce dont vous avez besoin</span>
            <h2>
              Un seul espace.
              <br />
              <span>Plus de possibilités.</span>
            </h2>
          </div>
          <p>
            TuniX vous accompagne pour accéder à des services qui nécessitent
            des moyens de paiement internationaux, sans rendre les démarches
            compliquées.
          </p>
        </section>

        <section className="section" id="services">
          <div className="section-head">
            <div>
              <span className="eyebrow">01 / Services</span>
              <h2>
                Vos abonnements,
                <br />
                <span>sans prise de tête.</span>
              </h2>
            </div>
            <p>
              Vous cherchez un service précis ? Contactez-nous et nous vous
              indiquons les options disponibles.
            </p>
          </div>

          <div className="service-grid">
            <article className="service-card featured">
              <div className="service-icon">AI</div>
              <h3>Outils &amp; IA</h3>
              <p>
                Accès à des services numériques et outils d’intelligence
                artificielle selon vos besoins.
              </p>
              <span className="service-tag">ChatGPT • Claude • Gemini • +</span>
            </article>
            <article className="service-card">
              <div className="service-icon">▶</div>
              <h3>Divertissement</h3>
              <p>
                Abonnements et services de streaming disponibles selon les
                offres du moment.
              </p>
              <span className="service-tag">Streaming • Digital • +</span>
            </article>
            <article className="service-card">
              <div className="service-icon">✦</div>
              <h3>Services digitaux</h3>
              <p>
                Solutions et achats numériques nécessitant un paiement
                international.
              </p>
              <span className="service-tag">Apps • Outils • Services</span>
            </article>
            <article className="service-card">
              <div className="service-icon">↗</div>
              <h3>Et plus encore</h3>
              <p>
                Vous avez un besoin particulier ? Demandez-nous. Nous étudions
                la possibilité.
              </p>
              <span className="service-tag">Sur demande</span>
            </article>
          </div>
        </section>

        <section className="split-section section" id="international">
          <div className="visual-panel">
            <div className="globe">◎</div>
            <div className="floating-label label-1">PAYMENT</div>
            <div className="floating-label label-2">WORLDWIDE</div>
            <div className="floating-label label-3">DIGITAL</div>
          </div>
          <div className="split-copy">
            <span className="eyebrow">02 / International</span>
            <h2>
              Le digital
              <br />
              <span>ne s&apos;arrête pas aux frontières.</span>
            </h2>
            <p>
              Certains services demandent une carte internationale. TuniX
              facilite l&apos;accès à ces services et vous accompagne dans le
              processus.
            </p>
            <ul className="check-list">
              <li>
                <span>✓</span> Paiements et services internationaux
              </li>
              <li>
                <span>✓</span> Solutions digitales sur demande
              </li>
              <li>
                <span>✓</span> Accompagnement avant la commande
              </li>
              <li>
                <span>✓</span> Informations claires sur chaque offre
              </li>
            </ul>
          </div>
        </section>

        <section className="section" id="sponsoring">
          <div className="section-head">
            <div>
              <span className="eyebrow">03 / Business</span>
              <h2>
                Sponsoring
                <br />
                <span>Facebook &amp; Instagram.</span>
              </h2>
            </div>
            <p>
              Besoin de donner plus de visibilité à votre page, produit ou
              activité ? TuniX propose aussi des services liés à la promotion
              digitale.
            </p>
          </div>

          <div className="ad-card">
            <div className="ad-preview">
              <div className="ad-top">
                TuniX <span>Sponsored</span>
              </div>
              <div className="ad-center">
                <b>VOTRE</b>
                <strong>PUBLICITÉ</strong>
                <small>FACEBOOK • INSTAGRAM</small>
              </div>
              <div className="ad-bottom">
                <span>Reach</span>
                <span>Engagement</span>
                <span>Visibility</span>
              </div>
            </div>
            <div className="ad-copy">
              <span className="mini-label">Pour les entreprises &amp; créateurs</span>
              <h3>
                Votre offre.
                <br />
                La bonne audience.
              </h3>
              <p>
                Nous pouvons vous accompagner pour préparer et mettre en place
                vos campagnes sponsorisées, selon votre objectif et votre
                budget.
              </p>
              <a className="text-link" href="#contact">
                Demander un devis →
              </a>
            </div>
          </div>
        </section>

        <section className="vip section" id="vip">
          <div className="vip-copy">
            <span className="eyebrow">04 / VIP</span>
            <h2>
              Une solution
              <br />
              <span>pour vos achats internationaux.</span>
            </h2>
            <p>
              Pour certains besoins, nous pouvons proposer des solutions de
              paiement à montant limité, destinées à des achats et services
              autorisés.
            </p>
            <div className="notice">
              <b>À savoir</b>
              <span>
                Les limites, conditions, disponibilité et usages autorisés sont
                définis avant toute commande.
              </span>
            </div>
            <a className="btn primary" href="#contact">
              En savoir plus
            </a>
          </div>
          <div className="vip-card">
            <div className="vip-card-head">
              <span>TuniX</span>
              <span>VIP</span>
            </div>
            <div className="vip-chip"></div>
            <div className="vip-title">
              CONTROLLED
              <br />
              <strong>SPENDING</strong>
            </div>
            <div className="vip-line"></div>
            <div className="vip-meta">
              <span>LIMITED AMOUNT</span>
              <span>INTERNATIONAL</span>
            </div>
          </div>
        </section>

        <section className="process section">
          <div className="section-head centered">
            <span className="eyebrow">Comment ça marche ?</span>
            <h2>
              Simple du début
              <br />
              <span>à la fin.</span>
            </h2>
          </div>
          <div className="steps">
            <div className="step">
              <b>01</b>
              <h3>Vous demandez</h3>
              <p>Envoyez-nous le service ou l&apos;abonnement recherché.</p>
            </div>
            <div className="step">
              <b>02</b>
              <h3>On vérifie</h3>
              <p>Nous confirmons disponibilité, prix et conditions.</p>
            </div>
            <div className="step">
              <b>03</b>
              <h3>Vous validez</h3>
              <p>Vous choisissez l&apos;offre qui vous convient.</p>
            </div>
            <div className="step">
              <b>04</b>
              <h3>On s&apos;occupe du reste</h3>
              <p>Votre commande est traitée et vous recevez les détails.</p>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div>
            <span className="eyebrow">Contact</span>
            <h2>
              Vous cherchez
              <br />
              <span>quelque chose ?</span>
            </h2>
            <p>
              Écrivez-nous. Même si le service n&apos;est pas affiché sur le
              site, demandez-nous.
            </p>
          </div>
          <div className="contact-box">
            <div className="contact-row">
              <span>Facebook</span>
              <a href="https://www.facebook.com/tunixTN">TuniX</a>
            </div>
            <div className="contact-row">
              <span>Instagram</span>
              <a href="https://www.instagram.com/tunix_tn/">@TuniX</a>
            </div>
            <div className="contact-row">
              <span>Message</span>
              <a href="mailto:tunix.world6@gmail.com?subject=Demande%20d%27information%20TuniX&amp;body=Bonjour%20TuniX%2C%0A%0A">
                Nous contacter →
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <strong>TuniX</strong>
          <span>Your access to the world.</span>
        </div>
        <div>
          © <span>{new Date().getFullYear()}</span> TuniX. Tous droits réservés.
        </div>
      </footer>
    </>
  );
}

export default App;
