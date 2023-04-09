import store from "@/store/store.js";

export const updateFormData = (payload) => {
  store.commit("updateFormData", payload);
};
