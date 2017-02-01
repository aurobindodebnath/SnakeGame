//x[0] is head, x[x.length-1] is tail

//these variables denote the coordinates of the Snake... A dynamic Array
var x=new Array(3,4);
var y=new Array(4,4);

//these variables store the previous location the tail. It is used when the length of the snake is to be increased
var tpx=4;
var tpy=4;

//This variable sets the speed of the Snake;
var speed=100;

//This variable tells whether the snake touched its body or not
var touch=false;

//this boolean checks whether the snake is moving horizontally or vertically 
var horizontal=false;

//this boolean checks whether the movement of the snake is along negative axis or positive axis
var negativeAxis=true;

//This function positions the snake
function positionSnake()
{
	for(var k=0;k<x.length;k++)
	{
		grid[y[k]][x[k]]=1;
	}
}

//This function increases the length of the Snake
function increaseSnakeLength()
{
	x[x.length]=tpx;
	y[y.length]=tpy;
}

function checkBodyTouch()
{
	for(i=1;i<y.length;i++)
	{
		for(j=1;j<x.length;j++)
		{
			if((x[0]==x[i])&&(y[0]==y[i]))
			{
				touch=true;
				lost();
				break;
			}
		}
		if(touch)
		{ break;
		}
	}
}

//This function makes the body of the snake follow the previous part
function followingBody()
{
	tpx=x[x.length-1];//storing the previous location of tail. Needed when snake length is to be increased
	tpy=y[y.length-1];//storing the previous location of tail. Needed when snake length is to be increased
	for(i=x.length-1;i>0;i--)//copying the x coordinate, because the snake follows its previous part
	{
		x[i]=x[i-1];
	}
	for(i=y.length-1;i>0;i--)//copying the y coordinate, because the snake follows its previous part
	{
		y[i]=y[i-1];
	}
}

//This is a function that changes the coordinates of the Snake when no key is pressed
function moveSnake()
{
	if(!keyMove)//variable description in player.js
	{
		followingBody();
		if((horizontal)&&(negativeAxis))
		{
			if(x[0]==0)
			{
				x[0]=10;
			}
			x[0]--;
		}
		else if((horizontal)&&(!negativeAxis))
		{
			if(x[0]==9)
			{
				x[0]=-1;
			}
			x[0]++;
		}
		else if((!horizontal)&&(negativeAxis))
		{
			if(y[0]==9)
			{
					y[0]=-1;
			}
			y[0]++;
		}
		else//not horizontal and not negativeAxis
		{
			if(y[0]==0)
			{
				y[0]=10;
			}
			y[0]--;
		}
	}
	checkBodyTouch();
	keyMove=false;
	setupGrid();
	GUIgrid();
}