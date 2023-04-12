<template>
  <div class="menu-contain">
    <div class="menu-wrapper">
      <div class="scroll menu-form">
        <h1>Sprachen</h1>
        <p class="menu-full-width text-language">Die beliebtesten Sprachen</p>
        <p class="sub-text"></p>

        <div class="l container-languages">
          <div class="input-box">
            <label for="input1">
              <input
                type="submit"
                id="input1"
                name="input1"
                value="+ Englisch"
                placeholder="+ Englisch"
                @click="addNewLanguage('Englisch')"
            /></label>
          </div>

          <div class="input-box">
            <label for="input2"
              ><input
                type="submit"
                id="input2"
                value="+ Deutsch"
                name="input2"
                placeholder="+ Deutsch"
                @click="addNewLanguage('Deutsch')"
            /></label>
          </div>

          <div class="input-box">
            <label for="input3">
              <input
                type="submit"
                id="input3"
                name="input3"
                value="+ Spanisch"
                placeholder="+ Spanisch"
                @click="addNewLanguage('Spanisch')"
            /></label>
          </div>

          <div class="input-box">
            <label for="input4">
              <input
                type="submit"
                id="input4"
                name="input4"
                value="+ Französisch"
                placeholder="+ Französisch"
                @click="addNewLanguage('Französisch')"
            /></label>
          </div>

          <div class="input-box">
            <label for="input5"
              ><input
                type="submit"
                id="input5"
                name="input5"
                value="+ Italienisch"
                placeholder="+ Italienisch"
                @click="addNewLanguage('Italienisch')"
            /></label>
          </div>

          <div class="input-box">
            <label for="input6"
              ><input
                type="submit"
                id="input6"
                name="input6"
                value="+ Schwedisch"
                placeholder="+ Schwedisch"
                @click="addNewLanguage('Schwedisch')"
            /></label>
          </div>
        </div>
        <div class="border-around">
          <p class="menu-full-width text-language">
            Sprache<span class="text-language"> <br />Name der Sprache </span
            ><span class="menu-full-width">
              <input type="text" v-model="sonstiges" placeholder="Sonstiges" />
            </span>
          </p>
        </div>

        <div class="menu-add-task-wrapper">
          <div class="menu-add-task">
            <button class="menu-add-new" @click="addNewLanguage(sonstiges)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                class="bi bi-plus-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                />
              </svg>
              neue Sonstige Sprache hinzufügen
            </button>
          </div>
        </div>
        <!--This will only appear when the user click 
  the languages or add a new language to the array, only the this will render on the screen-->
        <div
          class="border-around"
          v-for="language in languages"
          v-bind:key="language.name"
        >
          <p class="menu-full-width text-language">
            Sprache<span class="text-language">
              <svg
                @click="deleteLanguage(language.name)"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"
                />
                <path
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"
                />
              </svg>
              <br />Name der Sprache
            </span>
            <label class="container-language-add" for="">
              <input
                class="box bigger remove-focus"
                type="text"
                v-model="language.name"
                style="color: var(--bs-log)"
                readonly="true" />
              <input class="box" type="button" value="A1" placeholder="A1" />
              <input class="box" type="button" value="A2" placeholder="A2" />
              <input class="box" type="button" value="B1" placeholder="B1" />
              <input class="box" type="button" value="B2" placeholder="B2" />
              <input class="box" type="button" value="C1" placeholder="C1" />
              <input class="box" type="button" value="C2" placeholder="C2"
            /></label>
          </p>
        </div>

        <form action="">
          <p class="">
            <button @click="$emit('back')" class="menu-back-button">
              ZURÜCK
            </button>
          </p>
          <p class="">
            <button @click="$emit('next')" class="menu-next-button">
              WEITER
            </button>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      languages: [],
      sonstiges: "",
    };
  },
  methods: {
    addNewLanguage(language) {
      let existingLanguage = this.languages.find(
        (lang) => lang.name === language
      );
      if (existingLanguage == null) {
        this.languages.push({ name: language });
      }
    },

    deleteLanguage(language) {
      this.languages = this.languages.filter(
        (langEntry) => langEntry.name != language
      );
    },
  },
};
</script>
<style scoped>
* {
  font-family: "roboto";
  box-sizing: border-box;
}

h1 {
  display: flex;
  color: white;
  padding-bottom: 20px;
  align-items: center;
  font-weight: 400;
  font-size: 1.2rem;
}

.sub-text {
  border-bottom: 2px solid var(--bs-succes);
  margin-top: 0.5rem;
}

label {
  color: white;
  font-weight: 400;
}

input:focus,
textarea:focus {
  outline: 2px solid var(--bs-primary);
}

input,
textarea,
button {
  width: 100%;
  border: 1px solid var(--bs-log);
}

form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
  align-items: center;
  margin-top: 10rem;
  gap: 10px;
}

.menu-add-task-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
.menu-add-task {
  grid-area: 2 / 3;
}
form input {
  background: #d9d9d9;
  border: 2px solid var(--bs-log);
  border-radius: 5px;
  padding: 0.5rem; /* Add padding to inputs */
}
::placeholder {
  color: var(--bs-log);
  opacity: 0.8;
}

input {
  background: #d9d9d9;
  border: 2px solid var(--bs-log);
  border-radius: 5px;
}
#input1[value="+ English"] {
  color: var(--bs-log);
}

#input2[value="+ Deutsch"] {
  color: var(--bs-log);
}
#input3[value="+ Spanisch"] {
  color: var(--bs-log);
}
#input4[value="+ Französich"] {
  color: var(--bs-log);
}
#input5[value="+ Italienisch"] {
  color: var(--bs-log);
}
#input6[value="+ Schwedisch"] {
  color: var(--bs-log);
}

p {
  color: #fff;
}

button,
input {
  padding: 0.5em;
  font-size: 0.8rem;
  color: var(--bs-log);
}
.text-language {
  font-size: 0.8rem;
}
.container-language-add {
  display: flex;
  justify-content: center;
}

.box {
  width: 50px;
  height: 30px;
  background-color: var(--bs-succes);
  margin: 2px;
  color: #fff;
}

.bigger {
  width: 90px;
  background-color: #d9d9d9;
}

::after.placeholder {
  font-size: 12px;
  color: var(--bs-log);
}

.menu-next-button {
  font-size: 1rem;
  padding: 1rem 1rem;
  background-color: var(--bs-succes);
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s linear;
}
.menu-next-button:hover,
.menu-next-button:focus {
  background: var(--bs-primary);
  outline: 0;
}
.menu-back-button {
  font-size: 1rem;
  padding: 1rem 1rem;
  background-color: transparent;
  color: #fff;
  border: 2px solid var(--bs-succes);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s linear;
}

.menu-back-button:hover,
.menu-back-button:focus {
  background: var(--bs-text-light);
  border: 2px solid var(--bs-text-light);
}
.menu-add-new {
  font-size: 0.8rem;
  padding: 0.5rem 0.5rem;
  background-color: transparent;
  color: #fff;
  border: 2px solid var(--bs-succes);
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s linear;
  margin-bottom: 2rem;
}
.container-languages {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  border-radius: 5px;
}

.input-box {
  display: flex;
  flex-direction: column;
  flex-basis: calc(33.33% - 10px);
}

.input-box label {
  margin-bottom: 5px;
}

.input-box input {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.bi-trash {
  position: relative;
  float: right;
  margin-right: 10px;
  width: 20px;
  height: 20px;
}
.scroll {
  height: 600px;
  overflow-y: scroll;
}
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #090c0f;
  padding: 8rem;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}
.remove-focus:focus {
  outline: none;
}
</style>
