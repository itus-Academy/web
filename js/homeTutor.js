
// var firebaseConfig = {
//     apiKey: "AIzaSyDTV8NGcXyw0S5gYy8Gg8Ux4LG8mFF7KuM",
//     authDomain: "itus-academy.firebaseapp.com",
//     databaseURL: "https://itus-academy.firebaseio.com",
//     projectId: "itus-academy",
//     storageBucket: "itus-academy.appspot.com",
//     messagingSenderId: "521634374559",
//     appId: "1:521634374559:web:cc0a0d19e73bdb333813aa",
//     measurementId: "G-XF5GPN8T3P"
// };
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();


var myForm = document.getElementById('myForm');
var major = document.getElementById('major');
var minor = document.getElementById('minor');

myForm.addEventListener('submit', homeTutorForm);

function saveHomeTutor(yourName,yourPhone,yourEmail){

    db.collection('HomeTutoring').add({

        yourName:yourName,
        yourPhone:yourPhone,
        yourEmail:yourEmail

    }).then(()=>{
        console.log('Successful');
        major.style.display = 'block';
        major.style.color='green'
        minor.style.display='none'
        myForm.reset();
    })
}


function homeTutorForm(e){

    e.preventDefault();
    const yourName = document.getElementById('yourName').value;
    const yourPhone = document.getElementById('yourPhone').value;
    const yourEmail = document.getElementById('yourEmail').value; 

    console.log('yourname = ' + yourName);
    console.log('yourPhone = ' + yourPhone);
    console.log('yourEmail = ' + yourEmail);

    saveHomeTutor(yourName,yourPhone,yourEmail);


}





var myForm2 = document.getElementById('myForm2');
var major2 = document.getElementById('major2');
var minor2 = document.getElementById('minor2');

myForm2.addEventListener('submit', homeTutorForm2);

function saveHomeTutor2(yourName2,yourPhone2,yourEmail2){

    db.collection('HomeTutoring').add({

        yourName:yourName2,
        yourPhone:yourPhone2,
        yourEmail:yourEmail2

    }).then(()=>{
        console.log('Successful');
        major2.style.display = 'block';
        major2.style.color='green'
        minor2.style.display='none'
        myForm2.reset();
    })
}


function homeTutorForm2(e){

    e.preventDefault();
    const yourName2 = document.getElementById('yourName2').value;
    const yourPhone2 = document.getElementById('yourPhone2').value;
    const yourEmail2 = document.getElementById('yourEmail2').value; 

    console.log('yourname = ' + yourName2);
    console.log('yourPhone = ' + yourPhone2);
    console.log('yourEmail = ' + yourEmail2);

    saveHomeTutor2(yourName2,yourPhone2,yourEmail2);


}