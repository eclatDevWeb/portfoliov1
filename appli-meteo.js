let villeChoisie;
recevoirTemperature(villeChoisie);

if('geolocation' in navigator) {
    navigator.geolocation.watchPosition((position) => {
        const url = 'https://api.openweathermap.org/data/2.5/weather?lon='+ position.coords.longitude+ '&lat=' + position.coords.latitude +  '&appid=253664b278f0a6f775da23d9d38db076&units=metric';

        let requete = new XMLHttpRequest(); // Nous créons un objet qui nous permettra de faire des requêtes
        requete.open('GET', url); // Nous récupérons juste des données
        requete.responseType = 'json'; // Nous attendons du JSON
        requete.send(); // Nous envoyons notre requête
      
        // Dès qu'on reçoit une réponse, cette fonction est executée
        requete.onload = function() {
          if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
              let reponse = requete.response;
              // console.log(reponse);
              let temperature = reponse.main.temp;
              let ville       = reponse.name;
              // console.log(temperature);
              document.querySelector('#temperature_label').textContent = temperature;
              document.querySelector('#ville').textContent = ville;
            }
            else {
              alert('Un problème est intervenu, merci de revenir plus tard.');
            }
          }
        }
    }, erreur, options);

    var options = {
    enableHighAccuracy: true
    }
}

else {
    villeChoisie = 'Paris';
    recevoirTemperature(villeChoisie);
}



let changerDeVille = document.querySelector('#changer');
changerDeVille.addEventListener('click', () => {
  villeChoisie = prompt('Quelle ville souhaitez-vous voir ?');
  recevoirTemperature(villeChoisie);
});

function erreur() {
    villeChoisie = "Paris";
    recevoirTemperature(villeChoisie);
}

function recevoirTemperature(ville) {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q='+ ville + '&appid=253664b278f0a6f775da23d9d38db076&units=metric';

  let requete = new XMLHttpRequest(); // Nous créons un objet qui nous permettra de faire des requêtes
  requete.open('GET', url); // Nous récupérons juste des données
  requete.responseType = 'json'; // Nous attendons du JSON
  requete.send(); // Nous envoyons notre requête

  // Dès qu'on reçoit une réponse, cette fonction est executée
  requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response;
        // console.log(reponse);
        let temperature = reponse.main.temp;
        let ville       = reponse.name;
        // console.log(temperature);
        document.querySelector('#temperature_label').textContent = temperature;
        document.querySelector('#ville').textContent = ville;
      }
      else {
        // alert('Un problème est intervenu, merci de revenir plus tard.');
      }
    }
  }
}