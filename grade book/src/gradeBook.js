function gradeBook(num1,num2, num3){
	var avg = ((num1+num2+num3)/3);
	if (avg>=90) return "A"
	if (avg>=80) return "B"
	if (avg>=70) return "C"	
	if (avg>=60) return "D"
	return "F"
}