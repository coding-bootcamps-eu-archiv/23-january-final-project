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
      city: "12345 City",
      jobtitle: "Frontend Developer",
      birthdate: "03.03.1993",
      birthcity: "Othercity",
      profileurl: "www.portfolio.com",
      nationality: "deutsch",
      marriage: "ledig",
    },
    userTemplate: {
      CVTemplate: "CVClassic",
    },
  },
  mutations: {
    updateFormData(state, payload) {
      state.userData = { ...state.userData, ...payload };
    },
    setTemplateComponent(state, CVType) {
      state.userTemplate.CVTemplate = CVType;
      console.log(state.userTemplate);
    },
  },
  actions: {
    mountTemplate({ commit }, CVType) {
      commit("setTemplateComponent", CVType);
    },
  },
});

export default store;
