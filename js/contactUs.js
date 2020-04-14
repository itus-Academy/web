
var firebaseConfig = {
    apiKey: "AIzaSyDTV8NGcXyw0S5gYy8Gg8Ux4LG8mFF7KuM",
    authDomain: "itus-academy.firebaseapp.com",
    databaseURL: "https://itus-academy.firebaseio.com",
    projectId: "itus-academy",
    storageBucket: "itus-academy.appspot.com",
    messagingSenderId: "521634374559",
    appId: "1:521634374559:web:cc0a0d19e73bdb333813aa",
    measurementId: "G-XF5GPN8T3P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


var contactForm = document.getElementById('contactForm');
var mes = document.getElementById('mes')

contactForm.addEventListener('submit', submitContact);

function saveContact(name,email,subject,message){

    db.collection('contactMessage').add({

            name:name,
            email:email,
            subject:subject,
            message:message

    }).then(()=>{
        console.log('we have received the message');
        mes.style.display = 'block';
        contactForm.reset();
    })
}


function submitContact(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    saveContact(name,email,subject,message);
}
