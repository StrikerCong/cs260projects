<template>
<div id="app">
  <div class="header">
    <router-link to="/">
      <div class="logo">
        <img src="/btc_final.png">
      </div>
    </router-link>
    <div class="title">
      <h1>CryptoCurrency Information!</h1>
    </div>
  </div>
  <div class="content">
    <router-view />
  </div>
  <div class="footer">
    <a href="https://github.com/StrikerCong/cs260projects/tree/main/creativeproject3">Github Repo</a>
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
  background-color: #000408;
  color: white;
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
  min-height: 550px;
}

/* Footer */
.footer {
  height: 50px;
  padding: 20px 100px 0px 100px;
  background: black;
  font-size: 12px;
}

.footer a {
  color: white;
}

h1 {
  font-size: 20px;
}

h2 {
  font-size: 14px;
}
</style>
