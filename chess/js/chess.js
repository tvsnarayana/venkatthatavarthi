var arr = ['a','b','c','d','e','f','g','h'];
var currentPosition= {"1a":"brook",
"1b":"bknight",
"1c":"bbishop",
"1d":"bking",
"1e":"bqueen",
"1f":"bbishop",
"1g":"bknight",
"1h":"brook",
"2a":"bpawn",
"2b":"bpawn",
"2c":"bpawn",
"2d":"bpawn",
"2e":"bpawn",
"2f":"bpawn",
"2g":"bpawn",
"2h":"bpawn",
"8a":"wrook",
"8b":"wknight",
"8c":"wbishop",
"8d":"wking",
"8e":"wqueen",
"8f":"wbishop",
"8g":"wknight",
"8h":"wrook",
"7a":"wpawn",
"7b":"wpawn",
"7c":"wpawn",
"7d":"wpawn",
"7e":"wpawn",
"7f":"wpawn",
"7g":"wpawn",
"7h":"wpawn"};
var fromPosition='';
playerPiece='b';
var gameHistory=[];

$(document).ready(function(){
	var clack=gameHistory.length;	
	board();
	setBoard();
	$("td").click(function(){				
		var newPosition=this.className;
		//if not a fromPosition then continue				
		if(!fromPosition) {
			//if this is the own property of current postion then place the from position
		   if(currentPosition.hasOwnProperty(newPosition)){			
				fromPosition= this.className;										
		   }	
		   else {alert("no coin");	}			   	
		}
		//position is null go though this
		else {			
			var cloned={};
			$.extend(cloned, currentPosition);
			gameHistory.push(cloned);	
			currentPosition[this.className] = currentPosition[fromPosition];
			delete currentPosition[fromPosition];					
			$("." + fromPosition).html("");
			$("." + this.className).html("<img src=images/" + currentPosition[this.className] + " />");
			displayPosition(fromPosition,this.className,currentPosition[this.className]);	
			fromPosition = ''; 	
			//playerPiece=currentPosition[this.className].charAt(0);		
			}									           				
	});		
	$(":button").click(function(){
		// clear pieces on screen
		for(var key in currentPosition){				
			$("."+key).html("");													
		}
		// replace currentPosition by gameHistory
		currentPosition=gameHistory[gameHistory.length-1];
		setBoard();
		gameHistory.length--;						
	});		
});
//display board function
var board=function(){
	for(var i=1;i<=8;i++){
		$("#board").append("<tr>"+"</tr>");
		for(a in arr){
			$( "#board tr:last" ).append("<td class=" + i + arr[a] + ">"+"</td>");}
	}
}
//fix pieces
var setBoard=function(){
	for(var key in currentPosition){				
		$("." + key).html("<img src=images/" + currentPosition[key] + " />");
	}
}
//display history
var displayPosition=function(from,to,coin){	
	var player=(coin.charAt(0)==='w') ?"white":"black";
	$("#info tbody:last").append("<tr> <td> from:"+from+"; to:"+to+"</td>"+"<td>"+coin+"</td>"+"<td>"+player+"</td>"+"\n"+"</tr>");	
}

