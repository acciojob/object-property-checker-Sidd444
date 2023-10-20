const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	const ans=key in sampleObject;
    return ans;
}

// Do not change the code below 
const key = prompt("Enter Key.");
alert(hasKey(key));
