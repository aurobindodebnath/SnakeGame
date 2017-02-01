//To avoid food to be placed on the body of the snake:::
//To place the food, the whole grid is first scanned for 0s, the index locations of a 0 is stored in an array tempIn. Then tempIn is pushed in tempOut
//tempIn is then reinitialized with index location of next zero. And agin it is pushed in tempOut.
//A random number from zero to ((length of tempOut)-1) is used to select any location of tempOut. The value in tempIn at that location can be designated to food coordinates.

//these variables store the coordinates of the food
var x1=8;
var y1=4;
 
//These arrays store the locations of all zeros
var tempOut= new Array();
var tempIn= new Array();

//This function scans the grid for zeros and pushes them in tempOut
function scanGrid()
{
	tempOut=new Array();
	for(i=0;i<grid.length;i++)
	{
		for(j=0;j<grid.length;j++)
		{
			if(grid[i][j]==0)
			{
				tempIn=[i,j];
				tempOut.push(tempIn);
				selectFoodCoordinates();
			}
		}
	}
}

//this function selects any random index of tempOut and assigns values to the food coordinates
function selectFoodCoordinates(){
	if(tempOut.length==0)
	{
		won();
	}
	else
	{	var temp=Math.floor(Math.random()*tempOut.length);
		y1=tempOut[temp][0];
		x1=tempOut[temp][1];
	}
}

//This function positions the food
function positionFood()
{
	grid[y1][x1]=2;
	if((x[0]==x1)&&(y[0]==y1))//head and food coordinates are same
	{
		grid[y1][x1]=1;
		increaseSnakeLength();
		GUIgrid();
		updateScore();
		scanGrid();
	}
}
