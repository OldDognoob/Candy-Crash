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

const App = () => {
  const createBoard = () => {
    // each time we get a random color, we need to be above the loop because every time we are looping we will get the random color arrangement 
    const randomColorArrangement = []
    /*to create the random board of different 64 items we need to run a for loop. 
    Its time we increment we are going to get a different color*/
    for(let i=0; i< width * width; i++){
      //we are speeding up a different number of colors
      //so to get a random color passing a random number from 0 to five to candyColors array and then return either yellow, red, orange or purple
        const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)]
        randomColorArrangement.push(randomColor)

    }
    console.log(randomColorArrangement);
  }
  createBoard();
  return (
    <div></div>
  )
}
export default App;