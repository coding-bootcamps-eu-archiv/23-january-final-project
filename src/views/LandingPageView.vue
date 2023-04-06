<template>
  <body>
    <!--Navigation-->
    <header>
      <a href="#" class="logo"
        ><span
          ><svg
            class="image_logo"
            width="40"
            height="40"
            viewBox="0 0 39 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.456 21.24C13.24 21.24 12.112 21.024 11.072 20.592C10.048 20.144 9.152 19.528 8.384 18.744C7.616 17.944 7.024 17.024 6.608 15.984C6.192 14.928 5.984 13.8 5.984 12.6C5.984 11.4 6.192 10.28 6.608 9.24C7.024 8.184 7.616 7.264 8.384 6.48C9.152 5.696 10.048 5.08 11.072 4.632C12.112 4.184 13.24 3.96 14.456 3.96C15.816 3.96 16.992 4.184 17.984 4.632C18.976 5.08 19.856 5.688 20.624 6.456L18.752 8.328C18.256 7.784 17.648 7.36 16.928 7.056C16.224 6.752 15.4 6.6 14.456 6.6C13.624 6.6 12.864 6.744 12.176 7.032C11.488 7.32 10.888 7.736 10.376 8.28C9.88 8.808 9.496 9.44 9.224 10.176C8.952 10.912 8.816 11.72 8.816 12.6C8.816 13.48 8.952 14.288 9.224 15.024C9.496 15.76 9.88 16.4 10.376 16.944C10.888 17.472 11.488 17.88 12.176 18.168C12.864 18.456 13.624 18.6 14.456 18.6C15.48 18.6 16.344 18.448 17.048 18.144C17.768 17.824 18.376 17.392 18.872 16.848L20.744 18.72C19.976 19.504 19.072 20.12 18.032 20.568C16.992 21.016 15.8 21.24 14.456 21.24Z"
              fill="#00B0FF"
            />
            <path
              d="M13.97 17L11.2 9.97H12.67L14.81 15.66H14.24L16.4 9.97H17.85L15.05 17H13.97Z"
              fill="#00B0FF"
            />
            <path
              d="M22 22V4H25.0531V22H22ZM24.0973 14.2857V11.5857H33.5487V14.2857H24.0973ZM24.0973 6.7V4H34V6.7H24.0973Z"
              fill="#00C7C5"
            />
            <line
              x1="20"
              y1="8"
              x2="20"
              y2="3.27835e-08"
              stroke="#00B0FF"
              stroke-width="2"
            />
            <line
              x1="20"
              y1="1"
              x2="39"
              y2="1"
              stroke="#00B0FF"
              stroke-width="2"
            />
            <line y1="23" x2="25" y2="23" stroke="#00C7C5" stroke-width="2" />
            <line y1="23" x2="25" y2="23" stroke="#00C7C5" stroke-width="2" />
            <line y1="23" x2="25" y2="23" stroke="#00C7C5" stroke-width="2" />
            <line y1="1" x2="17" y2="1" stroke="#00C7C5" stroke-width="2" />
            <line y1="1" x2="17" y2="1" stroke="#00C7C5" stroke-width="2" />
            <line y1="1" x2="17" y2="1" stroke="#00C7C5" stroke-width="2" />
            <line
              x1="27"
              y1="23"
              x2="39"
              y2="23"
              stroke="#00B0FF"
              stroke-width="2"
            />
            <line
              x1="38"
              y1="23"
              x2="38"
              y2="4.37114e-08"
              stroke="#00B0FF"
              stroke-width="2"
            />
            <path d="M1 23L0.999999 0" stroke="#00C7C5" stroke-width="2" />
            <rect
              x="20.0634"
              y="6.97937"
              width="1.38526"
              height="1.88033"
              transform="rotate(47.4577 20.0634 6.97937)"
              fill="#00B0FF"
            /></svg
        ></span>
        <p>CV FABRIK</p></a
      >

      <nav id="menu-icon">
        <ul class="navbar">
          <li><a href="#layout">Vorlagen</a></li>
          <li><a href="#function">Wie funktioniert es?</a></li>
          <li><a href="#faq">Häufig gestellte Fragen</a></li>
          <li><a href="#about">Über uns</a></li>
        </ul>
      </nav>
    </header>
    <!-- End Navigation-->
    <!--Hero section-->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero__title">
          Dein Traumjob in Deutschland?<br />
          CV, der dich <br />herausstechen<br />lässt!
        </h1>
        <p>
          Dein Weg zum Traumberuf beginnt mit einem CV, der den deutschen
          Standards entspricht und perfekt auf deine beruflichen Bedürfnisse
          abgestimmt ist.
        </p>
        <router-link to="/cv-generator">
          <button class="hero__button">LEBENSLAUF ERSTELLEN</button>
        </router-link>
      </div>
      <div class="hero-image">
        <img
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/074/829/original/Online_resume-pana_%281%29.png?1680457866"
          alt="Hero Image"
        />
      </div>
    </section>

    <!--End Hero section-->
    <!--Layout section-->
    <section class="layout-section" id="layout">
      <h2>Lebenslauf-Designs für deinen nächsten Schritt</h2>
      <hr />
      <p>
        Als Kandidat bist du einzigartig und nur du verfügst über die richtigen
        Kompetenzen und die Erfahrung, den Job in <br />Perfektion zu meistern.
        Warum sollte also dein Lebenslauf nicht genauso interessant sein, wie du
        es bist?
      </p>
      <div class="image-section">
        <div class="image-container">
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/074/869/original/Classic.png?1680470742"
            alt="Image 1"
          />
          <p>
            <strong>Vorlagen „Classic“</strong> <br />
            sich gut für die Bereiche Recht, Bildung, Marketing – quasi für jede
            Position.
          </p>
        </div>
        <div class="image-container">
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/074/871/original/Modern.png?1680470774"
            alt="Image 2"
          />
          <p>
            <strong>Lebenslauf Vorlagen „Modern“ </strong> <br />
            sind gerne gesehen in den Bereichen Tech, Design oder in Startups.
          </p>
        </div>
        <div class="image-container">
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/074/870/original/Creativ.png?1680470756"
            alt="Image 3"
          />
          <p>
            <strong>Lebenslauf Vorlagen „Kreativ“ </strong> <br />
            sich gut für die Bereiche Recht, Bildung, Marketing – quasi für jede
            Position.
          </p>
        </div>
      </div>
    </section>
    <!-- End Layout-->
    <!--Function section-->
    <section class="function-section" id="function">
      <h2>
        So kansst du deinen Lebenslauf online erstellen- <br />in nur
        <span class="function-number">4</span> einfachen Schritten:
      </h2>
      <hr />
      <div class="container">
        <div class="image-wrapper">
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/074/878/original/Resume_folder-bro.png?1680473012"
          />
          <div class="circle">
            <span>1</span>
          </div>
          <div class="text">
            <p>Wählen Sie Ihr Design</p>
          </div>
        </div>
        <div class="image-wrapper option-2">
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/074/887/original/Untitled-1.png?1680478282"
          />
          <div class="circle">
            <span>2</span>
          </div>
          <div class="text">
            <p>Erstelle deinen CV <br />im Lebenslauf-Editor</p>
          </div>
        </div>
        <div class="image-wrapper">
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/074/880/original/Resume-bro.png?1680473042"
          />
          <div class="circle">
            <span>3</span>
          </div>
          <div class="text">
            <p>Passe das Design an</p>
          </div>
        </div>
        <div class="image-wrapper">
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/074/881/original/Add_files-amico.png?1680473050"
          />
          <div class="circle">
            <span>4</span>
          </div>
          <div class="text">
            <p>Laden den CV als PDF-Print-Datei herunter</p>
          </div>
        </div>
      </div>
    </section>
    <!-- End Function-->
    <!--Faq section-->
    <section class="faq-section" id="faq">
      <h2>Häufig gestellte Fragen</h2>
      <hr />
      <div class="faq-container">
        <div class="faq-image">
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/075/005/original/Questions-pana.png?1680530141"
            alt="Example Image"
            class="image-faq"
          />
        </div>
        <div class="faq-questions">
          <p>
            <strong>Was ist ein CV Fabrik?</strong> <br />
            Ein CV Fabrik ist eine Online-App, mit der ein Lebenslauf einfach
            online erstellt werden kann.
          </p>
          <p>
            <strong> Wie lang sollte der Lebenslauf sein? </strong> <br />
            Die kurze Antwort: eine Seite. Wenn du eine Menge Berufserfahrung
            hast (10 Jahre +), ist es manchmal sinnvoll, MAXIMAL 2 Seiten zu
            schreiben.
          </p>
          <p>
            <strong> Was ist die beste Lebenslauf-Vorlage?</strong> <br />
            Es gibt einfach keine "beste Lebenslauf-Vorlage" - jede/r
            PersonalerIn oder ArbeitgeberIn hat seine oder ihre eigenen
            Präferenzen. Daher emfpehlen wir dir, dich im Vorfeld gut über die
            Firma zu informieren, um zu erfahren, was ihre Werte sind.
          </p>
        </div>
      </div>
    </section>
    <!-- End faq-->
    <section class="about-section" id="about">
      <h2>Über uns</h2>
      <hr />
      <p>
        Herzlich willkommen auf unserer Website! Wir sind zwei
        Coding-Bootcamp-Studenten und haben im Rahmen unserer Kursarbeit eine
        Demo-Version eines webbasierten Lebenslauf-Generators entwickelt. Unsere
        Plattform ermöglicht es Benutzern, schnell und einfach professionelle
        Lebensläufe zu erstellen.
      </p>
      <p>
        Trotz des straffen Zeitplans haben wir eine funktionsfähige Version der
        Website fertiggestellt, wobei wir uns auf Layout-Design und Codierung
        für eine reibungslose Benutzererfahrung konzentrierten. Obwohl wir keine
        Grafiken erstellt haben, erforderte unser Projekt umfangreiche
        Recherche, Planung und Zusammenarbeit.
      </p>

      <p>
        Wir hoffen, dass Ihnen unsere
        <span clas="demo-version">Demo-Version</span> nützlich ist und wir
        planen, die Website weiter zu verbessern.
      </p>
      <router-link to="/cv-generator">
        <button class="start-button">Jetzt starten</button>
      </router-link>
    </section>
    <div class="quote-section">
      <blockquote class="quote">
        "Gib deiner Karriere den Kickstart - <br />mit deinem perfekten
        Lebenslauf !"
      </blockquote>
    </div>

    <section class="footer-social">
      <div class="n-icon n-icon-bootcamp">
        <a href="https://www.coding-bootcamps.eu/ " target="_blank">
          <img
            src="https://lh6.googleusercontent.com/-9VkRY4tLC7M/AAAAAAAAAAI/AAAAAAAAAAA/v-ZroSVGQPA/s39-p-k-no-ns-nd/photo.jpg"
            alt="logo"
        /></a>
      </div>
      <div class="n-icon n-icon-github">
        <a
          href="https://github.com/coding-bootcamps-eu/23-january-final-project"
          target="_blank"
        >
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/075/165/original/kindpng_1280233.png?1680588854"
            alt="Free Files Github - Github White Logo Png, Transparent Png@kindpng.com"
        /></a>
      </div>
    </section>
    <div class="line-footer"></div>
    <footer>
      <p>
        Coded by:

        <a
          class="footer-section"
          href="https://github.com/ephan95"
          target="_blank"
          >Katherina Ephan</a
        >
        <a
          class="footer-section"
          href="https://github.com/Murielcibra"
          target="_blank"
          >Muriel Cishek</a
        >
      </p>
      <a
        class="footer-section"
        href="https://storyset.com/online"
        target="_blank"
        >Online illustrations by Storyset</a
      >
    </footer>
  </body>
</template>

<style scoped>
* {
  font-family: "Roboto";
  scroll-behavior: smooth;
  list-style: none;
  text-decoration: none;
}

/* ----- Scroll Bar CSS ----- */
::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background: var(--bs-log);
}

::-webkit-scrollbar-thumb {
  background: var(--blue);
  border-radius: 12px;
  transition: all 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--bs-text-light);
}

*::selection {
  background: var(--bs-primary);
  color: #fff;
}

html {
  overflow-x: hidden;
  scroll-behavior: smooth;
}

body {
  background: var(--background-color);
}

h2 {
  font-size: 2.5rem;
  text-align: center;
}

hr {
  border: none;
  height: 8px;
  background-color: var(--bs-succes);
  width: 8%;
  margin: 0 auto;
  border-radius: 10px;
  margin-top: 10px;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--background-color);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.02);
  padding: 0.5rem 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
}

header .logo {
  display: flex;
}

.logo > p {
  color: var(--bs-log);
  padding-top: 0.5rem;
  font-size: 1.2rem;
  font-weight: 600;
}

.image_logo {
  margin-right: 1rem;
}

.navbar {
  display: flex;
}

header .navbar a {
  color: var(--bs-log);
  font-size: 1rem;
  font-weight: 500;
  margin-left: 2rem;
  transition: 0.3s;
}

header .navbar a:hover {
  color: var(--bs-primary);
}

header input {
  display: none;
}

.hero {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  align-items: center;
  min-height: 100vh;
  padding: 0 15%;
  padding-top: 6rem;
}

.hero-content {
  grid-column: 1 / 2;
  text-align: left;
}

.hero-content h1 {
  font-family: "Outfit";
  font-size: 3.8rem;
  font-weight: 800;
  line-height: 3.5rem;
  color: var(--bs-log);
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-content p {
  color: var(--bs-text-light);
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.hero-content button {
  font-size: 1.2rem;
  padding: 2rem 2rem;
  background-color: var(--bs-succes);
  color: #fff;
  border: none;
  border-radius: 35px;
  cursor: pointer;
  transition: all 0.3s linear;
}

.hero-image {
  grid-column: 2 / 3;
  text-align: center;
}

.hero-image img {
  max-width: 100%;
  height: auto;
}

.hero__button:hover {
  background-color: rgba(35, 49, 67, 0.8);
  transform: scale(1.1);
}

/*!--Layout section-->*/
.layout-section {
  min-height: 100vh;
  padding: 0 15%;
  padding-top: 6rem;
}

.layout-section > p {
  margin-top: 20px;
  text-align: center;
}

.image-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
}

.image-container {
  width: 30%;
  margin-bottom: 50px;
  text-align: left;
}

.image-container img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 20px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
}

.image-container h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

p > strong {
  color: black;
}

.image-container > p {
  font-size: 1rem;
  line-height: 1.5;
  color: var(--bs-text-light);
}

/*Layout section*/

/*Function section*/
.function-section {
  min-height: 100vh;
  padding: 0 15%;
  padding-top: 6rem;
}
.function-number {
  color: var(--bs-succes);
  font-size: 3rem;
}

.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 100px;
  grid-gap: 20px;
}

.image-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--bs-succes);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.option-2 {
  margin-top: 1.5rem;
}

.circle span {
  margin: 0 auto;
  font-size: 1.2rem;
  color: #fff;
  text-align: center;
}

.text {
  text-align: center;
  margin-top: 10px;
}

.text p {
  margin: 0;
  font-size: 14px;
}

.image-wrapper p {
  margin: 10px 0 0 0;
}

.image-wrapper img {
  display: block;
  max-width: 100%;
  height: auto;
}

/*FAQ section*/

.faq-section {
  min-height: 100vh;
  padding: 0 15%;
  padding-top: 8rem;
}

.faq-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 0rem;
  align-items: center;
}

.faq-image {
  grid-column: 1 / 2;
  text-align: center;
}

.faq-image img {
  max-width: 70%;
  height: auto;
}

.faq-questions {
  grid-column: 2 / 3;
  text-align: left;
}

.faq-questions > p {
  font-size: 1rem;
  color: var(--bs-text-light);
  margin-top: 20px;
}

/*aboutus section*/
.about-section {
  min-height: 100vh;
  padding: 0 31%;
  padding-top: 8rem;
}

.about-section > p {
  text-align: left;
  color: var(--bs-text-light);
  margin-top: 20px;
  font-size: 1rem;
  line-height: 1.5;
}

p > span {
  color: var(--bs-primary);
}

.start-button {
  display: block;
  margin: auto;
  font-size: 1.2rem;
  padding: 1.5rem 4rem;
  background-color: transparent;
  color: var(--bs-succes);
  border: var(--bs-succes) solid;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s linear;
  margin-top: 80px;
}

.start-button:hover {
  background-color: rgba(35, 49, 67, 0.8);
  border: transparent;
  transform: scale(1.1);
  color: white;
}

/*quote section*/
.quote-section {
  min-height: 60vh;
  padding: 0 15%;
}

/*footer section*/
.line-footer {
  padding-top: 1rem;
  background: var(--bs-info-gradient);
}

.footer-social {
  display: flex;
  text-align: center;
  padding: 10px;
  background: var(--bs-log);
  opacity: 0.8;
  justify-content: center;
  align-items: center;
}

.n-icon img {
  border-radius: 1rem;
  margin-left: 10px;
}

.n-icon-github img {
  width: auto;
  height: 40px;
}

.footer-section {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
}

blockquote {
  font-family: "Outfit";
  font-weight: 500;
  text-align: center;
  padding: 60px;
  font-size: 2rem;
  font-style: italic;
  background: var(--bs-info-gradient);
  color: #fff;
  border-radius: 1rem;
}

footer {
  position: relative;
  padding-top: 4rem;
  padding-bottom: 4rem;
  background: var(--bs-log);
}
footer > p {
  text-align: center;
  color: #fff;
  font-size: 0.8rem;
}

footer > a {
  margin-top: 10px;
  font-size: 0.8rem;
}
</style>
