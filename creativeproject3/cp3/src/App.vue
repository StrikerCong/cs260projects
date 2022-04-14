<template>
<div id="app">
  <div class="header">
    <router-link to="/">
      <div class="logo">
        <img src="/btc_final.png">
      </div>
    </router-link>
    <div class="title">
      <h1>CryptoCurrency Calculator!</h1>
    </div>
  </div>
  <div class="content">
    <router-view />
  </div>
  <div class="footer">
    <router-link to="/">Home</router-link>
    <br>
    <router-link to="/admin">Admin</router-link>
    <br>
    <a href="https://github.com/BYUCS260/museum-StrikerCong">Github Repo</a>
  </div>
</div>
</template>



<style>
html {
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background: #fff;
  padding: 0px;
  margin: 0px;
}

/* Header */
.header {
  display: flex;
  padding: 10px 100px 0px 100px;
  background-color: #1a7af7;
  color: black;
}

.title {
  margin-top: 5px;
  padding: 3em;
  text-align: center;
}

.title h1 {
  font-size: 30px;
}

.content {
  padding: 20px 100px;
  min-height: 500px;
}

/* Footer */
.footer {
  height: 50px;
  padding: 20px 100px 0px 100px;
  background: #e3e3e3;
  font-size: 12px;
}

.footer a {
  color: #000;
}

h1 {
  font-size: 20px;
}

h2 {
  font-size: 14px;
}
</style>
