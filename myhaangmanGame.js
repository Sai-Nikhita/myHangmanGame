
	var name=prompt("Enter your name to play");
	$("#demo").text("HEYY, "+name);
	alert("let's play the game");
	var canvas=document.getElementById("canvas");
		var ctx=canvas.getContext("2d");
		ctx.lineWidth=4;
		ctx.fillStyle="white";
		ctx.fillRect(0,0,500,500);
		ctx.beginPath();
		ctx.moveTo(20,470); //the setup
		ctx.lineTo(120,470);
		ctx.moveTo(50,470);
		ctx.lineTo(50,100);
		ctx.lineTo(250,100);
		ctx.lineTo(250,190);
		ctx.moveTo(250,220);
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(250,220,30,0,Math.PI*2,false); //face
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(250,250); 
		ctx.lineTo(250,350);	//body length
		ctx.lineTo(220,420);	//leg1
		ctx.moveTo(250,350);
		ctx.lineTo(280,420);	//leg2
		ctx.moveTo(250,280);
		ctx.lineTo(190,280-30);
		ctx.moveTo(250,280);
		ctx.lineTo(250+60,280-30);
		ctx.stroke();

	


