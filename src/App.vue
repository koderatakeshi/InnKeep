<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
:root {
  --font: #101010;
  --eight: #d08eff;
  --seven: #fabfff;
  --six: #c5ffb9;
  --five: #ffdc96;
  --four: #adfffe;
  --eight-cover: #f0dbff;
  --seven-cover: #fdebff;
  --six-cover: #eeffea;
  --five-cover: #fff6e6;
  --four-cover: #eaffff;
}

* {
  box-sizing: border-box;
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
