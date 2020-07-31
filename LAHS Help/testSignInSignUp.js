
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  location.replace('lahshelp.html');
  var myUserEntity = {};
  myUserEntity.Id = profile.getId();
  myUserEntity.Name = profile.getName();
  sessionStorage.setItem('myUserEntity',JSON.stringify(myUserEntity));
}

function checkIfLoggedIn()
{
  if(sessionStorage.getItem('myUserEntity') == null){
    alert('please sign in')
    location.replace('landingpage.html');
  } else {
    var userEntity = {};
    userEntity = JSON.parse(sessionStorage.getItem('myUserEntity'));
  }
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
  console.log('User signed out.');
  location.replace("landingpage.html")
  });
}

function onLoad() {
  gapi.load('auth2', function() {
  gapi.auth2.init();
  });
}
