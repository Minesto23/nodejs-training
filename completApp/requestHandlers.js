function start(){
	console.log("Manipulador de peticion start ha sido llamado.");
	
	function sleep(milliSeconds) {
		// obten la hora actual
		var startTime = new Date().getTime();
		// atasca la cpu
		while (new Date().getTime() < startTime + milliSeconds);
	}
	sleep(10000);	
	return "Hello start";
}

function upload(){
	console.log("Manipulador de peticion upload ha sido llamado.");
	return "Hello upload";
}

exports.start = start;
exports.upload = upload;
