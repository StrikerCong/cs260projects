// Javascript file

let global_price = 0;
let global_symbol = "";
let global_name = "";

document.getElementById("cryptoSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("cryptoInput").value;
  if (value === "")
    return;
  console.log(value);

  // Crypto Res
  const url = "https://coinlib.io/api/v1/coin?key=8a32e310bccebd02&pref=USD&symbol=" + value;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);

      global_price = Math.round(json.price * 100)/100;
      global_symbol = json.symbol;
      global_name = json.name;

      let err_mssg1 = '<h3>That is not a Crypto Symbol, please re-enter</h3>';

      if(isNaN(Math.round(json.price * 100)/100)) {
        document.getElementById("coinResults").innerHTML = err_mssg1;
        return;
      }

      let results = "";
      results += '<h2>' + json.name + " (" + json.symbol + ")</h2>";

      results += '<h3>Current Market Price: $' + Math.round(json.price * 100)/100 + "</h3>";

      results += '<p> 24h Low-High: $' + Math.round(json.low_24h * 100)/100 + ' -> $' + Math.round(json.high_24h * 100)/100 + '</p>';
      results += '<p> Crypto Rank: ' + json.rank + '</p>';
      results += '<p> Total Market Cap: $' + Math.round(json.market_cap * 100)/100 + '</p>';
      results += '<p> Total Volume (24h): ' + Math.round(json.total_volume_24h * 100)/100 + '</p>';

      document.getElementById("coinResults").innerHTML = results;
    });

});

// Calculator
document.getElementById("calculateSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("calculateInput").value;
  if (value === "")
    return;

  let calc = 3;
  let err_mssg = '<h3>Please enter a CryptoCurrency in the above field first</h3>';
  let err_mssg2 = '<h3>Please enter an integer (USD)</h3>';
  let err_mssg3 = '<h3>The symbol entered above is not a Crypto Symbol</h3>';
  let results = "";

  if (isNaN(value)) {
    document.getElementById("calculateResults").innerHTML = err_mssg2;
    return;
  }

  if (global_price === 0) {
    document.getElementById("calculateResults").innerHTML = err_mssg;
    return
  }

  if (isNaN(global_price)) {
    document.getElementById("calculateResults").innerHTML = err_mssg3;
    return
  }

  console.log(value);

  calc = value / global_price;
  calc = Math.round(calc * 1000000000000000)/1000000000000000
  results += '<h3>$' + value + " USD = " + calc + " " + global_symbol + "</h3>";
  // results += '<h3>If you spent $' + value + " on " + global_name + ", you would own " + calc + " " + global_symbol + "</h3>";

  document.getElementById("calculateResults").innerHTML = results;
});