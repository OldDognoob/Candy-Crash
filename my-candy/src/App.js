import {useState, useEffect} from 'react';


/*Creating a board for the game by using 8 as width and 8 as height.
In order to play we need 64 different colors. 
The board for the game will be an array of 64 for items of different colors*/

const width = 8
const candyColors = [
  'blue',
  'green',
  'orange',
  'yellow',
  'red',
  'purple'
]
// use setCurrentColorArrangement and instead of consoling outside of the loop 
// we will set the setCurrentColorArrangement after the loop ending
// so we will get the randomColorArrangement array after the loop is running to fill up with the 64 random items

const App = () => {
  //useState to set up in an empty array
  const[currentColorArrangement, setCurrentColorArrangement]= useState([]);

  const createBoard = () => {
    // each time we get a random color, we need to be above the loop because every time we are looping we will get the random color arrangement 
    const randomColorArrangement = []
    /*to create the random board of different 64 items we need to run a for loop. 
    Its time we increment we are going to get a different color*/
    for(let i=0; i< width * width; i++){
      //we are speeding up a different number of colors
      //so to get a random color passing a random number from 0 to five to candyColors array and then return either yellow, red, orange or purple
        const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)]
        randomColorArrangement.push(randomColorArrangement)
    }
    setCurrentColorArrangement(randomColorArrangement)
   
  }

  useEffect(() => {
    createBoard();
  },[])

  console.log(currentColorArrangement);

  return (
    <div className="app">
        <div className="game">
          {currentColorArrangement.map((candyColor, index :number)=>
          // eslint-disable-next-line jsx-a11y/alt-text
          <img 
          
          key={index}
          style={{backgroundColor: candyColor}}
          />

          )}
        </div>
    </div>
  )
}
export default App;