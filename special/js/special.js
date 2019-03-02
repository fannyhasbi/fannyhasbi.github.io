"use strict";

// Fun Encryption by Fanny Hasbi
// https://github.com

const KEY = "5AGUSTUS1997";
const TITLE = "MTAzLDUyLDUxLDYx";

const FunEncrypt = {
  encrypt: (message, key) => {
    var result = [];
    for(let i = 0; i < message.length; i++){
      let a = message.charCodeAt(i);
      let shifter = key.charCodeAt(Math.floor(i % key.length));
      result.push(a^shifter);
    }
    return btoa(result);
  },

  decrypt: (secret, key) => {
    secret = atob(secret).split(",");
    var result = [];

    secret.forEach((e, i) => {
      let shifter = key.charCodeAt(Math.floor(i % key.length));
      let b = String.fromCharCode(e ^ shifter);

      result.push(b);
    });

    return result.join("");
  }
}

var btn_comp = $("#magic-button").html();

$("#magic-button").on("click", (e) => {
  let spinner = '<i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>';
  $("#magic-button").html(spinner);
  let message = $("#miracle-word").val();
  let secret = FunEncrypt.encrypt(message, KEY);

  alert("https://bit.ly/" + secret);
});

let title = FunEncrypt.decrypt(TITLE, KEY);
$("#special-title").html(title);
