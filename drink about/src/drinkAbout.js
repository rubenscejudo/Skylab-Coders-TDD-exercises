function drinkAbout(age) {
	/*if(age < 14){
		return "drink toddy";
	}
	else if (age < 18) {
		return "drink coke";
	}
	else if (age < 21){
		return "drink beer"
	}
	
	return "drink wisky";
	refactorizado debajo*/
	if(age < 14){
		return "drink toddy";
	}
	if (age < 18) {
		return "drink coke";
	}
	if (age < 21){
		return "drink beer"
	}
	
	return "drink wisky";
}
/*Se podria refactorizar sin curly braces
	if (age < 14) return "drink toddy";
	if (age < 18) return "drink coke";
	if (age < 21) return "drink beer"
	return "drink wisky";*/
