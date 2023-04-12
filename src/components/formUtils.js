import store from "@/store/store.js";

export const updateFormData = (payload) => {
  const userDataKeys = [
    "firstname",
    "lastname",
    "email",
    "phone",
    "street",
    "zipcode",
    "city",
    "jobtitle",
    "birthdate",
    "birthcity",
    "profileurl",
    "nationality",
    "marriage",
  ];
  if (userDataKeys.includes(Object.keys(payload)[0])) {
    store.commit("updateFormData", payload);
  }

  const userJobKeys = [
    "job",
    "company",
    "place",
    "yearStart",
    "monthStart",
    "yearEnd",
    "description",
  ];

  if (userJobKeys.includes(Object.keys(payload)[0])) {
    store.commit("updateUserJobData", payload);
  }

  const userEdKeys = [
    "degree",
    "school",
    "edCity",
    "edYearStart",
    "edMonthStart",
    "edYearEnd",
    "edMonthEnd",
    "description",
  ];
  if (userEdKeys.includes(Object.keys(payload)[0])) {
    store.commit("updateUserEducationData", payload);
  }
};
