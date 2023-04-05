import { createStore } from "vuex";

const store = createStore({
  state: {
    userData: {
      firstname: "John",
      lastname: "Doe",
      email: "johndoe@example.com",
      phone: "555-5555",
      street: "Example Street 12",
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
    setUserData(state, userData) {
      state.userData = userData;
    },
  },
});

export default store;
