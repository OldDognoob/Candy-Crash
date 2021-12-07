// /* eslint-disable no-unused-vars */
// import {useState, useEffect} from 'react';
// import blank from './images/blank.png';


// /*Creating a board for the game by using 8 as width and 8 as height.
// In order to play we need 64 different colors. 
// The board for the game will be an array of 64 for items of different colors*/

// const width = 8
// const candyColors = [
//   'blue',
//   'green',
//   'orange',
//   'yellow',
//   'red',
//   'purple'
// ]
// // use setCurrentColorArrangement and instead of consoling outside of the loop 
// // we will set the setCurrentColorArrangement after the loop ending
// // so we will get the randomColorArrangement array after the loop is running to fill up with the 64 random items

// const App = () => {
//   //useState to set up in an empty array
//   const[currentColorArrangement, setCurrentColorArrangement]= useState([]);
//   const [scoreDisplay, setScoreDisplay] = useState(0)

//   //create function checkForColumnOfThree
//   const checkForColumnOfThree = () => {
//     for (let i = 0; i <= 47; i++) {
//         const columnOfThree = [i, i + width, i + width * 2]
//         const decidedColor = currentColorArrangement[i]
//         const isBlank = currentColorArrangement[i] === blank

//         if (columnOfThree.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
//             setScoreDisplay((score) => score + 3)
//             columnOfThree.forEach(square => currentColorArrangement[square] = blank)
//             return true
//         }
//     }
// }

//   const createBoard = () => {
//     // each time we get a random color, we need to be above the loop because every time we are looping we will get the random color arrangement 
//     const randomColorArrangement = []
//     /*to create the random board of different 64 items we need to run a for loop. 
//     Its time we increment we are going to get a different color*/
//     for(let i=0; i< width * width; i++){
//       //we are speeding up a different number of colors
//       //so to get a random color passing a random number from 0 to five to candyColors array and then return either yellow, red, orange or purple
//         const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)]
//         randomColorArrangement.push(randomColorArrangement)
//     }
//     setCurrentColorArrangement(randomColorArrangement)
   
//   }

//   useEffect(() => {
//     createBoard();
//   },[])

// // useEffect(()=>{
// //   const timer = setInterval(()=>{
// //     checkForColumnOfThree()
// //   },100)
// //   return ( ) => clearInterval(timer)
// // }, [checkForColumnOfThree, currentColorArrangement])

//   return (
//     <div className="app">
//         <div className="game">
//           {currentColorArrangement.map((candyColor, index )=>(
//           // eslint-disable-next-line jsx-a11y/alt-text
//           <img 
//           key={index}
//           style={{backgroundColor: candyColor}}
//           alt={candyColor}
//           />

//           ))}
//         </div>
//     </div>
//   )
// }
// export default App;

// /*line:51 Create an image for every single item in the current color in the arrangement array*/
// /*line 49-57:Getting the current color arrangement array i called the item candy color and for each item I want the index of it
// and I mapping that into an image element. If candy color has a string blue then I signed the candy color to this color */




import {useEffect, useState} from 'react'
import ScoreBoard from './components/ScoreBoard'
import blueCandy from './images/blue-candy.png'
import greenCandy from './images/green-candy.png'
import orangeCandy from './images/orange-candy.png'
import purpleCandy from './images/purple-candy.png'
import redCandy from './images/red-candy.png'
import yellowCandy from './images/yellow-candy.png'
import blank from './images/blank.png'

const width = 8
const candyColors = [
    blueCandy,
    orangeCandy,
    purpleCandy,
    redCandy,
    yellowCandy,
    greenCandy
]

const App = () => {
    const [currentColorArrangement, setCurrentColorArrangement] = useState([])
    const [squareBeingDragged, setSquareBeingDragged] = useState(null)
    const [squareBeingReplaced, setSquareBeingReplaced] = useState(null)
    const [scoreDisplay, setScoreDisplay] = useState(0)

    const checkForColumnOfFour = () => {
        for (let i = 0; i <= 39; i++) {
            const columnOfFour = [i, i + width, i + width * 2, i + width * 3]
            const decidedColor = currentColorArrangement[i]
            const isBlank = currentColorArrangement[i] === blank

            if (columnOfFour.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
                setScoreDisplay((score) => score + 4)
                columnOfFour.forEach(square => currentColorArrangement[square] = blank)
                return true
            }
        }
      }

    const checkForRowOfFour = () => {
        for (let i = 0; i < 64; i++) {
            const rowOfFour = [i, i + 1, i + 2, i + 3]
            const decidedColor = currentColorArrangement[i]
            const notValid = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55, 62, 63, 64]
            const isBlank = currentColorArrangement[i] === blank

            if (notValid.includes(i)) continue

            if (rowOfFour.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
                setScoreDisplay((score) => score + 4)
                rowOfFour.forEach(square => currentColorArrangement[square] = blank)
                return true
            }
        }
    }

    const checkForColumnOfThree = () => {
        for (let i = 0; i <= 47; i++) {
            const columnOfThree = [i, i + width, i + width * 2]
            const decidedColor = currentColorArrangement[i]
            const isBlank = currentColorArrangement[i] === blank

            if (columnOfThree.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
                setScoreDisplay((score) => score + 3)
                columnOfThree.forEach(square => currentColorArrangement[square] = blank)
                return true
            }
        }
    }

    const checkForRowOfThree = () => {
        for (let i = 0; i < 64; i++) {
            const rowOfThree = [i, i + 1, i + 2]
            const decidedColor = currentColorArrangement[i]
            const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64]
            const isBlank = currentColorArrangement[i] === blank

            if (notValid.includes(i)) continue

            if (rowOfThree.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
                setScoreDisplay((score) => score + 3)
                rowOfThree.forEach(square => currentColorArrangement[square] = blank)
                return true
            }
        }
    }

    const moveIntoSquareBelow = () => {
        for (let i = 0; i <= 55; i++) {
            const firstRow = [0, 1, 2, 3, 4, 5, 6, 7]
            const isFirstRow = firstRow.includes(i)

            if (isFirstRow && currentColorArrangement[i] === blank) {
                let randomNumber = Math.floor(Math.random() * candyColors.length)
                currentColorArrangement[i] = candyColors[randomNumber]
            }

            if ((currentColorArrangement[i + width]) === blank) {
                currentColorArrangement[i + width] = currentColorArrangement[i]
                currentColorArrangement[i] = blank
            }
        }
    }

    const dragStart = (e) => {
        setSquareBeingDragged(e.target)
    }
    const dragDrop = (e) => {
        setSquareBeingReplaced(e.target)
    }
    const dragEnd = () => {
        const squareBeingDraggedId = parseInt(squareBeingDragged.getAttribute('data-id'))
        const squareBeingReplacedId = parseInt(squareBeingReplaced.getAttribute('data-id'))

        currentColorArrangement[squareBeingReplacedId] = squareBeingDragged.getAttribute('src')
        currentColorArrangement[squareBeingDraggedId] = squareBeingReplaced.getAttribute('src')

        const validMoves = [
            squareBeingDraggedId - 1,
            squareBeingDraggedId - width,
            squareBeingDraggedId + 1,
            squareBeingDraggedId + width
        ]

        const validMove = validMoves.includes(squareBeingReplacedId)

        const isAColumnOfFour = checkForColumnOfFour()
        const isARowOfFour = checkForRowOfFour()
        const isAColumnOfThree = checkForColumnOfThree()
        const isARowOfThree = checkForRowOfThree()

        if (squareBeingReplacedId &&
            validMove &&
            (isARowOfThree || isARowOfFour || isAColumnOfFour || isAColumnOfThree)) {
            setSquareBeingDragged(null)
            setSquareBeingReplaced(null)
        } else {
            currentColorArrangement[squareBeingReplacedId] = squareBeingReplaced.getAttribute('src')
            currentColorArrangement[squareBeingDraggedId] = squareBeingDragged.getAttribute('src')
            setCurrentColorArrangement([...currentColorArrangement])
        }
    }


    const createBoard = () => {
        const randomColorArrangement = []
        for (let i = 0; i < width * width; i++) {
            const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)]
            randomColorArrangement.push(randomColor)
        }
        setCurrentColorArrangement(randomColorArrangement)
    }

    useEffect(() => {
        createBoard()
    }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            checkForColumnOfFour()
            checkForRowOfFour()
            checkForColumnOfThree()
            checkForRowOfThree()
            moveIntoSquareBelow()
            setCurrentColorArrangement([...currentColorArrangement])
        }, 100)
        return () => clearInterval(timer)
    }, [checkForColumnOfFour, checkForRowOfFour, checkForColumnOfThree, checkForRowOfThree, moveIntoSquareBelow, currentColorArrangement])


    return (
        <div className="app">
            <div className="game">
                {currentColorArrangement.map((candyColor, index) => (
                    <img
                        key={index}
                        src={candyColor}
                        alt={candyColor}
                        data-id={index}
                        draggable={true}
                        onDragStart={dragStart}
                        onDragOver={(e) => e.preventDefault()}
                        onDragEnter={(e) => e.preventDefault()}
                        onDragLeave={(e) => e.preventDefault()}
                        onDrop={dragDrop}
                        onDragEnd={dragEnd}
                    />
                ))}
            </div>
            <ScoreBoard score={scoreDisplay}/>
        </div>
    )
}

export default App