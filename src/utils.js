export function calculateNextValue(squares) {
    return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O';
}

export function calculateWinner(squares) {
    const winnerLines =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(let i=0;i<winnerLines.length;i++){
        const [a,b,c]=winnerLines[i];
        if(squares[a]===squares[b] && squares[a]===squares[c]){
            return squares[a];
        }
    }
    return null;
}