<template>
  <div class="menu-contain">
    <div class="menu-wrapper">
      <div class="scroll menu-form">
        <h1>Ausbildung</h1>
        <v-expansion-panels>
          <v-expansion-panel
            class="border-around"
            v-for="(panel, index) in panels"
            :key="index"
          >
            <v-expansion-panel-header
              @click="selectedPanel = selectedPanel === index ? null : index"
            >
              <p class="menu-full-width title-inside text-subtitle">
                Eintrag<span>
                  <svg
                    @click="deleteEducation(panel)"
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

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="bi bi-chevron-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                  </svg>
                </span>
              </p>
            </v-expansion-panel-header>
            <v-expansion-panel-content
              v-if="selectedPanel === index"
              class="menu-full-width"
            >
              <label for="">Abschluss</label>
              <v-text-field
                variant="filled"
                v-model="panel.degree"
                placeholder="Bachelor im Ingenieurwesen"
                class="text-input"
                dense
              />
              <v-row dense>
                <v-col>
                  <p class="">
                    <label for="">Bildungseinrichtung</label>
                    <v-text-field
                      variant="filled"
                      v-model="panel.schoolName"
                      placeholder="Technischr Universität Berlin"
                      class="text-input"
                      dense
                    />
                  </p>
                </v-col>
                <v-col cols="4">
                  <p class="">
                    <label for="">Ort</label>

                    <v-text-field
                      variant="filled"
                      v-model="panel.place"
                      placeholder="Berlin"
                      class="text-input"
                      dense
                    /></p></v-col
              ></v-row>
              <v-row dense>
                <v-col>
                  <p class="">
                    <label for="">Jahr</label>
                    <v-text-field
                      variant="filled"
                      v-model="panel.yearStart"
                      placeholder="2023"
                      class="text-input"
                    /></p
                ></v-col>
                <v-col>
                  <p class="">
                    <label for="">Monat</label>
                    <v-text-field
                      variant="filled"
                      v-model="panel.monthStart"
                      type="text"
                      placeholder="Januar"
                      class="text-input"
                    /></p
                ></v-col>
                <v-col>
                  <p class="">
                    <label for="">Jahr</label>
                    <v-text-field
                      variant="filled"
                      v-model="panel.yearEnd"
                      type="text"
                      placeholder="2023"
                      class="text-input"
                    />
                  </p>
                </v-col>
                <v-col>
                  <p class="">
                    <label for="">Monat</label>
                    <v-text-field
                      variant="filled"
                      v-model="panel.monthEnd"
                      type="text"
                      placeholder="Juni"
                      class="text-input"
                    />
                  </p>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col> </v-col>

                <v-col cols="5">
                  <p class="mb-4 menu-full-width">
                    <label class="menu-checkbox">
                      <input type="checkbox" placeholder="" />
                      <span class="menu-today-checkbox">Aktuell</span></label
                    >
                  </p>
                </v-col></v-row
              >
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

        <div class="menu-add-task-wrapper">
          <div class="menu-add-task">
            <button class="menu-add-new" @click="addNewEducation">
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
              Weiteren Abschluss hinzüfugen
            </button>
          </div>
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
      panels: [
        {
          id: +new Date(),
          job: "",
          company: "",
          place: "",
          yearStart: "",
          monthStart: "",
          yearEnd: "",
          monthEnd: "",
        },
      ],
      selectedPanel: null,
    };
  },
  methods: {
    addNewEducation() {
      if (this.panels.length == 3) {
        alert("This demo version only allows a max of 3 Education titles.");
      } else {
        this.panels.push({
          id: +new Date(),
          degree: "",
          schoolName: "",
          place: "",
          yearStart: "",
          monthStart: "",
          yearEnd: "",
          monthEnd: "",
        });
      }
    },
    deleteEducation(panel) {
      this.panels = this.panels.filter((item) => item.id !== panel.id);
    },
  },
};
</script>
<style scoped>
* {
  font-family: "roboto";
  box-sizing: border-box;
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

h1 {
  display: flex;
  color: white;
  padding-bottom: 20px;
  align-items: center;
  font-weight: 400;
  font-size: 1.2rem;
}

.title-inside {
  display: flex;
  align-items: center;
  color: #fff;
}

.title-inside > span {
  padding-left: 0.6rem;
}

label {
  color: white;
  font-weight: 400;
  font-size: 0.8rem;
}

input,
button {
  width: 100%;
  border: 1px solid var(--bs-log);
}

form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  align-items: center; /* Align menu-form items vertically center */
}

.menu-checkbox {
  display: flex;
  align-items: center;
}
.menu-checkbox input[type="checkbox"] {
  height: 1rem;
  width: 1rem;
  margin-right: 0.5rem;
}

.menu-today-checkbox {
  font-size: 0.6rem;
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

.text-input::v-deep .v-input__control {
  background: #d9d9d9;
  border: 2px solid var(--bs-log);
  border-radius: 5px;
}
.text-input::v-deep .v-input__control input::placeholder {
  color: var(--bs-log);
  opacity: 0.8;
  font-size: 0.8rem;
}

p {
  color: var(--bs-log);
  font-size: 0.8rem;
}

button,
input,
textarea {
  padding: 0.5em;
  font-size: 0.8rem;
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
  margin-bottom: 22rem;
}
.bi-chevron-up {
  position: relative;
  left: 11rem;
  float: right;
  margin-right: 10px;
  width: 20px;
  height: 20px;
}
.v-expansion-panel {
  background: none;
}
</style>
