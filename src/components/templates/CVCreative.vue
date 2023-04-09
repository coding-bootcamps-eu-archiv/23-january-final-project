<template>
  <div class="a4-container">
    <div class="a4-content">
      <header>
        <div class="cv-username">
          <h1>{{ this.$store.state.userData.firstname }}</h1>
          <p class="first-name-decoration">
            {{ this.$store.state.userData.firstname }}
          </p>
          <p class="last-name">{{ this.$store.state.userData.lastname }}</p>
        </div>
        <div class="adress">
          <p id="user-street">{{ this.$store.state.userData.street }},&nbsp;</p>
          <p id="user-city">{{ this.$store.state.userData.city }}</p>
        </div>
        <div class="bar-container">
          <div class="bar-element">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7ZM6.5625 0.941984C5.97675 1.12112 5.39404 1.66007 4.91115 2.56549C4.75997 2.84895 4.62262 3.16192 4.50187 3.49999H6.5625V0.941984ZM3.57835 3.49999C3.73446 3.01121 3.92285 2.55919 4.13909 2.15372C4.29547 1.86051 4.47005 1.58586 4.66135 1.33731C3.57104 1.78809 2.63925 2.54461 1.97285 3.49999H3.57835ZM3.06989 6.56249C3.09592 5.79527 3.18998 5.05898 3.34251 4.37499H1.46442C1.14566 5.04601 0.945311 5.78418 0.890381 6.56249H3.06989ZM4.241 4.37499C4.07755 5.04435 3.97383 5.78181 3.94543 6.56249H6.5625V4.37499H4.241ZM7.4375 4.37499V6.56249H10.0546C10.0262 5.78181 9.92244 5.04435 9.75899 4.37499H7.4375ZM3.94543 7.43749C3.97383 8.21818 4.07755 8.95564 4.241 9.62499H6.5625V7.43749H3.94543ZM7.4375 7.43749V9.62499H9.75899C9.92244 8.95564 10.0262 8.21818 10.0546 7.43749H7.4375ZM4.50187 10.5C4.62262 10.8381 4.75997 11.151 4.91115 11.4345C5.39404 12.3399 5.97675 12.8789 6.5625 13.058V10.5H4.50187ZM4.66136 12.6627C4.47005 12.4141 4.29547 12.1395 4.13909 11.8463C3.92285 11.4408 3.73446 10.9888 3.57835 10.5H1.97285C2.63925 11.4554 3.57104 12.2119 4.66136 12.6627ZM3.34251 9.62499C3.18998 8.941 3.09592 8.20472 3.06989 7.43749H0.890381C0.945311 8.21581 1.14566 8.95398 1.46442 9.62499H3.34251ZM9.33864 12.6627C10.429 12.2119 11.3607 11.4554 12.0271 10.5H10.4216C10.2655 10.9888 10.0771 11.4408 9.8609 11.8463C9.70452 12.1395 9.52994 12.4141 9.33864 12.6627ZM7.4375 10.5V13.058C8.02325 12.8789 8.60595 12.3399 9.08884 11.4345C9.24002 11.151 9.37737 10.8381 9.49812 10.5H7.4375ZM10.6575 9.62499H12.5356C12.8543 8.95398 13.0547 8.21581 13.1096 7.43749H10.9301C10.9041 8.20472 10.81 8.941 10.6575 9.62499ZM13.1096 6.56249C13.0547 5.78418 12.8543 5.04601 12.5356 4.37499H10.6575C10.81 5.05898 10.9041 5.79527 10.9301 6.56249H13.1096ZM9.8609 2.15372C10.0771 2.55919 10.2655 3.01121 10.4216 3.49999H12.0271C11.3607 2.54461 10.429 1.78809 9.33864 1.33731C9.52994 1.58586 9.70452 1.86051 9.8609 2.15372ZM9.49812 3.49999C9.37737 3.16192 9.24002 2.84895 9.08884 2.56549C8.60595 1.66007 8.02325 1.12112 7.4375 0.941984V3.49999H9.49812Z"
                fill="currentColor"
              />
            </svg>
            <p>{{ this.$store.state.userData.profileurl }}</p>
          </div>
          <div class="bar-element">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.88477 0.511076C2.62689 -0.231039 3.85149 -0.154797 4.49583 0.673634L6.28954 2.97983C6.6187 3.40304 6.73502 3.95409 6.60498 4.47423L6.05772 6.66329C5.99994 6.8944 6.06766 7.13888 6.2361 7.30732L8.69268 9.7639C8.86113 9.93235 9.1056 10.0001 9.33671 9.94229L11.5258 9.39502C12.0459 9.26499 12.597 9.3813 13.0202 9.71047L15.3264 11.5042C16.1548 12.1485 16.231 13.3731 15.4889 14.1152L14.455 15.1492C13.7153 15.8889 12.6089 16.2137 11.5778 15.8512C9.01754 14.9511 6.61438 13.4774 4.56849 11.4315C2.5226 9.38562 1.04895 6.98246 0.148838 4.42225C-0.213682 3.39112 0.11113 2.28472 0.85085 1.545L1.88477 0.511076Z"
                fill="currentColor"
              />
            </svg>
            <p>{{ this.$store.state.userData.phone }}</p>
          </div>
          <div class="bar-element">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.0495854 3.55544C0.25173 2.66484 1.04822 2 2 2H14C14.9518 2 15.7483 2.66484 15.9504 3.55544L8 8.41403L0.0495854 3.55544ZM0 4.69708V11.8006L5.80319 8.24348L0 4.69708ZM6.7614 8.82905L0.191871 12.8559C0.512604 13.5323 1.20168 14 2 14H14C14.7983 14 15.4874 13.5323 15.8081 12.8559L9.2386 8.82905L8 9.58597L6.7614 8.82905ZM10.1968 8.24348L16 11.8006V4.69708L10.1968 8.24348Z"
                fill="currentColor"
              />
            </svg>

            <p>{{ this.$store.state.userData.email }}</p>
          </div>
          <div class="picture">
            <img
              src="https://mobimg.b-cdn.net/v3/fetch/67/674d9f64c8a3c0110654ebdd1e037503.jpeg"
              alt="user-picture"
            />
          </div>
        </div>
      </header>
      <main>
        <div>
          <section>
            <div class="section-element">
              <div class="white-box-headline-container">
                <h3 class="white-box-headline">Erfahrung</h3>
              </div>
              <div class="white-box">
                <p id="jobtitle-01" class="content-date">00-2000 - 01.2000</p>
                <div>
                  <h4 id="jobtitle-01" class="header-job">
                    Job Titel : Unternehmen
                  </h4>
                  <p>
                    Vorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <ul id="jobtitle-01">
                    <li>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </li>
                    <li>
                      Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos.
                    </li>
                  </ul>
                </div>

                <p id="jobtitle-02" class="content-date">00-2000 - 01.2000</p>
                <div>
                  <h4 id="jobtitle-02" class="header-job">
                    Job Titel : Unternehmen
                  </h4>
                  <p>
                    Vorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <ul id="jobtitle-02">
                    <li>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </li>
                    <li>
                      Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos.
                    </li>
                  </ul>
                </div>
                <p id="jobtitle-03" class="content-date">00-2000 - 01.2000</p>
                <div>
                  <h4 id="jobtitle-03" class="header-job">
                    Job Titel : Unternehmen
                  </h4>
                  <p>
                    Vorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <ul id="jobtitle-03">
                    <li>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    </li>
                    <li>
                      Class aptent taciti sociosqu ad litora torquent per
                      conubia nostra, per inceptos himenaeos.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <div>
            <section>
              <div class="white-box-headline-container">
                <h3 class="white-box-headline">Sprachen</h3>
              </div>
              <div class="content-grid white-box">
                <ul class="languages">
                  <li>Deutsch</li>
                  <p>Muttersprache</p>
                  <li>Englisch</li>
                  <p>B4</p>
                  <li>Französisch</li>
                  <p>Grundkenntnisse</p>
                </ul>
              </div>
            </section>
          </div>
        </div>
        <div>
          <section>
            <div class="white-box-headline-container">
              <h3 class="white-box-headline">Ausbildung</h3>
            </div>
            <div class="content-grid white-box">
              <p id="education-01" class="content-date">00-2000 - 01.2000</p>
              <div>
                <h4 id="education-01">Abschluss : Ort</h4>
                <ul id="education-01">
                  <li>Nunc dignissim risus id metus.</li>
                </ul>
              </div>

              <p id="education-02" class="content-date education-date">
                00-2000 - 01.2000
              </p>
              <div>
                <h4 id="education-02">Abschluss : Ort</h4>
                <ul id="education-02">
                  <li>Nunc dignissim risus id metus.</li>
                </ul>
              </div>

              <p id="education-03" class="content-date education-date">
                00-2000 - 01.2000
              </p>
              <div>
                <h4 id="education-03">Abschluss : Ort</h4>
                <ul id="education-03">
                  <li>Nunc dignissim risus id metus.</li>
                </ul>
              </div>

              <p id="education-03" class="content-date education-date">
                00-2000 - 01.2000
              </p>
              <div>
                <h4 id="education-03">Abschluss : Ort</h4>
                <ul id="education-03">
                  <li>Nunc dignissim risus id metus.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div class="color-box-headline-container">
              <div class="color-box-headline">
                <h3>Programme</h3>
              </div>
            </div>
            <div class="color-box">
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
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "CVClassic",
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
  font-family: "Baloo Thambi 2";
  line-height: 1.2rem;
}

ul {
  padding: 0;
}

.cv-username {
  display: flex;
  flex-direction: column;
  -webkit-text-stroke: 0.13rem;
  text-transform: uppercase;
}

h1 {
  z-index: 2;
  max-width: 50%;
  font-weight: 800;
  font-size: 2.5rem;
  line-height: 103.9%;
  text-align: right;
  letter-spacing: 0.09em;
  margin-top: 1.2rem;
  margin-bottom: 0.5rem;
}

.last-name {
  text-align: right;
  max-width: 50%;
  font-weight: 500;
  font-size: 2rem;
  letter-spacing: 0.09em;
  margin-bottom: 0.5rem;
}

.first-name-decoration {
  position: absolute;
  z-index: 1;
  top: 3.4rem;
  left: 4.2rem;
  color: white;
  text-shadow: -1.5px -1.5px 0 var(--cv-color), 0 -1.5px 0 var(--cv-color),
    1.5px -1.5px 0 var(--cv-color), 1.5px 0 0 var(--cv-color),
    1.5px 1.5px 0 var(--cv-color), 0 1.5px 0 var(--cv-color),
    -1.5px 1.5px 0 var(--cv-color), -1.5px 0 0 var(--cv-color);
  width: 14.813rem;
  font-weight: 800;
  font-size: 2.5rem;
  line-height: 103.9%;
  text-align: right;
  letter-spacing: 0.09em;
}

.adress {
  display: flex;
  max-width: 50%;
  justify-content: flex-end;
  margin-top: 0.3rem;
}

.adress p {
  font-size: 0.5rem;
  line-height: 103.9%;
  letter-spacing: 0.1em;
}

.picture {
  position: absolute;
  top: 2.688rem;
  right: 6.9rem;
  display: inline-block;
  border-radius: 50%;
  border: 10px solid white;
  box-shadow: 0px 0px 0px 1.5px var(--cv-color);
  overflow: hidden;
  width: 7.75rem;
  height: 7.75rem;
}

.picture img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

svg {
  color: var(--cv-color);
}

.bar-container {
  margin-top: 2.688rem;
  display: flex;
  justify-content: center;
  gap: 2.7rem;
}

.bar-container p {
  font-size: 0.5rem;
}

.bar-element {
  display: flex;
  align-items: center;
  gap: 0.2em;
}

main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2.375rem;
  grid-auto-rows: minmax(100px, auto);
}

.white-box {
  border: 1px solid black;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
}

.white-box-headline {
  position: relative;
  bottom: -1rem;
  background-color: var(--cv-elements);
  display: inline-block;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 0.75;
  font-weight: 500;
  letter-spacing: 0.23em;
}

.white-box-headline-container {
  display: flex;
  justify-content: center;
}

.content-date {
  font-size: 0.438rem;
  letter-spacing: 0.17em;
  margin-block: 1.438rem 0.28rem;
}

.white-box h4 {
  font-size: 0.438rem;
  text-transform: uppercase;
  letter-spacing: 0.23em;
  margin-bottom: 0.28rem;
}

p,
li {
  font-size: 0.438rem;
  letter-spacing: -0.035em;
  list-style: none;
  line-height: 11px;
}

.white-box li {
  padding-left: 0.25rem;
}

li::before {
  position: relative;
  content: "";
  display: inline-block;
  width: 0.1rem;
  height: 0.1rem;
  margin-right: 0.313rem;
  border-radius: 50%;
  background-color: black;
  vertical-align: middle;
}

.education-date {
  margin-top: 0.688rem;
}

.languages {
  margin-top: 0.8rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.languages li {
  list-style: none;
}

.languages p {
  opacity: 90%;
}

.color-box-headline-container {
  display: flex;

  justify-content: center;
}

.color-box-headline {
  position: relative;
  bottom: -1rem;
  display: inline-block;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 0.75;
  font-weight: 500;
  letter-spacing: 0.23em;
  border: solid 1px black;
}

.color-box li {
  padding-left: 0.25rem;
}

.color-box {
  background-color: var(--cv-elements);
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  margin-top: 0.3em;
}

.programs li,
.languages li {
  line-height: 210.12%;
}
</style>
