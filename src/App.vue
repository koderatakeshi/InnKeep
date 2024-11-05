<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/room-info">客室管理</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Sawarabi+Gothic&display=swap');

:root {
  --vue: #42b983;
  --font: #101010;
  --eight: #d08eff;
  --eight-cover: #f0dbff;
  --seven: #fabfff;
  --seven-cover: #fdebff;
  --six: #c5ffb9;
  --six-cover: #eeffea;
  --five: #ffdc96;
  --five-cover: #fff6e6;
  --four: #adfffe;
  --four-cover: #eaffff;
  --vip: #b1adff;
  --vip-cover: #eaeaff;
}

* {
  box-sizing: border-box;
  font-family: "Sawarabi Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
}

/* Chrome, Safari, Edge, Opera */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

/* Chrome, Safari, Edge, Opera */
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
/* Optional: Remove default border and add custom styling */
select {
  border-radius: 4px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--font);
  padding: 0 20px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: 700;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: var(--vue);
}

h2 {
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 1.5em;
  font-weight: 700;
  line-height:  1.5em;
  padding: 5px 0 5px 10px;
  border-left: 15px solid var(--vue);
  margin: 20px 0 10px 0;
  background-color: #f7f7f7;
}
</style>
