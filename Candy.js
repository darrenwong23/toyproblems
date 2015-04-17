

var candy = function(ratingArray) {

	var minimum = 99999;
	var result = [0];
	
	for(var i = 1; i<ratingArray.length; i++) {
		if(ratingArray[i]>ratingArray[i-1]) result[i] = result[i-1]+1;
		else if(ratingArray[i] === ratingArray[i-1]) result[i] = result[i-1];
		else result[i] = result[i-1]-1;
		if(result[i]< minimum) minimum = result[i];
	}
	var diff = 0;
	if(minimum > 0) diff = -minimum;
 	else if( minimum <0) diff = minimum;
	for(var i = 0; i<ratingArray.length; i++) {
		result[i] = result[i] - diff +1;
	};
}
candy([1,5,3]);
candy([1,2,3]);
candy([2,1,9,4]);
candy([9,2,1,4]);
