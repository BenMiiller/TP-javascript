var Age = Number(prompt("Quel est votre âge ?"));

switch (Age) {
	case 18:
		alert("Bravo ! Vous êtes majeur !");
		break;

	case 42:
		alert("c'est la réponse universelle");
		break;

	case 100:
		alert("Incroyable vous êtes centenaire !");
		break;

	default:
		alert("Oh vous avez " +Age+ " ans" );
		break;
}



var Prenom = String(prompt("Comment vous appellez-vous ?"));

switch (Prenom) {
	case "sarah":
		alert("Sarah Connor ?");
		break;
	
	case "Siri":
		alert("Siri ? vraiment ? géralt vous cherche !");
		break;

	case "Scarlett":
		alert("Scarlett Johansson ! Un autographe s'il vous plait !");
		break;

	case "Audrey":
		alert("Bonjour Audrey, aujourd'hui nini a essayé de manger une saucisse de poulet, heureusement j'ai pu le stopper");
		break;

	case "Nico":
		alert("Retourne bosser faignasse !");
		break;

	case "Peter":
		alert("Bonjour Spider Man !");
		break;

	default:
		alert("Oh! c'est un joli prénom");
		break;
}