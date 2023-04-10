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
          <span>Vorlage wechseln</span>
          <br />
        </h1>
        <p class="menu-full-width text-layout">Vorlagen</p>
        <p class="sub-text"></p>

        <div class="container-layouts">
          <div class="grid-container">
            <div class="grid-item">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/074/869/original/Classic.png?1680470742"
                alt="Image 1"
              />
              <p class="text-cvs">„Classic“</p>
            </div>
            <div class="grid-item">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/074/871/original/Modern.png?1680470774"
                alt="Image 2"
              />
              <p class="text-cvs">„Modern“</p>
            </div>
            <div class="grid-item">
              <img
                src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/074/870/original/Creativ.png?1680470756"
                alt="Image 3"
              />
              <p class="text-cvs">„Kreativ“</p>
            </div>
          </div>
        </div>
        <p class="menu-full-width text-layout">Farben</p>
        <p class="sub-text"></p>
        <div>
          <p>
            <label class="container-colors" for="">
              <input class="box box-red" type="submit" value="" />
              <input class="box box-blue" type="submit" value="" />
              <input class="box box-geen" type="submit" value="" />
              <input class="box box-orange" type="submit" value="" />
              <input class="box box-grey" type="submit" value="" />
            </label>
          </p>
        </div>
        <p class="menu-full-width text-layout">Hinweis</p>
        <p class="sub-text"></p>
        <div class="container-decription">
          <p class="description-text">
            Lebenslauf Vorlagen „Modern“ <br />
            sind gerne gesehen in den Bereichen Tech, Design oder in Startups.
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
.sub-text {
  border-bottom: 2px solid var(--bs-succes);
  margin-top: 0.5rem;
  margin-bottom: 0.8rem;
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
  grid-gap: 20px;
  align-items: center; /* Align menu-form items vertically center */
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
input {
  padding: 0.5em;
  font-size: 0.8rem;
}
.text-layout {
  font-size: 0.8rem;
}
.container-colors {
  display: flex;
  margin-bottom: 2em;
}
.container-decription {
  margin-bottom: 6em;
}
.description-text {
  font-size: 0.8rem;
}
.box {
  width: 40px;
  height: 40px;
  margin: 2px;
  color: #fff;
  border: 4px solid var(--bs-log);
  border-radius: 10px;
}
.box-orange {
  background-color: rgb(216, 161, 59);
}
.box-geen {
  background-color: #89cb61;
}
.box-blue {
  background-color: #618ccb;
}
.box-red {
  background-color: #cb6161;
}
.box-grey {
  background-color: grey;
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

.container-layouts {
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  border-radius: 5px;
}

.grid-container {
  display: flex;
  flex-direction: row;
  gap: 8px;
}

.grid-item {
  flex: 1;
  width: 95px;
  height: 130px;
  text-align: center;
  margin-bottom: 2.5em;
}
.grid-item:hover {
  border: 4px solid var(--bs-succes);
  cursor: pointer;
}
img {
  width: 95px;
  height: auto;
}
.text-cvs {
  font-size: 0.8em;
  font-weight: 300;
  text-align: center;
}
</style>
