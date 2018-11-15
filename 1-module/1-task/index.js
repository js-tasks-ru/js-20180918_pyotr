/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow (m, n) {
	let x = 1;
	while (n > 0){
		x *= m;
    n--;
	}
return x;
}
console.log(pow(2,8));