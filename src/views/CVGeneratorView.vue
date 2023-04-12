<template>
  <div class="container">
    <div class="header no-print">
      <router-link to="/">
        <a href="#" class="logo"
          ><span
            ><svg
              width="39"
              height="24"
              viewBox="0 0 39 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.456 21.24C13.24 21.24 12.112 21.024 11.072 20.592C10.048 20.144 9.152 19.528 8.384 18.744C7.616 17.944 7.024 17.024 6.608 15.984C6.192 14.928 5.984 13.8 5.984 12.6C5.984 11.4 6.192 10.28 6.608 9.24C7.024 8.184 7.616 7.264 8.384 6.48C9.152 5.696 10.048 5.08 11.072 4.632C12.112 4.184 13.24 3.96 14.456 3.96C15.816 3.96 16.992 4.184 17.984 4.632C18.976 5.08 19.856 5.688 20.624 6.456L18.752 8.328C18.256 7.784 17.648 7.36 16.928 7.056C16.224 6.752 15.4 6.6 14.456 6.6C13.624 6.6 12.864 6.744 12.176 7.032C11.488 7.32 10.888 7.736 10.376 8.28C9.88 8.808 9.496 9.44 9.224 10.176C8.952 10.912 8.816 11.72 8.816 12.6C8.816 13.48 8.952 14.288 9.224 15.024C9.496 15.76 9.88 16.4 10.376 16.944C10.888 17.472 11.488 17.88 12.176 18.168C12.864 18.456 13.624 18.6 14.456 18.6C15.48 18.6 16.344 18.448 17.048 18.144C17.768 17.824 18.376 17.392 18.872 16.848L20.744 18.72C19.976 19.504 19.072 20.12 18.032 20.568C16.992 21.016 15.8 21.24 14.456 21.24Z"
                fill="white"
              />
              <path
                d="M13.97 17L11.2 9.97H12.67L14.81 15.66H14.24L16.4 9.97H17.85L15.05 17H13.97Z"
                fill="white"
              />
              <path
                d="M22 22V4H25.0531V22H22ZM24.0973 14.2857V11.5857H33.5487V14.2857H24.0973ZM24.0973 6.7V4H34V6.7H24.0973Z"
                fill="white"
              />
              <line
                x1="20"
                y1="8"
                x2="20"
                y2="3.27835e-08"
                stroke="white"
                stroke-width="2"
              />
              <line
                x1="20"
                y1="1"
                x2="39"
                y2="1"
                stroke="white"
                stroke-width="2"
              />
              <line y1="23" x2="25" y2="23" stroke="white" stroke-width="2" />
              <line y1="23" x2="25" y2="23" stroke="white" stroke-width="2" />
              <line y1="23" x2="25" y2="23" stroke="white" stroke-width="2" />
              <line y1="1" x2="17" y2="1" stroke="white" stroke-width="2" />
              <line y1="1" x2="17" y2="1" stroke="white" stroke-width="2" />
              <line y1="1" x2="17" y2="1" stroke="white" stroke-width="2" />
              <line
                x1="27"
                y1="23"
                x2="39"
                y2="23"
                stroke="white"
                stroke-width="2"
              />
              <line
                x1="38"
                y1="23"
                x2="38"
                y2="4.37114e-08"
                stroke="white"
                stroke-width="2"
              />
              <path d="M1 23L0.999999 0" stroke="white" stroke-width="2" />
              <rect
                x="20.0634"
                y="6.97937"
                width="1.38526"
                height="1.88033"
                transform="rotate(47.4577 20.0634 6.97937)"
                fill="white"
              />
            </svg>
          </span>
          <p>CV FABRIK</p></a
        ></router-link
      >
    </div>
    <div class="sidebar no-print">
      <a href="#" class="profile-menu" @click="showComponent('MenuProfile')">
        <i class="fas fa-profil"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"
            /></svg
        ></i>
        <span>Profil</span>
      </a>
      <a href="#" @click="showComponent('MenuExperience')">
        <i class="fas fa-work"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-briefcase"
            viewBox="0 0 16 16"
          >
            <path
              d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"
            /></svg
        ></i>
        <span
          >Beruflicher<br />
          Werdegang</span
        >
      </a>
      <a href="#" @click="showComponent('MenuEducation')">
        <i class="fas fa-education"
          ><svg
            class="bi bi-columns"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 22"
          >
            <path
              d="M17.673 5.606a3326.02 3326.02 0 0 1-5.671-2.674L.138 8.524l2.03.98L2 9.531V20h1v-9.626l.72-.124.28.135v5.288c0 .914 5.206 3.533 6.249 4.049a3.89 3.89 0 0 0 3.48-.026C20 16.486 20 15.895 20 15.673v-5.288l3.854-1.857s-3.8-1.801-6.181-2.922zM19 15.504a51.526 51.526 0 0 1-5.726 3.302 2.884 2.884 0 0 1-2.582.02A40.184 40.184 0 0 1 5 15.521v-4.655l7 3.373 7-3.373zm-7-2.373L5.416 9.958l6.469-1.115-.17-.987-7.85 1.354-1.403-.676 9.537-4.495c.825.393 8.523 4.014 9.542 4.494z"
            />
            <path fill="none" d="M0 0h24v24H0z" />
          </svg>
        </i>
        <span>Ausbildung</span>
      </a>
      <a href="#" @click="showComponent('MenuLanguages')">
        <i class="fas fa-languages"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-translate"
            viewBox="0 0 16 16"
          >
            <path
              d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z"
            />
            <path
              d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z"
            /></svg
        ></i>
        <span>Sprachen</span>
      </a>
      <a href="#" @click="showComponent('MenuPrograms')">
        <i class="fas fa-programms"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-pc-display"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V1Zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0Zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0ZM9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5ZM1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2H1.5Z"
            /></svg
        ></i>
        <span>Programme</span>
      </a>
      <a href="#" @click="showComponent('MenuTemplate')">
        <i class="fas fa-layouts"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-columns"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V2zm8.5 0v8H15V2H8.5zm0 9v3H15v-3H8.5zm-1-9H1v3h6.5V2zM1 14h6.5V6H1v8z"
            /></svg
        ></i>
        <span>Vorlage<br />wechseln</span>
      </a>
      <a href="#" class="print-menu" @click="showComponent('MenuCheckDL')">
        <i class="fas fa-sign-out-print"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
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
        ></i>
        <span>Prüfen &<br />Herunterladen</span>
      </a>
    </div>

    <section class="menu-sidebar no-print">
      <div class="left">
        <MenuProfile
          v-if="isProfileMenu"
          @next="showComponent('MenuExperience')"
        />
        <MenuExperience
          v-if="isExperienceMenu"
          @back="showComponent('MenuProfile')"
          @next="showComponent('MenuEducation')"
        />
        <MenuEducation
          v-if="isEducationMenu"
          @back="showComponent('MenuExperience')"
          @next="showComponent('MenuLanguages')"
        />
        <MenuLanguages
          v-if="isLanguagesMenu"
          @back="showComponent('MenuEducation')"
          @next="showComponent('MenuPrograms')"
        />
        <MenuPrograms
          v-if="isProgramsMenu"
          @back="showComponent('MenuLanguages')"
          @next="showComponent('MenuTemplate')"
        />
        <MenuTemplate
          v-if="isTemplateMenu"
          @back="showComponent('MenuPrograms')"
          @next="showComponent('MenuCheckDL')"
        />
        <MenuCheckDL
          @printRequested="print"
          v-if="isCheckDLMenu"
          @back="showComponent('MenuTemplate')"
        />
      </div>
    </section>
    <section class="cv-layout">
      <div class="right">
        <div class="top no-print">
          <h2>My Resume</h2>
        </div>
        <div
          class="resume printable"
          v-if="this.$store.state.userTemplate.CVTemplate === 'CVModern'"
        >
          <CVModern ref="CVModern" />
        </div>
        <div
          class="resume printable"
          v-if="this.$store.state.userTemplate.CVTemplate === 'CVClassic'"
        >
          <CVClassic ref="CVClassic" />
        </div>
        <div
          class="resume printable"
          v-if="this.$store.state.userTemplate.CVTemplate === 'CVCreative'"
        >
          <CVCreative ref="CVCreative" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MenuProfile from "@/components/menu/MenuProfile.vue";
import MenuExperience from "@/components/menu/MenuExperience.vue";
import MenuEducation from "@/components/menu/MenuEducation.vue";
import MenuLanguages from "@/components/menu/MenuLanguages";
import MenuPrograms from "@/components/menu/MenuPrograms";
import MenuTemplate from "@/components/menu/MenuTemplate";
import MenuCheckDL from "@/components/menu/MenuCheckDL";
import CVModern from "@/components/templates/CVModern.vue";
import CVCreative from "@/components/templates/CVCreative.vue";
import CVClassic from "@/components/templates/CVClassic.vue";
import { updateFormData } from "@/components/formUtils.js";

export default {
  name: "MenuProfileView",
  components: {
    MenuProfile,
    MenuExperience,
    MenuEducation,
    MenuLanguages,
    MenuPrograms,
    MenuTemplate,
    MenuCheckDL,
    CVModern,
    CVClassic,
    CVCreative,
  },
  created() {
    window.addEventListener("input", this.handleInput);
  },
  unmounted() {
    window.removeEventListener("input", this.handleInput);
  },
  data() {
    return {
      isProfileMenu: true,
      isExperienceMenu: false,
      isEducationMenu: false,
      isLanguagesMenu: false,
      isProgramsMenu: false,
      isTemplateMenu: false,
      isCheckDLMenu: false,
    };
  },
  methods: {
    handleInput(event) {
      const key = event.target.name;
      const value = event.target.value;
      const id = event.target.id;
      console.log(key, value, id);
      updateFormData({ [key]: value, id }); // update the Vuex store with the input value
    },
    showComponent(componentName) {
      this.isProfileMenu = false;
      this.isExperienceMenu = false;
      this.isEducationMenu = false;
      this.isLanguagesMenu = false;
      this.isProgramsMenu = false;
      this.isTemplateMenu = false;
      this.isCheckDLMenu = false;

      switch (componentName) {
        case "MenuProfile":
          this.isProfileMenu = true;
          break;
        case "MenuExperience":
          this.isExperienceMenu = true;
          break;
        case "MenuEducation":
          this.isEducationMenu = true;
          break;
        case "MenuLanguages":
          this.isLanguagesMenu = true;
          break;
        case "MenuPrograms":
          this.isProgramsMenu = true;
          break;
        case "MenuTemplate":
          this.isTemplateMenu = true;
          break;
        case "MenuCheckDL":
          this.isCheckDLMenu = true;
          break;
      }
    },
    print() {
      window.print({
        noPrintBorder: true,
        background: true,
      });
    },
  },
};
</script>

<style scoped>
@media screen {
  * {
    font-family: "Roboto";
    scroll-behavior: smooth;
    list-style: none;
    text-decoration: none;
  }

  .container {
    background: var(--background-color);
    display: grid;
    grid-template-columns: 100px 1fr 2fr;
    grid-template-rows: 50px 1fr;
    _grid-gap: 20px;
    height: 100vh;
    overflow: hidden;
  }

  .header {
    grid-column: 1 / span 2;
    background-color: #333;
    color: #fff;
    text-align: center;
    font-size: 20px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--bs-cvgenerator-gradient);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.02);
    padding: 0.6rem 2%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
  }
  .header .logo {
    display: flex;
  }
  .logo > p {
    color: white;
    padding-top: 0.2rem;
    font-size: 1.2rem;
    font-weight: 600;
    margin-left: 0.5rem;
  }

  .sidebar {
    grid-column: 1 / span 1;
    grid-row: 1 / span 2;
    display: grid;
    grid-template-rows: repeat(7, 1fr);
    grid-gap: 10px;
    background-color: var(--bs-log);
    color: #fff;
    text-align: center;
    margin-top: 42px;
    position: sticky;
  }

  .sidebar a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    text-decoration: none;
  }

  .sidebar a:hover {
    background-color: rgba(255, 255, 255, 0.5);
    color: var(--bs-log);
    border-radius: 20px;
    margin: 10px;
  }

  .sidebar i {
    font-size: 1rem;
    margin-bottom: 5px;
  }
  .sidebar span {
    font-size: 0.8rem;
    font-weight: 300;
  }
  .bi {
    width: 1.2rem;
    height: auto;
  }
  .profile-menu {
    margin-top: 20px;
  }
  .print-menu {
    margin-bottom: 20px;
  }
  section {
    min-height: 100vh;
    padding: 0 5%;
    padding-top: 1.5rem;
  }

  .menu-sidebar {
    grid-column-start: 2;
    grid-row-start: 2;
  }
  .cv-layout {
    grid-column-start: 3;
    grid-row-start: 2;
    overflow: auto;
  }

  .left {
    _height: 200px;
    _width: 220%;
    padding-top: 2rem;
  }

  .right {
    _background-color: lightgreen;
    _height: 200px;
    _margin-left: 50%;
    _width: 200%;
  }

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    font-weight: 600;
    font-family: "Outfit";
    margin: 0;
    font-size: 2rem;
    color: var(--bs-log);
    text-shadow: 1px 1px 2px grey;
  }

  button {
    font-size: 1rem;
    padding: 10px 20px;
    color: var(--bs-log);
    border-radius: 30px;
    text-align: center;
    background-color: transparent;
    border: var(--bs-succes) solid;
    cursor: pointer;
    transition: all 0.3s linear;
    text-align: center;
  }

  .resume {
    height: 100vh;
  }

  .cv-layout {
    display: flex;
  }
}
</style>
