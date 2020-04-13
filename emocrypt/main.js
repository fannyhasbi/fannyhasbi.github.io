function encrypt(){
  Swal.fire({
    text: 'Something went wrong!',
  });

  return;
  let message = document.getElementById('message').value;
  let key = document.getElementById('key').value;

  let emo = new EmoCrypt.EmoCrypt();
  cipher = emo.encrypt(message, key);
  
  console.log('hasilnya :', cipher);

  document.getElementById('result').innerHTML = cipher;
}