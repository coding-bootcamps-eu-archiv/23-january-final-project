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
    userJob: {
      id: 1,
      job: "test",
      company: "testing",
      place: "testhausen",
      yearStart: "111",
      monthStart: "12",
      yearEnd: "111",
      description: "13",
    },
  },
  mutations: {
    updateFormData(state, payload) {
      state.userData = { ...state.userData, ...payload };
    },
    updateUserJobData(state, payload) {
      console.log(state, payload);
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
  plugins: [
    (store) => {
      store.subscribe((mutation, state) => {
        localStorage.setItem("CVFabrik-Store", JSON.stringify(state));
      });

      const savedState = localStorage.getItem("CVFabrik-Store");
      if (savedState) {
        const parsedState = JSON.parse(savedState);
        store.replaceState(parsedState);
        document.documentElement.style.setProperty(
          "--cv-color",
          parsedState.userTemplate.CVColor // Use parsedState instead of state
        );
        document.documentElement.style.setProperty(
          "--cv-elements",
          parsedState.userTemplate.CVElements
        );
        document.documentElement.style.setProperty(
          "--cv-modern-color",
          parsedState.userTemplate.CVColorModern
        );
      }
    },
  ],
});

export default store;
