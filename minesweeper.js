var board = {
      grid : [],
      dimensions : {
         rows: 5,
         columns: 4
      },
      bombs: 5,
      initialize: function() {
         var totalcells = this.dimensions.columns*this.dimensions.rows;
         // initialize the array with "0" in all indexes
         var _grid = (new Array(totalcells).toString().replace(/,/g, "0,") + "0").split(",")
         
         var bombCount = 0;

         var NWBomb = function(r,c, g) {
            //console.log("f:" + g);
         
            if (r == 0 || c == 0) {
               return 0;
            } else {
               if (g[r-1][c-1] === "b") {
                  return 1;
               }
               else return 0;
            }
            
         };
         
         // bombs should only be created after revealing first cell
         // to ensure that every game has at least one safe move
         while (bombCount < this.bombs && this.bombs < totalcells) {
            
            randomElement = Math.floor(Math.random() * _grid.length);

            if (randomElement > 0 && _grid[randomElement] != "b") {
               _grid[randomElement] = "b";
               bombCount++;
            }
            
         }
         console.log(_grid);
         
         // the convert to 2d array
         var newRow = [];
         for (var i=0; i<_grid.length; i++) {
            //console.log(i + ": "+_grid[i]);
            newRow.push(_grid[i]);
            if ((i+1) % this.dimensions.columns === 0 && i !== 0) {
               this.grid.push(newRow);
               newRow = [];
            }
            
         }
         console.log(this.grid);
         
         // then, calculate each cell's bombsTouch
         var bombCount = 0;  
         for (var i=0; i<this.grid.length; i++){
            
            for (var j=0; j<this.grid[i].length; j++) {
                            
               // check northwest
               bombCount += NWBomb(i,j, this.grid);
               /*bombCount += NBomb(i,j);
               bombCount += NEBomb(i,j);
               bombCount += WBomb(i,j);
               bombCount += EBomb(i,j);
               bombCount += SWBomb(i,j);
               bombCount += WBomb(i,j);
               bombCount += WEBomb(i,j);*/
               
               console.log(bombCount);

               //console.log("cell: "+i+" touches " + bombCount + " bombs");
               
               
            }
         }
         return this;
         
      },
      restart: {
         // function
      },
      toString: function() {
         // function
        
         var s = "[\n";
         
         for (var i=0;i<this.grid.length; i++) {
            s+="["
            for (var j=0;j<this.grid[i].length; j++) {
               s += this.grid[i][j]+",";
            }
            s = s.substring(0,s.length-1);
            s+= "],\n";
         }
         s = s.substring(0,s.length-2);
         s+="\n]";
         
         return s;
         
      }
   },
   cell = {
      index : {
         row: 0,
         column: 0
      },
      isBomb : false,
      bombsTouch: 0,
      review : {
         // function
      }
   };
   
var newBoard = board.initialize();
//alert(newBoard.toString());
/*var getUniqueRandoms = function(b) {
   console.log(b.bombs); 
   console.log()
};*/

//getUniqueRandoms(newBoard);




