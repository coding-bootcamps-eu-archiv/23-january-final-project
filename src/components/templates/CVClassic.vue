<template>
  <div class="a4-container printable">
    <div class="a4-content">
      <header>
        <h1>
          {{ this.$store.state.userData.firstname }}
          {{ this.$store.state.userData.lastname }}
        </h1>
        <div class="adress">
          <p>{{ this.$store.state.userData.street }}</p>
          <span>|</span>
          <p>
            {{ this.$store.state.userData.zipcode }}&nbsp;{{
              this.$store.state.userData.city
            }}
          </p>
          <span>|</span>
          <p>{{ this.$store.state.userData.email }}</p>
          <span>|</span>
          <p>{{ this.$store.state.userData.phone }}</p>
          <span>|</span>
          <p>{{ this.$store.state.userData.jobtitle }}</p>
        </div>
      </header>
      <main>
        <h2>Lebenslauf</h2>
        <section>
          <h3>Persönliche Daten</h3>
          <div class="grid-container">
            <div>
              <div class="personal-data">
                <p>Geburtsdatum/-ort</p>
                <p>
                  {{ this.$store.state.userData.birthdate }} in
                  {{ this.$store.state.userData.birthcity }}
                </p>
                <p>Staatsangehörigkeit</p>
                <p>{{ this.$store.state.userData.nationality }}</p>
                <p>Familienstand</p>
                <p>{{ this.$store.state.userData.marriage }}</p>
              </div>
            </div>
            <div class="picture">
              <img
                src="https://mobimg.b-cdn.net/v3/fetch/67/674d9f64c8a3c0110654ebdd1e037503.jpeg"
                alt="user-picture"
              />
            </div>
          </div>
        </section>
        <section>
          <h3>Berufserfahrung</h3>
          <div class="content-grid">
            <p id="jobtitle-01">00-2000 - 01.2000</p>
            <div>
              <h4 id="jobtitle-01" class="header-job">
                Job Titel - Unternehmen
              </h4>
              <ul id="jobtitle-01">
                <li>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </li>
                <li>Aliquam tincidunt mauris eu risus.</li>
                <li>Vestibulum auctor dapibus neque.</li>
                <li>Nunc dignissim risus id metus.</li>
              </ul>
            </div>

            <p id="jobtitle-02">00-2000 - 01.2000</p>
            <div>
              <h4 id="jobtitle-02" class="header-job">
                Job Titel - Unternehmen
              </h4>
              <ul id="jobtitle-02">
                <li>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </li>
                <li>Aliquam tincidunt mauris eu risus.</li>
                <li>Vestibulum auctor dapibus neque.</li>
                <li>Nunc dignissim risus id metus.</li>
              </ul>
            </div>
            <p id="jobtitle-03">00-2000 - 01.2000</p>
            <div>
              <h4 id="jobtitle-03" class="header-job">
                Job Titel - Unternehmen
              </h4>
              <ul id="jobtitle-03">
                <li>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </li>
                <li>Aliquam tincidunt mauris eu risus.</li>
                <li>Vestibulum auctor dapibus neque.</li>
                <li>Nunc dignissim risus id metus.</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <h3>Ausbildung</h3>
          <div class="content-grid">
            <p id="education-01">00-2000 - 01.2000</p>
            <div>
              <h4 id="education-01">Horem ipsum dolor sit amet</h4>
              <ul id="education-01">
                <li>Nunc dignissim risus id metus.</li>
              </ul>
            </div>

            <p id="education-02">00-2000 - 01.2000</p>
            <div>
              <h4 id="education-02">Horem ipsum dolor sit amet</h4>
              <ul id="education-02">
                <li>Nunc dignissim risus id metus.</li>
              </ul>
            </div>

            <p id="education-03">00-2000 - 01.2000</p>
            <div>
              <h4 id="education-03">Horem ipsum dolor sit amet</h4>
              <ul id="education-03">
                <li>Nunc dignissim risus id metus.</li>
              </ul>
            </div>

            <p id="education-03">00-2000 - 01.2000</p>
            <div>
              <h4 id="education-03">Horem ipsum dolor sit amet</h4>
              <ul id="education-03">
                <li>Nunc dignissim risus id metus.</li>
              </ul>
            </div>
          </div>
        </section>
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
  font-family: "Times New Roman", Times, serif;
  line-height: 1.2;
}

p {
  font-size: 0.525rem;
}

li {
  font-size: 0.525rem;
}

h1 {
  font-size: 0.6rem;
  font-weight: bold;
}

.adress {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  max-width: 100%;
  margin-bottom: 2.5rem;
}

h2 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

h3 {
  font-size: 0.775rem;
  text-decoration: underline;
  margin-block: 1.625rem;
}

.personal-data {
  display: grid;
  grid-template-columns: 9.75rem auto;
  max-width: 70%;
  gap: 0.563rem;
}

.picture img {
  width: 7.125rem;
  height: 9.125rem;
  object-fit: cover;
  position: absolute;
  right: 4.313rem;
  top: 7.313rem;
}

@media print {
  .picture img {
    right: 12.5rem;
  }
}

.content-grid {
  display: grid;
  grid-template-columns: 9.75rem auto;
  row-gap: 1.425rem;
}

h4 {
  margin-bottom: 0.625rem;
  font-size: 0.54rem;
}
</style>
