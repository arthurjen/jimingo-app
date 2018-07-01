<template>
  <div id="app">
    <h1>App</h1>
    <div class="header-links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/game">Game</router-link>
    </div>
    <router-view class="router"></router-view>

  </div>
</template>

<script>

export default {

};
</script>

<style>
h1, h2, h3 {
  font-family: 'Abel', sans-serif;
}

p, a {
  font-family: 'Raleway', sans-serif;
}
</style>
