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
    userJob: [],
    userEducation: [],
    userLanguages: [],
  },
  mutations: {
    updateFormData(state, payload) {
      state.userData = { ...state.userData, ...payload };
    },
    updateUserJobData(state, payload) {
      const indexID = payload.id;
      const index = state.userJob.findIndex((job) => job.id === indexID);
      if (index !== -1) {
        // eslint-disable-next-line no-unused-vars
        const { id, ...rest } = payload;

        const updatedJob = {
          ...state.userJob[index],
          ...rest,
        };
        state.userJob.splice(index, 1, updatedJob);
      } else {
        state.userJob.push(payload);
      }
      console.log(state.userJob);
    },
    updateUserEducationData(state, payload) {
      const indexID = payload.id;
      const index = state.userEducation.findIndex((ed) => ed.id === indexID);
      if (index !== -1) {
        // eslint-disable-next-line no-unused-vars
        const { id, ...rest } = payload;

        const updatedJob = {
          ...state.userEducation[index],
          ...rest,
        };
        state.userEducation.splice(index, 1, updatedJob);
      } else {
        state.userEducation.push(payload);
      }
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
    deleteJobMutation(state, index) {
      state.userJob.splice(index, 1);
    },
    deleteEducationMutation(state, index) {
      state.userEducation.splice(index, 1);
    },
    deleteLanguageMutation(state, index) {
      state.userLanguages.splice(index, 1);
    },
    setLanguage(state, language) {
      state.userLanguages.push({ [language]: "" });
    },
    setLanguageLevel(state, { language, level }) {
      for (const langObj of state.userLanguages) {
        if (Object.keys(langObj)[0] === language) {
          langObj[language] = level;
          console.log(state.userLanguages);
          break;
        }
      }
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
    deleteJob({ commit, state }, id) {
      const deleteIndex = id;
      const index = state.userJob.findIndex((job) => job.id == deleteIndex);
      if (index !== -1) {
        commit("deleteJobMutation", index);
      }
    },
    deleteEducation({ commit, state }, id) {
      const deleteIndex = id;
      const index = state.userEducation.findIndex((ed) => ed.id == deleteIndex);
      if (index !== -1) {
        commit("deleteEducationMutation", index);
      }
    },
    addLanguage({ commit }, language) {
      commit("setLanguage", language);
    },
    addLanguageLevel({ commit }, { language, level }) {
      commit("setLanguageLevel", { language, level });
    },
    deleteLanguage({ commit, state }, language) {
      const toDelete = language;
      const index = state.userLanguages.findIndex(
        (lang) => Object.keys(lang)[0] == toDelete
      );
      commit("deleteLanguageMutation", index);
    },
  },
  // plugins: [
  //   (store) => {
  //     store.subscribe((mutation, state) => {
  //       localStorage.setItem("CVFabrik-Store", JSON.stringify(state));
  //     });

  //     const savedState = localStorage.getItem("CVFabrik-Store");
  //     if (savedState) {
  //       const parsedState = JSON.parse(savedState);
  //       store.replaceState(parsedState);
  //       document.documentElement.style.setProperty(
  //         "--cv-color",
  //         parsedState.userTemplate.CVColor // Use parsedState instead of state
  //       );
  //       document.documentElement.style.setProperty(
  //         "--cv-elements",
  //         parsedState.userTemplate.CVElements
  //       );
  //       document.documentElement.style.setProperty(
  //         "--cv-modern-color",
  //         parsedState.userTemplate.CVColorModern
  //       );
  //     }
  //   },
  // ],
});

export default store;
