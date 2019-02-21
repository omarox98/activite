var nom = prompt("entrer votre nom");
var prenom = prompt("entrer votre prenom");
var age = prompt("entrer votre age");
var ageNum = parseInt(age);
var message;
if(ageNum >= 18)
{
	message = "tu es majeure";
}
else
{
	message = "tu es mineure";
}
alert("Bonjour " + nom + " " + prenom + " " + message);