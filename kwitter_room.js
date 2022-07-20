const firebaseConfig = {
    apiKey: "AIzaSyCaGnJJW6cysirlpIxMBWBMiQH2Bo5tM3c",
    authDomain: "st-fairy-chat.firebaseapp.com",
    databaseURL: "https://st-fairy-chat-default-rtdb.firebaseio.com",
    projectId: "st-fairy-chat",
    storageBucket: "st-fairy-chat.appspot.com",
    messagingSenderId: "1037631727160",
    appId: "1:1037631727160:web:62779ea25663286dcc68cd",
    measurementId: "G-YTQ9Y6YFE0"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"

function addRoom(){

    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update
    ({
          purpose:"adding room name"
    })
    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html"

}


function getData() {firebase.database().ref("/").on('value',

function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
//Start code


console.log("room_name - " + Room_names);
row = "<div class = 'room_name' id = "+ Room_names + "onclick = 'redirectToRoomName(this.id)'>#"+ Room_names + "</div> <hr>"
document.getElementById("output").innerHTML += row


//End code
});});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location = "kwitter_page.html"
}

function logout(){
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location = "kwitter.html";

}