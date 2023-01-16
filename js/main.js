'use strict';

class TetrisGame{
    
    constructor(){
        this.grid  = new Grid('game-canvas');
        this.piece = null;
        this.speed = 500;
    }

    init(){

        this.createPiece();

        // Simple game loop

        setInterval(() => {
  
            this.piece.execute();
            this.grid.update(this.piece);

        }, this.speed);

    }

    createPiece(){

        // First select random piece type

        var pieceTypeNames = Object.keys(pieceTypes);
        var chosenIndex = Math.round(Math.random() * (pieceTypeNames.length - 1));
        let type  = pieceTypeNames[chosenIndex];

        console.log(chosenIndex,type);

        // make an instance of piece and store as 'this.piece';

        let piece = new Piece(type, [0,5]);
        this.piece = piece;
    }

    

}

const GAME = new TetrisGame();

GAME.init();