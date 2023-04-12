<template>
  <div class="menu-contain">
    <div class="menu-wrapper">
      <div class="scroll menu-form">
        <h1>Ausbildung</h1>
        <div
          class="border-around"
          v-for="properties in entriesEducation"
          v-bind:key="properties.id"
        >
          <p
            class="menu-full-width title-inside"
            @click="groupCollapsed(properties.id)"
          >
            Eintrag
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-trash"
                viewBox="0 0 16 16"
                @click="deleteJob(properties.id)"
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
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
                v-show="!properties.collapsed"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-chevron-up"
                viewBox="0 0 16 16"
                v-show="properties.collapsed"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                />
              </svg>
            </span>
          </p>
          <div
            class="collaped-menu menu-full-width"
            v-show="!properties.collapsed"
          >
            <p class="menu-full-width">
              <label for="">Abschluss</label>
              <input
                type="text"
                placeholder="Bachelor im Ingenieurwesen"
                name="degree"
                v-bind:id="properties.id"
              />
            </p>
            <div class="menu-time">
              <p class="">
                <label for="">Bildungseinrichtung</label>
                <input
                  type="email"
                  placeholder="Technische Universität Berlin"
                  name="school"
                  v-bind:id="properties.id"
                />
              </p>

              <p class="">
                <label for="">Ort</label>
                <input
                  type="text"
                  placeholder="Berlin"
                  name="edCity"
                  v-bind:id="properties.id"
                />
              </p>
            </div>
            <div class="menu-time">
              <p class="">
                <label for="">Jahr</label>
                <input
                  type="text"
                  placeholder="2020"
                  name="edYearStart"
                  v-bind:id="properties.id"
                />
              </p>

              <p class="">
                <label for="">Monat</label>
                <input
                  type="text"
                  placeholder="Januar"
                  name="edMonthStart"
                  v-bind:id="properties.id"
                />
              </p>

              <p class="">
                <label for="">Jahr</label>
                <input
                  type="text"
                  placeholder="2023"
                  name="edYearEnd"
                  v-bind:id="properties.id"
                />
              </p>

              <p class="">
                <label for="">Monat</label>
                <input
                  type="text"
                  placeholder="Juni"
                  name="edMonthEnd"
                  v-bind:id="properties.id"
                />
              </p>
            </div>
            <p class="menu-full-width">
              <label class="menu-checkbox">
                <input
                  type="checkbox"
                  placeholder=""
                  v-bind:id="properties.id"
                />
                <span class="menu-today-checkbox">Aktuell</span></label
              >
            </p>
          </div>
        </div>
        <div class="menu-add-task-wrapper">
          <div class="menu-add-task">
            <button class="menu-add-new" @click="addNewJob">
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
      entriesEducation: [{ id: +new Date(), collapsed: false }],
    };
  },
  methods: {
    groupCollapsed(id) {
      this.entriesEducation.forEach((entry) => (entry.collapsed = true));
      let entry = this.entriesEducation.find(
        (currentEntry) => currentEntry.id === id
      );
      if (entry != null) {
        entry.collapsed = !entry.collapsed;
      }
    },
    addNewJob() {
      if (this.entriesEducation.length == 3) {
        alert("You can only add a maximum of 3 Education");
      } else {
        this.entriesEducation.forEach((entry) => (entry.collapsed = true));
        this.entriesEducation.push({ id: +new Date(), collapsed: false });
      }
    },
    deleteJob(id) {
      if (this.entriesEducation.length > 1)
        this.entriesEducation = this.entriesEducation.filter(
          (entry) => entry.id != id
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

.title-inside {
  display: flex;
  align-items: center;
}
.title-inside > span {
  padding-left: 0.6rem;
}
label {
  color: white;
  font-weight: 400;
  font-size: 0.8rem;
}
input:focus {
  outline: 1px solid var(--bs-primary);
}
input,
button {
  width: 100%;
  border: 1px solid var(--bs-log);
}
form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  align-items: center;
  margin-top: 5rem;
}
.menu-time {
  display: flex;
  grid-column: 1 / span 2;
  grid-gap: 8px;
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
form input {
  background: #d9d9d9;
  border: 2px solid var(--bs-log);
  border-radius: 5px;
  padding: 0.5rem;
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
p {
  color: #fff;
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
  margin-bottom: 4rem;
}
.bi-chevron-up {
  position: relative;
  left: 12rem;
  float: right;
  margin-right: 10px;
  width: 20px;
  height: 20px;
}
.bi-chevron-down {
  position: relative;
  left: 11rem;
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
</style>
