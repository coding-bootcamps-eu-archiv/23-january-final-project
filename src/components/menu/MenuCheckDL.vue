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
          <span>Prüfen & Herunterladen</span>
          <br />
        </h1>

        <div class="menu-full-width">
          <p class="text-cvs">
            Bevor Sie Ihr endgültiges Dokument drucken, nehmen Sie sich einen
            Moment Zeit, um die Vorschau zu überprüfen, das richtige Foto
            auszuwählen und zu überprüfen, ob alle Informationen korrekt sind.
            Eine sorgfältige Prüfung der Details ist entscheidend, um einen
            bleibenden Eindruck zu hinterlassen.<br /><br />
            Überprüfen Sie also Ihre Arbeit und drücken Sie dann mit Vertrauen
            auf die Drucktaste!
          </p>
        </div>

        <form action="">
          <p class="">
            <button @click="$emit('back')" class="menu-back-button">
              ZURÜCK
            </button>
          </p>
          <p class="">
            <button class="menu-print-button">
              Zum Download
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-download"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                  />
                  <path
                    d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                  /></svg
              ></span>
            </button>
          </p>
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

input,
button {
  width: 100%;
  border: 1px solid var(--bs-log);
}

form {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  align-items: center;
}

p {
  color: #fff;
}

button,
input {
  padding: 0.5em;
  font-size: 0.8rem;
}

.menu-print-button {
  font-size: 1rem;
  padding: 1rem 1rem;
  background-color: var(--bs-primary);
  color: #fff;
  border: 1px solid var(--bs-primary);
  border-radius: 10px;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
}
.menu-print-button:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);
  border-color: white;
  border-width: 2px;
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

.text-cvs {
  font-size: 0.8em;
  font-weight: 300;
  text-align: left;
  padding-bottom: 25em;
}
</style>
