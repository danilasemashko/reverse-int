module.exports = function reverse (n) {
	var n1 = 0;
	if(n<0){
		n = n * -1;
	}
	
  while(n>0){
  	n1 = n1 *10;
  	n1 = n1 + n % 10;
  	n = Math.floor(n / 10);

  }
  return(n1);
}
