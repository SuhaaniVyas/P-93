
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyDWXlG81vtDf6YiUEDnAG-Kgdq0Jhb7nAI",
      authDomain: "kwitter-53d21.firebaseapp.com",
      databaseURL: "https://kwitter-53d21-default-rtdb.firebaseio.com",
      projectId: "kwitter-53d21",
      storageBucket: "kwitter-53d21.appspot.com",
      messagingSenderId: "1033754423237",
      appId: "1:1033754423237:web:64667d5edd619e7fdb65ac"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
