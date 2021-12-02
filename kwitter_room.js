
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAMxX58jFrqcMqAwQpqx60p_EoTv0DaTlM",
      authDomain: "kwitter-3757d.firebaseapp.com",
      databaseURL: "https://kwitter-3757d-default-rtdb.firebaseio.com",
      projectId: "kwitter-3757d",
      storageBucket: "kwitter-3757d.appspot.com",
      messagingSenderId: "809759855184",
      appId: "1:809759855184:web:07d8bc220ffdf901b1b755"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
