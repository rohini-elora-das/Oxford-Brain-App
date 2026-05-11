// functions to read and write from sql tables

function getParamOfLastTableRow(tableName,paramStr){// counts the number of repetitions in the task part that was played before
	var param
	var xhttp;
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var myData = JSON.parse(this.responseText);
			console.log("My data length:"+myData.length);
			if (myData.length>0){
				//get the param value of the last row with the current subjectId and tableName
				param = Number(eval("myData[myData.length-1]." + paramStr));
				console.log("My data length next: "+param);
			}else{
				param=-1;
			}
		}
	};
	xhttp.open("GET", "getParamFromTable.php?tableName="+tableName+"&subjectId="+exp.subjectId+"&paramStr="+paramStr, false);
	xhttp.send();
	return param;
}





function getScore(tableName){// check the number of points that was earned until now
	var xhttp;
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var myData = JSON.parse(this.responseText);
			var len = myData.length;
			if (len>0){
				score = Number(myData[len-1].score);
			}else{
				score=0;
			}
		}
	};
	xhttp.open("GET", "getScore.php?tableName="+tableName+"&subjectId="+exp.subjectId, false);
	xhttp.send();
	return score;
}

/*save variable into sql table*/
function save2imagesFilesTable(sqlStr){ // save in sql table
	var xhttp;
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			 console.log("wrote new map:" + this.responseText);
		}
	};
	xhttp.open("POST", "save2imagesFilesTable.php", true);
	xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhttp.send("sqlStr="+sqlStr);
}


function save2subjectDetailsAndStartTimeTable(){//
	var d = new Date();
	$.ajax({
		type:'POST',
		url: 'save2subjectDetailsAndStartTimeTable.php',
		data: {subjectId:exp.subjectId,d:d},
		async: true,
		dataType:'json',
		success: function() {
		}
	});

}


function save2learnRandomPairsTable(){
	$.ajax({
		type:'POST',
		url: 'save2learnRandomPairsTable.php',
		data: {subjectId: exp.subjectId, run:exp.run, map:exp.map, trial:lrnPrsObj.trial,nodeNumImg1:lrnPrsObj.nodeNumImg1,imgFileName1:exp.imgFileNamesArr[lrnPrsObj.nodeNumImg1],nodeNumImg2:lrnPrsObj.nodeNumImg2,imgFileName2:exp.imgFileNamesArr[lrnPrsObj.nodeNumImg2], rt:lrnPrsObj.rt},
		async: true,
		dataType:'json',
		success: function(ans) {
		}
	});
}


function save2whichIsCloserTable(){
	$.ajax({
		type:'POST',
		url: 'save2whichIsCloserTable.php',
		data: {subjectId: exp.subjectId,trial:closerObj.trial,
			run: exp.curRun,map:exp.curMap,
			numCorrect:closerObj.numCorrect, targetNode:closerObj.targetNode,node1:closerObj.node1,node2:closerObj.node2,
			distTargToNode1:closerObj.distTargToNode1,distTargToNode2:closerObj.distTargToNode2,
			correctAnswer:closerObj.correctAnswer, choice: closerObj.choice,
			wasCorrect:closerObj.wasCorrect, rt: closerObj.rt
		},
		async: true,
		dataType:'json',
		success: function(ans) {
		}
	});
}


