var firebaseConfig = {
      apiKey: "AIzaSyA8AeoPau5x-fq8TWc4GCMcR467l485j9o",
      authDomain: "kwitter-10fbf.firebaseapp.com",
      databaseURL: "https://kwitter-10fbf-default-rtdb.firebaseio.com",
      projectId: "kwitter-10fbf",
      storageBucket: "kwitter-10fbf.appspot.com",
      messagingSenderId: "586065412495",
      appId: "1:586065412495:web:d31b15025fe5eda8814bfa"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_name);
      row = "<div class='room_name' id="+Room_names+" onclick='redirecttoRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirecttoRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
 
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}