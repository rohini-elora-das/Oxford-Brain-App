
function learnRandomPairsTask(){
    
  // make an array that will hold all the pairs in a random order
  var iSet
  var currSet
  var allPairs = []
  lrnPrsObj.maxTrial = (lrnPrsObj.maxSet) * G.pairsMat.length;
  for (iSet=0; iSet<lrnPrsObj.maxSet;iSet++){
	  currSet = shuffleArr(G.pairsMat);
	  allPairs = allPairs.concat(currSet)
  }
  
  
  lrnPrsObj.randOrderPairs = allPairs
  
  
  document.onkeydown = checkKey_learnPairs; // Alon: moved this from "clearCanvas". not sure why there's no () at the end, but left it as it was.
  document.getElementById("learnRandomPairsTab").style.display="inline";

  lrnPrsObj.imgPresentTime = new Date();
}
function checkKey_learnPairs(e) {
  // only proceed if subject pressed enter.
  if (e.keyCode == '13') { //enter
    conExpPair();
  }
}

function conExpPair(){
    
  var buttonPressTime = new Date();
  lrnPrsObj.rt = calResponseTime(buttonPressTime,lrnPrsObj.imgPresentTime);
  
  
  lrnPrsObj.nodeNumImg1 = lrnPrsObj.randOrderPairs[lrnPrsObj.trial][0];
  lrnPrsObj.nodeNumImg2 = lrnPrsObj.randOrderPairs[lrnPrsObj.trial][1]// no 

  lrnPrsObj.trial =lrnPrsObj.trial+1; //lrnPrsObj.trial starts from 0 so using it in the line above for indexing before incrementing 


  /* the 2 pictures*/
  document.getElementById("lrnPrs_img1").src = exp.pathToImgDir + exp.imgFileNamesArr[lrnPrsObj.nodeNumImg1];
  document.getElementById("lrnPrs_img2").src = exp.pathToImgDir + exp.imgFileNamesArr[lrnPrsObj.nodeNumImg2];

  if (lrnPrsObj.trial>1){
    document.getElementById("lrnPrs_img1").style.display="none"
    document.getElementById("lrnPrs_img2").style.display="none"
    document.getElementById("threeDots_learnRandomPairs").style.display="inline";
    setTimeout(function(){ document.getElementById("threeDots_learnRandomPairs").style.display="none";},500);
    setTimeout(function(){document.getElementById("lrnPrs_img1").style.display="inline"; document.getElementById("lrnPrs_img2").style.display="inline";},500);
  } else{
    document.getElementById("lrnPrs_img1").style.display="inline";
    document.getElementById("lrnPrs_img2").style.display="inline";
  }
  document.getElementById("lrpscore").innerHTML="Current round number: "+lrnPrsObj.trial+" out of "+lrnPrsObj.maxTrial+" ";
  lrnPrsObj.imgPresentTime = new Date();
  if(lrnPrsObj.trial==lrnPrsObj.maxTrial){
    endAllTrials_learnRandomPairs();
  }

  save2learnRandomPairsTable();
 
}


/* end learnRandomPairs task part*/
function endAllTrials_learnRandomPairs(){

  document.getElementById("learnRandomPairsTab").style.display="none";
  document.getElementById("endDiv").style.display="inline";
}
