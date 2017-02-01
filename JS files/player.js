//this variable counts player Score;
var count=-1;

//this variable when true tells that the updation of the grid should be due to the pressed key only and not due to natural recusive move
//without this variable the updation of the grid s done twice during key press. Hence on turns the snake moves two positions instead of one 
var keyMove=false;

//This specifies what to do when a key is pressed
document.addEventListener('keydown',function(event){
	keyMove=true;
	switch(event.keyCode)
	{
		case 37://left
                        if(!horizontal)
			{
				if(x[0]==0){followingBody();x[0]=grid.length-1;}else{followingBody();x[0]-=1;}
				horizontal=true;
				negativeAxis=true;
				positionFood();
			}
			else{
				keyMove=false;//If any other key is pressed, keyMove must again be set to false, to allow the normal recusive function of motion to make changes
			}
			break;
		case 38://up
			if(horizontal)
			{
				if(y[0]==0){followingBody();y[0]=grid.length-1;}else{followingBody();y[0]-=1;}
				horizontal=false
				negativeAxis=false;
				positionFood();
			}
			else{keyMove=false;}//If any other key is pressed, keyMove must again be set to false, to allow the normal recusive function of motion to make changes
			break;
		case 39://right
			if(!horizontal)
			{
				if(x[0]==grid.length-1){followingBody();x[0]=0;}else{followingBody();x[0]+=1;}
				horizontal=true;
				negativeAxis=false;
				positionFood();
			}
			else{keyMove=false;}//If any other key is pressed, keyMove must again be set to false, to allow the normal recusive function of motion to make changes
			break;
		case 40://down
			if(horizontal)
			{
				if(y[0]==grid.length-1){followingBody();y[0]=0;}else{followingBody();y[0]+=1;}
				horizontal=false;
				negativeAxis=true;
				positionFood();
			}
			else{keyMove=false;}//If any other key is pressed, keyMove must again be set to false, to allow the normal recusive function of motion to make changes
			break;
	}
})

//This function is called when the player loses
function lost()
{
	GUIgrid();
	alert("YOU LOSE\nYOUR SCORE IS "+count);
	location.reload();
}

//This function is called when the player wins
function won()
{
	alert("CONGRATULATIONS\n YOU WON");
	location.reload();
}

//This function updates the Score of the player and shows it in the GUI
function updateScore()
{
	count++;
	document.getElementById("score").innerHTML=count;
}
