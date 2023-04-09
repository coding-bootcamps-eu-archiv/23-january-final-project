<template>
  <div class="a4-container">
    <div class="a4-content">
      <header>
        <div class="header">
          <div>
            <div class="cv-username">
              <h1>{{ this.$store.state.userData.firstname }}</h1>
              <p class="last-name">
                {{ this.$store.state.userData.lastname }}
              </p>
            </div>
            <div>
              <p class="jobtitle">
                {{ this.$store.state.userData.jobtitle }}
              </p>
            </div>
          </div>

          <div class="header-container">
            <div class="picture">
              <img
                src="https://mobimg.b-cdn.net/v3/fetch/67/674d9f64c8a3c0110654ebdd1e037503.jpeg"
                alt="user-picture"
              />
            </div>
            <div class="bar-element">
              <p>{{ this.$store.state.userData.phone }}</p>
              <p>{{ this.$store.state.userData.email }}</p>
              <p>{{ this.$store.state.userData.profileurl }}</p>
              <p class="bold">{{ this.$store.state.userData.street }},&nbsp;</p>
              <p class="bold">
                {{ this.$store.state.userData.zipcode }}&nbsp;{{
                  this.$store.state.userData.city
                }}
              </p>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div class="column-left">
          <section>
            <h3>Sprachen</h3>
            <div>
              <ul class="languages">
                <div class="language-element">
                  <li>Deutsch</li>
                  <p>Muttersprache</p>
                </div>
                <div class="language-element">
                  <li>Englisch</li>
                  <p>B4</p>
                </div>
                <div class="language-element">
                  <li>Französisch</li>
                  <p>Grundkenntnisse</p>
                </div>
              </ul>
            </div>
          </section>
          <section>
            <h3>Programme</h3>
            <div>
              <ul class="programs">
                <li>Beispiel</li>
                <li>Beispiel</li>
                <li>Beispiel</li>
                <li>Beispiel</li>
                <li>Beispiel</li>
                <li>Beispiel</li>
              </ul>
            </div>
          </section>
        </div>
        <div class="column-right">
          <section>
            <h3>Erfahrung</h3>
            <p class="content-date">00-2000 - 01.2000</p>
            <div>
              <h4 class="header-title">Job Titel : Unternehmen</h4>
              <p>Vorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </li>
                <li>
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </li>
              </ul>
            </div>

            <p class="content-date">00-2000 - 01.2000</p>
            <div>
              <h4 class="header-title">Job Titel : Unternehmen</h4>
              <p>Vorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </li>
                <li>
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </li>
              </ul>
            </div>
            <p class="content-date">00-2000 - 01.2000</p>
            <div>
              <h4 class="header-title">Job Titel : Unternehmen</h4>
              <p>Vorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </li>
                <li>
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </li>
              </ul>
            </div>
          </section>
          <section>
            <h3>Ausbildung</h3>
            <p class="content-date">00-2000 - 01.2000</p>
            <div>
              <h4 class="header-title education">Abschluss : Ort</h4>
              <ul>
                <li>Nunc dignissim risus id metus.</li>
              </ul>
            </div>
            <p class="content-date">00-2000 - 01.2000</p>
            <div>
              <h4 class="header-title education">Abschluss : Ort</h4>
              <ul>
                <li>Nunc dignissim risus id metus.</li>
              </ul>
            </div>
            <p class="content-date">00-2000 - 01.2000</p>
            <div>
              <h4 class="header-title education">Abschluss : Ort</h4>
              <ul>
                <li>Nunc dignissim risus id metus.</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "CVModern",
  props: {
    userData: {
      type: Object,
      required: false,
    },
  },
};
</script>

<style scoped>
* {
  font-weight: 400;
  font-family: "Pontano Sans", sans-serif;
}

h1 {
  font-size: 1rem;
}

.cv-username {
  text-transform: uppercase;
  line-height: 20px;
  letter-spacing: 0.225em;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.jobtitle {
  font-size: 0.463rem;
  text-transform: uppercase;
  letter-spacing: 0.525em;
  line-height: 12px;
}

.bar-element * {
  font-size: 0.5rem;
  letter-spacing: 0.17em;
  line-height: 10px;
}

.bar-element :nth-child(3) {
  margin-bottom: 0.3rem;
}

.bar-element {
  background-color: white;
  z-index: 10;
  padding: 0.313rem;
  align-self: flex-start;
}

.bold {
  font-weight: bolder;
}

.header {
  display: grid;
  grid-template-columns: 11.813rem 1fr;
}

.a4-content {
  padding: 3.5rem 3.125rem;
}

.header-container {
  display: flex;
  gap: 1rem;
}

.picture {
  width: 5.438rem;
  height: 13rem;
}

img {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 10;
}

.picture::after {
  position: absolute;
  content: "";
  width: 5.438rem;
  height: 13rem;
  left: 16.313rem;
  top: 2.313rem;
  border: solid 0.5px var(--cv-modern-color);
  z-index: 1;
}

li {
  list-style: none;
  position: relative;
}

main {
  display: grid;
  grid-template-columns: 11.813rem 1fr;
}

main h3 {
  font-size: 0.5rem;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 10px;
  letter-spacing: 0.52em;
  margin-bottom: 0.688rem;
}

ul {
  padding: 0;
}

.column-left {
  margin-right: 2.5rem;
}

section {
  margin-top: 2rem;
}

li::before {
  position: relative;
  content: "";
  display: inline-block;
  width: 0.1rem;
  height: 0.1rem;
  margin-right: 0.313rem;
  border-radius: 50%;
  background-color: var(--cv-modern-color);
  vertical-align: middle;
}

main li {
  font-size: 0.5rem;
}

.languages p {
  font-size: 0.5rem;
  opacity: 90%;
}

.language-element {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 0.625rem;
}

.programs li {
  margin-bottom: 0.625rem;
}

.content-date {
  font-size: 0.438rem;
  line-height: 9px;
  letter-spacing: 0.17em;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
}

.header-title {
  font-size: 0.438rem;
  line-height: 9px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  margin-bottom: 0.813rem;
}

.column-right h4 + p {
  font-size: 0.438rem;
  margin-bottom: 0.563rem;
}

.education {
  margin-bottom: 0.3rem;
}
</style>
