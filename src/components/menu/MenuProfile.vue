<template>
<<<<<<< HEAD
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
            <input type="text" placeholder="Maria" />
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
            <input type="text" placeholder="Mustermann" />
          </p>
          <p class="menu-full-width">
            <label for="">Berufsbezeichnung</label>
            <input type="text" placeholder="Geberic Job Title" />
          </p>

          <p class="menu-full-width">
            <label for="">E-mail-Address</label>
            <input type="email" placeholder="mariamustermann@email.de" />
          </p>

          <p class="menu-full-width">
            <label for="">URL</label>
            <input type="text" placeholder="www.meinportfolio.de" />
          </p>

          <p class="menu-full-width">
            Adresse
            <label for="">Straße</label>
            <input type="text" placeholder="Musterstraße" />
          </p>

          <p class="">
            <label for="">PLZ</label>
            <input type="text" placeholder="12345" />
          </p>

          <p class="">
            <label for="">Ort</label>
            <input type="text" placeholder="Musterstadt" />
          </p>

          <p class="menu-full-width">
            <label for="">Telefon</label>
            <input type="text" placeholder="01234-5678900" />
          </p>
          <router-link to="/menu-experience">
            <p class="menu-full-width">
              <button>Weiter</button>
            </p></router-link
          >
        </form>
      </div>
=======
  <div class="cvmenu-background">
    <div class="cvmenu-container">
      <div class="cvmenu-formtitle"><h1>Profil</h1></div>
      <form>
        <div class="main-user-info">
          <div class="user-input-box">
            <label for="">Vorname</label
            ><input type="text" placeholder="Maria" />
          </div>
          <div class="user-input-box">
            <label for="Nachname">Nachname</label
            ><input type="text" placeholder="Mustermann" />
          </div>
          <div class="user-input-box">
            <label for="">Berufsbezeichung</label
            ><input type="text" placeholder="Generic Job Title" />
          </div>
          <div class="user-input-box">
            <label for="">E-mail-Adresse</label
            ><input type="text" placeholder="mariamustermann@email.de" />
          </div>
          <div class="user-input-box">
            <label for="">Url</label
            ><input type="text" placeholder="mariamustermann@email.de" />
          </div>
          <div class="user-input-box">
            <label for="street">Straße</label
            ><input type="text" placeholder="Musterstraße" />
          </div>
          <div class="user-input-box">
            <label for="nr">Nr.</label><input type="text" placeholder="10." />
          </div>
          <div class="user-input-box">
            <label for="plz">PLZ</label
            ><input type="text" placeholder="12345" />
          </div>
          <div class="user-input-box">
            <label for="ort">Ort</label
            ><input type="text" placeholder="Musterstadt" />
          </div>
          <div class="user-input-box">
            <label for="telefon">Telefon</label
            ><input type="text" placeholder="01234-5678900" />
          </div>
          <div class="form-submit-btn">
            <input class="menu-next-button" type="submit" value="Weiter" />
          </div>
        </div>
      </form>
>>>>>>> 17ecfb87c2f0e0fac62eb2344da9049e41d5b8c0
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  font-family: "roboto";
<<<<<<< HEAD
=======
}
.cvmenu-background {
  background-color: var(--bs-log);
  opacity: 0.8;
  color: var(--bs-log);
  border-radius: 15px;
>>>>>>> 17ecfb87c2f0e0fac62eb2344da9049e41d5b8c0
}
* {
  box-sizing: border-box;
}

body {
  padding: 1rem;
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
.cvmenu-container {
  width: 100%;
  padding: 30px;
  max-width: 250px;
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
</style>
