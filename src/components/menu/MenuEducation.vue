<template>
  <div class="menu-contain">
    <div class="menu-wrapper">
      <div class="menu-form">
        <h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
          <span>Ausbildung</span>
        </h1>
        <div class="border-around">
          <p class="menu-full-width title-inside">
            Eintrag
            <span>
              <svg
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
            </span>
          </p>
          <p class="menu-full-width">
            <label for="">Abschluss</label>
            <input type="text" placeholder="Bachelor im Ingenieurwesen" />
          </p>
          <div class="menu-time">
            <p class="">
              <label for="">Bildungseinrichtung</label>
              <input type="email" placeholder="Technische Universität Berlin" />
            </p>

            <p class="">
              <label for="">Ort</label>
              <input type="text" placeholder="Berlin" />
            </p>
          </div>
          <div class="menu-time">
            <p class="">
              <label for="">Jahr</label>
              <input type="text" placeholder="2020" />
            </p>

            <p class="">
              <label for="">Monat</label>
              <input type="text" placeholder="Januar" />
            </p>

            <p class="">
              <label for="">Jahr</label>
              <input type="text" placeholder="2023" />
            </p>

            <p class="">
              <label for="">Monat</label>
              <input type="text" placeholder="Juni" />
            </p>
          </div>
          <p class="menu-full-width">
            <label class="menu-checkbox">
              <input type="checkbox" placeholder="" />
              <span class="menu-today-checkbox">Aktuell</span></label
            >
          </p>
        </div>
        <div class="menu-add-task-wrapper">
          <div class="menu-add-task">
            <button class="menu-add-new">
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
          <router-link to="/menu-experience">
            <p class="">
              <button class="menu-back-button">ZURÜCK</button>
            </p></router-link
          >
          <router-link to="/menu-languages">
            <p class="">
              <button class="menu-next-button">WEITER</button>
            </p></router-link
          >
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
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
}
h1 > span {
  align-items: center;
  padding-left: 0.8rem;
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
  grid-gap: 20px;
  align-items: center; /* Align menu-form items vertically center */
}

.menu-time {
  display: flex;
  grid-column: 1 / span 2;
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
  margin-bottom: 15rem;
}
</style>
