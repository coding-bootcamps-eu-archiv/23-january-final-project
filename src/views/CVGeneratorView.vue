<template>
  <div class="container">
    <div class="header">Header Text</div>
    <div class="sidenav">
      <a href="#">Icon 1</a>
      <a href="#">Icon 2</a>
      <a href="#">Icon 3</a>
      <a href="#">Icon 4</a>
      <a href="#">Icon 5</a>
      <a href="#">Icon 6</a>
      <a href="#">Icon 7</a>
    </div>
    <div class="main-content">
      <img src="your-image-url" alt="Your Image" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 20px;
  height: 100vh;
}

.sidenav {
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  grid-gap: 10px;
  padding: 10px;
}

.sidenav a {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #ddd;
  color: #333;
  text-decoration: none;
}

.sidenav a:hover {
  background-color: #999;
  color: #fff;
}

.main-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header {
  grid-column: 1 / span 2;
  padding: 10px;
  background-color: #333;
  color: #fff;
  text-align: center;
  font-size: 24px;
}
</style>
