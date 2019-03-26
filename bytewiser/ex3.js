var replcaedArr;
process.stdin.on('data', function(data){
	replcaedArr = new Buffer(data);
	for(let i = 0, length1 = replcaedArr.length; i < length1; i++){
		if (replcaedArr[i] === 46) {
			replcaedArr[i] = 33;
		}
	}
	console.log(replcaedArr);
});