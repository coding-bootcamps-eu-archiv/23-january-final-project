<template>
  <div class="menu-contain">
    <div class="menu-wrapper">
      <div class="scroll menu-form">
        <h1>Profil</h1>
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

h1,
ul {
  margin: 0;
}

h1 {
  display: flex;
  color: white;
  padding-bottom: 20px;
  align-items: center;

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
button {
  width: 100%;
  border: 1px solid var(--bs-log);
}

form label {
  display: block;
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

form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}
form label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
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
  font-size: 0.8rem;
}

.avatar-upload {
  border-radius: 50%;
  overflow: hidden;
  grid-row: 1 / span 3;
  grid-column: 2 / span 1;
}

.avatar-upload input[type="file"] {
  z-index: -1;
  opacity: 0;
}
.avatar-upload label {
  display: inline-block;
  vertical-align: top;
}
.avatar-upload label img {
  display: block;
  border-radius: 50%;
  width: 120px; /* adjust this to your liking */
  height: 120px; /* adjust this to your liking */
  object-fit: cover;
  cursor: pointer;
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
