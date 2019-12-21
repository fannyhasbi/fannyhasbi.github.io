"use strict";

// Fun Encryption by Fanny Hasbi
// https://github.com/fannyhasbi/fun-encryption

const SECRET = "MTAwLDExOSwxMTIsMTIyLDEyMCwxMjQsMTAyLDExNg==";
const GREET = "MjksNDcsNTcsNTAsNDgsMTEwLDIyLDQ0LDUxLDU3LDYxLDQyLDQwLDU5LDEwMSwxMTAsMTksMzYsMzUsNTI=";
const KEY = "UNIBINTEAM";
const TITLE = "MTgsNDcsNDMsNTk=";
var btn_comp = $("#magic-button").html();

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

var do_magic = (e) => {
  e.preventDefault();
  let spinner = '<i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>';
  $("#magic-button").html(spinner);
  
  setTimeout(() => {
    let message = $("#miracle-word").val();
    let secret = FunEncrypt.encrypt(message, KEY);
  
    if (secret == SECRET){
      let greet = FunEncrypt.decrypt(GREET, KEY);
      let yoyoy = "hehe";

      $(".initial-magic").css("display", "none");
      $("#magic-success").css("display", "block");
      $("#magic-success").addClass("animated pulse infinite");      
      $("#special-title").html(greet);

      $("#gift-button").prop("href", "https://bit.do/"+yoyoy);
    } else {
      $(".validate-input").addClass('alert-validate');
    }

    $("#magic-button").html(btn_comp);
  }, 800);
}

let title = FunEncrypt.decrypt(TITLE, KEY);
$("#special-title").html("Hello, " + title);

$("#magic-button").on("click", do_magic);