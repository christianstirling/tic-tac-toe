const gridArray = [[null, null, null], [null, null, null], [null, null, null]]

let turn = 'X'
let input

function endTurn(turn){
    if (turn === 'X') {
        turn = 'O'
    } else {
        turn = 'X'
    }
}

function changeGrid(square, letter) {
    switch (square) {
        case (1):
            gridArray[0][0] = letter
            break
        case (2):
            gridArray[0][1] = letter
            break
        case (3):
            gridArray[0][2]= letter
            break
        case (4):
            gridArray[1][0] = letter
            break
        case (5):
            gridArray[1][1] = letter
            break
        case (6):
            gridArray[1][2] = letter
            break
        case (7):
            gridArray[2][0] = letter
            break
        case (8):
            gridArray[2][1] = letter
            break
        case (9):
            gridArray[2][2] = letter
            break
        default:

    }
}

function checkWinner() {
    const winningSquares = []

    if (gridArray[0][0]) {
        if (gridArray[0][1] && gridArray[0][2]) {
            winningSquares.push(gridArray[0][0], gridArray[0][1], gridArray[0][2])
            
        } else if (gridArray[1][0] && gridArray[2][0]) {
            winningSquares.push(gridArray[0][0], gridArray[1][0], gridArray[2][0])
            
        } else if (gridArray[1][1] && gridArray[2][2]) {
            winningSquares.push(gridArray[0][0], gridArray[1][1], gridArray[2][2])
            
        }
    } else if (gridArray[0][2]) {
        if (gridArray[1][1] && gridArray[2][0]) {
            winningSquares.push(gridArray[0][2], gridArray[1][1], gridArray[2][0])
            
        } else if (gridArray[1][2] && gridArray[2][2]){
            winningSquares.push(gridArray[0][2], gridArray[1][2], gridArray[2][2])
            
        }
    } else if (gridArray[2][2] && gridArray[2][1] && gridArray[2][0]) {
        winningSquares.push(gridArray[2][2], gridArray[2][1], gridArray[2][0])
        
    } else if (gridArray[1][1]) {
        if (gridArray[1][0] && gridArray[1][2]) {
            winningSquares.push(gridArray[1][0], gridArray[1][2], gridArray[1][1])
            
        } else if (gridArray[0][1] && gridArray[2][1]) {
            winningSquares.push(gridArray[0][1], gridArray[1][1], gridArray[2][1])
            
        }
    } else {
    }

    return winningSquares
}

function endGame() {

}

function eventAfterClick() {
    changeGrid(input, turn)

    let outcome = checkWinner()
    if (outcome) {
        
    }
}