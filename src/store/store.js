export const store = {
  state: {
    userData: {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "555-5555",
      street: "Example Street 12",
      city: "12345 City",
      jobtitle: "Frontend Developer",
      birthdate: "03.03.1993",
      birthcity: "Othercity",
      nationality: "deutsch",
      marriage: "ledig",
    },
  },
  setUserData(userData) {
    this.state.userData = userData;
  },
  getUserData() {
    return this.state.userData;
  },
};
