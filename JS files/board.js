

//This 2 Dimensional array holds the value of the board. It is linked with the GUI. In it, 0 denotes nothing, 1 denotes snake, 2 denotes food
var grid=[
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0]
];

//This function makes the corresponding changes in the GUI
function GUIgrid()
{
	for(var i=0;i<grid.length;i++)
	{
		for(var j=0;j<grid.length;j++)
		{
			if(grid[i][j]==0)
			{
				document.getElementById("box"+i+j).style.backgroundColor="yellow";
				document.getElementById("box"+i+j).style.borderRadius="0px";
			}
			else if(grid[i][j]==2)
			{
				document.getElementById("box"+i+j).style.backgroundColor="blue";
				document.getElementById("box"+i+j).style.borderRadius="15px";
			}
			else if(grid[i][j]==1)
			{	document.getElementById("box"+i+j).style.backgroundColor="red";
			    document.getElementById("box"+i+j).style.borderRadius="8px";
			}
			document.getElementById("box"+y[0]+x[0]).style.backgroundColor="darkred";
		}
	}
}


//This is the main function which clears the grid and installs new values of snake and food
function setupGrid()
{
	for(var i=0;i<grid.length;i++)
	{
		for(var j=0;j<grid.length;j++)
		{
			grid[i][j]=0;
		}
	}
	positionSnake();
	positionFood();
	setTimeout(moveSnake,speed);
}
