<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Baloo Thambi 2"
    rel="stylesheet"
  />
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/cv-classic">Classic</router-link>
    <router-link to="/cv-creative">Creative</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
