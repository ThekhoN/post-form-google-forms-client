var nameInput = document.getElementById('nameInput');
var phoneInput = document.getElementById('phoneInput');
var emailInput = document.getElementById('emailInput');
var submit = document.getElementById('submit');
var TEST_URL = 'http://5901b0dd6fd058001126c269.mockapi.io/user'; //emulate client URL

var submitted = false;

submit.addEventListener('click', function (e) {
  embedFormSubmitHandler(e);
});

function embedFormSubmitHandler(e) {
  // console.log('running submitHandler. . .');
  var nameValue = nameInput.value;
  var phoneValue = phoneInput.value;
  var emailValue = emailInput.value;

  // invalid conditions
  if(nameValue !== 'user'){
    console.log('name invalid, do not submit');
    e.preventDefault();
    return ;
  }

  if(phoneValue !== '123'){
    console.log('phone invalid, do not submit');
    e.preventDefault();
    return ;
  }

  if(emailValue !== 'user@email.com'){
    console.log('email invalid, do not submit');
    e.preventDefault();
    return ;
  }

  // if valid
  else {
    if(!submitted){
      submitted = true;
      console.log('inputs valid, proceed with submission');
      handlePostToClient(nameValue, phoneValue, emailValue);
    }
  }
}

function handlePostToClient(nameValue, phoneValue, emailValue) {
  console.log('running handlePostToClient. . .');
  axios.post(TEST_URL, {
    name: nameValue,
    phone: phoneValue,
    email: emailValue
  })
  .then(function (response) {
    console.log('response: ', response);
  })
  .catch(function (err) {
    console.log('error: ', err);
  });
}
