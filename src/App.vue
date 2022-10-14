<template>
  <header>
    <img alt="Vue-logo" src="./assets/logo.png" />
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/movie">Movie</router-link> |
      <router-link to="/movie/store">Store</router-link>
    </nav>
  </header>
  <router-view />
</template>

<style lang="scss">
$font-weights: (
  "regular": 400,
  "medium": 500,
  "bold": 700,
);

body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  display: flex;
  position: relative;
  padding: 5px 0;
  box-sizing: border-box;

  img {
    position: absolute;
    left: 55px;
    width: 85px;
    height: 85px;
    cursor: pointer;
  }
}

nav {
  padding: 30px;
  margin: 0 auto;

  a {
    padding: 10px;
    font-weight: map-get($font-weights, bold);
    color: #2c3e50;
    text-decoration: none;
    border-radius: 4px;

    &.router-link-exact-active {
      color: #fff;
      background-color: #42b983;
    }
  }
}
</style>
