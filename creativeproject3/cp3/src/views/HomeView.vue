<template>
<div class="home">
  <h1>Enter a CryptoCurrency Symbol below (BTC, ETH, LTC or DOGE):</h1>

  <div class="add">
    <div class="form">
      <input v-model="title" placeholder="Symbol">
      <p></p>
      <!-- <button @click="getData(title)">Search</button> -->
    </div>
    <div class="upload" v-if="title === 'BTC'">
      <h3>Crypto Currency: BitCoin</h3>
      <br>
      <h3>Current Price: $41414.49</h3>
      <br>
      <h3>24 hour Low - High: $39958.37 - $41475.03</h3>
      <br>
      <h3>Crypto Rank: 1</h3>
      <br>
      <h3>Market Cap: $787333364218.54</h3>
      <br>
      <h3>Total Volume: 346494607050.02</h3>
    </div>
    <div class="upload" v-if="title === 'ETH'">
      <h3>Crypto Currency: Ethereum</h3>
      <br>
      <h3>Current Price: $3137.90</h3>
      <br>
      <h3>24 hour Low - High: $3047.02 - $3141.81</h3>
      <br>
      <h3>Crypto Rank: 2</h3>
      <br>
      <h3>Market Cap: $377705585097.02</h3>
      <br>
      <h3>Total Volume: 7350194860.7</h3>
    </div>
    <div class="upload" v-if="title === 'DOGE'">
      <h3>Crypto Currency: Dogecoin</h3>
      <br>
      <h3>Current Price: $0.14</h3>
      <br>
      <h3>24 hour Low - High: $0.14 - $0.14</h3>
      <br>
      <h3>Crypto Rank: 8</h3>
      <br>
      <h3>Market Cap: $17544052878.61</h3>
      <br>
      <h3>Total Volume: 96505923.36</h3>
    </div>
    <div class="upload" v-if="title === 'LTC'">
      <h3>Crypto Currency: Litecoin</h3>
      <br>
      <h3>Current Price: $111.43</h3>
      <br>
      <h3>24 hour Low - High: $104.75 - $111.58</h3>
      <br>
      <h3>Crypto Rank: 11</h3>
      <br>
      <h3>Market Cap: $7807534853.43</h3>
      <br>
      <h3>Total Volume: 105017268.05</h3>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'HomeView',

  data () {
    return {
      info: null,
      title: "",
      posts: [],
      url: "https://coinlib.io/api/v1/coin?key=8a32e310bccebd02&pref=USD&symbol=",
    }
  },

  methods: {
    async getData(title) {
      try {
        const response = await this.$http.get(
          "https://coinlib.io/api/v1/coin?key=8a32e310bccebd02&pref=USD&symbol=" + title
        );
        // JSON responses are automatically parsed.
        this.posts = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
}
</script>

<style scoped>
/* Suggestions */
.suggestions {
  width: 200px;
  border: 1px solid #ccc;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5BDEFF;
  color: #fff;
}


.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}

.add,
.edit {
  display: flex;
}

.circle {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 8px;
  background: #333;
  color: #fff;
  text-align: center
}

/* Form */
input,
textarea,
select,
button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
}

.form {
  margin-right: 50px;
}

.upload {
  background: black;
  border-radius: 3em;
  padding: 1em;
  color: white;
  text-align: center;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 300px;
}

</style>