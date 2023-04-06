<template>
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
.cvmenu-background {
  background-color: var(--bs-log);
  opacity: 0.8;
  color: var(--bs-log);
  border-radius: 15px;
}
h1 {
  color: white;
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
