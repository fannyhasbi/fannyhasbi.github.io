$(document).ready(function(){
  new ClipboardJS('#copy-btn');
});

function validate(){
  let message = document.getElementById('message').value;
  let key = document.getElementById('key').value;

  return message.length > 0 && key.length > 0;
}

function encrypt(){
  let message = document.getElementById('message').value;
  let key = document.getElementById('key').value;

  if(validate()){
    // encryption
    let emo = new EmoCrypt.EmoCrypt();
    cipher = emo.encrypt(message, key);

    // content
    let copyBtn = `<button id="copy-btn" class="btn btn-primary" data-clipboard-target="#encryption-result">Copy</button>`;
    let cipherTextArea = `<textarea id="encryption-result" class="w-100 h-100" readonly>${cipher}</textarea>`;
    let html = $('<div>')
      .append(cipherTextArea)
      .append(copyBtn);

    // show the cipher
    Swal.fire({
      icon: 'success',
      html: html,
      showCloseButton: true,
      showConfirmButton: false,
    });
  }
}