'use strict';

class Piece{
    constructor(type,pos){

        if(!pieceTypes[type]) throw Error(`Invalid piece type '${type}' passed to piece constructor`);
        
        this.matrix = JSON.parse(JSON.stringify(pieceTypes[type]));
        this.pos = pos;
    }

    execute(){
        this.slide(0,1) // Slide down
    }

    slide(x,y){
        this.pos[1] += x;
        this.pos[0] += y; 
    }

    // User events

    rotate(){

    }
}

const pieceTypes = {
    l : [
        [1,0,0],
        [1,0,0],
        [1,1,0]
    ],
    j : [
        [0,0,1],
        [0,0,1],
        [0,1,1]
    ],
    t : [
        [1,1,1],
        [0,1,0],
        [0,0,0]
    ],
    i : [
        [1,0,0,0],
        [1,0,0,0],
        [1,0,0,0],
        [1,0,0,0]
    ],
    o : [
        [1,1],
        [1,1]
    ],
    s : [
        [0,1,1],
        [1,1,0],
        [0,0,0]
    ],
    z : [
        [1,1,0],
        [0,1,1],
        [0,0,0]
    ]
}
