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
