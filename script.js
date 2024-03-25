function indexOfIgnoreCase(s1, s2) {
  // write your code here
	const lowerS1 = s1.toLowerCase(); // Correct variable names
    const lowerS2 = s2.toLowerCase(); // Correct variable names
    
    // Find the index of the substring in the string
    return lowerS1.indexOf(lowerS2);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
