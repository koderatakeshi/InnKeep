<template>
  <nav>
    <router-link to="/">客室管理</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Sawarabi+Gothic&display=swap');

:root {
  --vue: #42b983;
  --font: #101010;
  --gbc: #f8f8f8;
  --eight: #d08eff;
  --eight-cover: #f0dbff;
  --seven: #fabfff;
  --seven-cover: #fdebff;
  --six: #c5ffb9;
  --six-cover: #eeffea;
  --five: #ffdc96;
  --five-cover: #fff6e6;
  --four: #8fd2ff;
  --four-cover: #eaf7ff;
  --vip: #f7e388;
  --vip-cover: #fff5dc;
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
  padding: 0 20px 50px 20px;
  min-height: 100svh;
  color: var(--font);
  background-color: var(--gbc);
}

body {
  margin: 0;
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

h1 {
  font-weight: 700;
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
  background-color: #fff;
}

button, a, input[type='button'], input[type='submit'], select {
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
}

button, input[type='button'], input[type='submit'] {
  display: block;
  font-weight: 600;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  color: var(--font);
  background-color: #fff;
  box-shadow: 1px 1px 8px #cacaca;
}
</style>
