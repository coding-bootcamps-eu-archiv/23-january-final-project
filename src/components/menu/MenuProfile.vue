<template>
  <body class="cvmenu-background">
    <h1>Profile</h1>
    <label for="">Vorname<input type="text" placeholder="Maria" /></label
    ><label for="Nachname"
      >Nachname<input type="text" placeholder="Mustermann" /></label
    ><label for=""
      >Berufsbezeichung<input
        type="text"
        placeholder="Generic Job Title" /></label
    ><label for=""
      >E-mail-Adresse<input
        type="text"
        placeholder="mariamustermann@email.de" /></label
    ><label for=""
      >Url<input type="text" placeholder="mariamustermann@email.de" /></label
    ><label for="street"
      >Straße<input type="text" placeholder="Musterstraße" /></label
    ><label for="nr">Nr.<input type="text" placeholder="10." /></label
    ><label for="plz">PLZ<input type="text" placeholder="12345" /></label
    ><label for="ort">Ort<input type="text" placeholder="Musterstadt" /></label
    ><label for="telefon"
      >Telefon<input type="text" placeholder="01234-5678900"
    /></label>
  </body>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  font-family: "roboto";
}
.cvmenu-background {
  background-color: var(--bs-log);
  opacity: 0.8;
  color: var(--bs-log);
  border-radius: 15px;
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
