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
  },
  mutations: {
    updateFormData(state, payload) {
      state.userData = { ...state.userData, ...payload };
    },
  },
});

export default store;
