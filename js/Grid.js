'use strict'

class Grid{

    #setUp = false;

    constructor(htmlTableID){

        const htmlTable = document.getElementById(htmlTableID);

        console.log(htmlTable);

        if(!htmlTable) throw Error('No html table element passed as parameter to grid constructor');

        this.matrix = Array(20).fill(Array(10).fill(0));
        this.htmlTable = htmlTable;

        this.setUp();
    }

    update(piece){
        this.render(piece);
    }

    setUp(){

        if(this.#setUp !== false){
            console.warn('The grid is has already been set up');
            return false;
        } 

        let row = '<tr>';

        for(let x = 0; x < this.matrix[0].length; x++){
            row += '<td></td>';
        }

        row += '</tr>';

        for(let y = 0; y < this.matrix.length; y++){
            this.htmlTable.innerHTML += row;
        }

        this.#setUp = true;
    }

    render(piece){

        const childNodes = this.htmlTable.childNodes;
        const cols = this.matrix[0].length;
        const rows = this.matrix.length;

        // Clear grid

        for(let y = 1; y <=  rows; y++){
            for(let x = 0; x < cols; x++){

                childNodes[y].childNodes[x].style.background = 'black';

            }
        }

        // Render piece

        for(let y = 0; y < piece.matrix.length; y++){
            for(let x = 0; x < piece.matrix[0].length; x++){
                
                let color  = piece.matrix[y][x] == 1 ? 'red' : 'black';
                let coordX = x + piece.pos[1];
                let coordY = y + piece.pos[0];

                if(coordX > cols || coordY > rows || coordX < 0 || coordY < 0)
                    throw Error('Invalid coordinates; they go beyond the grid limits');

                childNodes[coordY].childNodes[coordX].style.background = color;

            }
        }

        // Render rest of elements

        for(let y = 1; y <= rows; y++){
            for(let x = 0; x < cols; x++){

                //childNodes[y].childNodes[x].style.background = 'red';

            }
        }
    }

}