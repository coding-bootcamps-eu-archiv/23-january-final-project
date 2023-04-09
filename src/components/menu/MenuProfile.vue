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
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.cvmenu-background {
  background-color: var(--bs-log);
}
h1 {
  color: white;
}
label {
  color: white;
}
</style>
