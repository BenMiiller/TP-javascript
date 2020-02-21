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