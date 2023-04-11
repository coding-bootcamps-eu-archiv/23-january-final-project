import { createStore } from "vuex";

const store = createStore({
  state: {
    userData: {
      firstname: "Maria",
      lastname: "Mustermann",
      email: "mariamustermann@email.de",
      phone: "555-5555",
      street: "Example Street 12",
      zipcode: "12345",
      city: "City",
      jobtitle: "Frontend Developer",
      birthdate: "03.03.1993",
      birthcity: "Othercity",
      profileurl: "www.portfolio.com",
      nationality: "deutsch",
      marriage: "ledig",
    },
    userTemplate: {
      CVTemplate: "CVClassic",
      CVColor: "#cb6161",
      CVColorModern: "black",
      CVElements: "#000000",
    },
  },
  mutations: {
    updateFormData(state, payload) {
      state.userData = { ...state.userData, ...payload };
    },
    setTemplateComponent(state, CVType) {
      state.userTemplate.CVTemplate = CVType;
    },
    setCVColor(state, { color, elementcolor }) {
      state.userTemplate.CVColor = color;
      state.userTemplate.CVElements = elementcolor;
      document.documentElement.style.setProperty("--cv-color", color);
      document.documentElement.style.setProperty("--cv-elements", elementcolor);
    },
    setModernColor(state, color) {
      state.userTemplate.CVColorModern = color;
      document.documentElement.style.setProperty("--cv-modern-color", color);
    },
  },
  actions: {
    mountTemplate({ commit }, CVType) {
      commit("setTemplateComponent", CVType);
    },
    setCVCrColor({ commit }, { color, elementcolor }) {
      commit("setCVColor", { color, elementcolor });
    },
    setCVMoColor({ commit }, color) {
      commit("setModernColor", color);
    },
  },
});

export default store;
