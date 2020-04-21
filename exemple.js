
// const url = 'https://lesoublisdelinfo.com/api.php';

// let requete = new XMLHttpRequest();

// requete.open('GET', url);
// requete.responseType = 'json';
// requete.send();

// requete.open('POST', url);
// requete.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
// requete.responseType = 'json';
// requete.send('prenom=Farouk');


// requete.onload = function() {
//     if (requete.readyState === XMLHttpRequest.DONE) {
//         if(requete.status === 200) {
//             let reponse = requete.response;
//             console.log(reponse);
//         }
//         else {
//             alert('Un probleme est intervenu, merci de venir plus tard.');
//         }
//     }
// }

const apiKey = '128487884bc99e1559de9f929f9fadd3';

let requete = new XMLHttpRequest();



let ville = "Paris";
recevoirTemperature(ville);
let button = document.querySelector('#changer');

button.addEventListener('click', () => {
    ville = prompt('Dans quelle ville êtes-vous ?')
    recevoirTemperature(ville);
})

function recevoirTemperature(ville) {

const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=128487884bc99e1559de9f929f9fadd3&units=metric';

requete.open('GET', url);
requete.responseType = 'json';
requete.send();

requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
        if(requete.status === 200) {
            let reponse = requete.response;
            let ville = reponse.name;
            let temperature = reponse.main.temp;
            
            document.querySelector("#ville").textContent = ville;
            document.querySelector("#temperature_label").textContent = temperature;
            
    }
        }
        else {
            alert('Un probleme est intervenu, merci de venir plus tard.');
        }
    }

}


