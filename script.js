function indexOfIgnoreCase(s1, s2) {
  // write your code here
	const lowerStr = str.toLowerCase();
    const lowerSubStr = subStr.toLowerCase();
    
    // Find the index of the substring in the string
    return lowerStr.indexOf(lowerSubStr);
}

// Please do not change the code below
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
