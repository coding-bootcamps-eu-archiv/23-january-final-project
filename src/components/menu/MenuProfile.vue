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
          <span>Profil</span>
        </h1>
        <form action="">
          <p>
            <label for="">Vorname</label>
            <input type="text" placeholder="Maria" name="firstname" />
          </p>
          <div class="avatar-upload">
            <input type="file" id="avatar-input" />
            <label for="avatar-input">
              <img
                src="https://di262mgurvkjm.cloudfront.net/42228752-4801-45bd-b22c-b9ad2e2cc0b5/2020_Bon_Cadeau_Photographe_Lausanne_Studio_Photo-3_uxga.jpg"
                alt="Avatar"
              />
            </label>
          </div>

          <p>
            <label for="">Nachname</label>
            <input type="text" placeholder="Mustermann" name="lastname" />
          </p>
          <p class="menu-full-width">
            <label for="">Berufsbezeichnung</label>
            <input
              type="text"
              placeholder="Frontend Developer"
              name="jobtitle"
            />
          </p>

          <p class="menu-full-width">
            <label for="">E-mail-Address</label>
            <input
              type="email"
              placeholder="mariamustermann@email.de"
              name="email"
            />
          </p>

          <p class="menu-full-width">
            <label for="">URL</label>
            <input
              type="text"
              placeholder="www.meinportfolio.de"
              name="profileurl"
            />
          </p>
          <p class="menu-full-width">Adresse</p>
          <p class="">
            <label for="">Straße</label>
            <input type="text" placeholder="Musterstraße" name="street" />
          </p>
          <p class="">
            <label for="">Nr.</label>
            <input type="text" placeholder="12" name="nr" />
          </p>

          <p class="">
            <label for="">PLZ</label>
            <input type="text" placeholder="12345" name="zipcode" />
          </p>

          <p class="">
            <label for="">Ort</label>
            <input type="text" placeholder="Musterstadt" name="city" />
          </p>

          <p class="menu-full-width">
            <label for="">Telefon</label>
            <input type="text" placeholder="01234-5678900" name="phone" />
          </p>

          <p class="menu-full-width">
            <button @click="$emit('next')">WEITER</button>
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
}
* {
  box-sizing: border-box;
}

h1,
ul {
  margin: 0;
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

label {
  color: white;
  font-weight: 400;
}

input:focus,
textarea:focus {
  outline: 1px solid var(--bs-primary);
}

input,
textarea,
button {
  width: 100%;
  border: 1px solid var(--bs-log);
}

form label {
  display: block;
  margin-bottom: 0.5rem; /* Add margin to bottom to separate labels from inputs */
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

form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}
form label {
  display: block;
}

form input {
  background: #d9d9d9;
  border: 2px solid var(--bs-log);
  border-radius: 5px;
}
::placeholder {
  color: var(--bs-log);
  opacity: 0.8;
}
form p {
  margin: 0;
  color: #fff;
}

.avatar-upload {
  border-radius: 50%;
  overflow: hidden;
  grid-row: 1 / span 2;
}

.avatar-upload input[type="file"] {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.avatar-upload label {
  cursor: pointer;
}

.avatar-upload img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
button,
input {
  padding: 0.5em;
  font-size: 0.8rem;
}

button {
  margin-top: 1em;
  font-size: 1rem;
  padding: 1rem 1rem;
  background-color: var(--bs-succes);
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s linear;
}
button:hover,
button:focus {
  background: var(--bs-primary);
  outline: 0;
}
</style>
