// complete the given function

function palindrome(str){
	str = str.toLowerCase();
	for (let i = 0;i<str.length/2;i++) {
		if(str[i] !== str[str.length-1 -i]){
			return false;
		}
	}
	return true;
}
let str = 'RaceCar';
console.log(palindrome(str))
module.exports = palindrome
