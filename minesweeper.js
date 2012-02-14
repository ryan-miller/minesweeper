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
         var _grid = (new Array(totalcells).toString().replace(/,/g, "0,") + 0).split(",")
         
         var bombCount = 0;
         
         // bombs should only be created after revealing first cell
         // to ensure that every game has at least one safe move
         while (bombCount < this.bombs && this.bombs < totalcells) {
            
            randomElement = Math.floor(Math.random() * _grid.length);

            if (randomElement > 0 && _grid[randomElement] != "b") {
               _grid[randomElement] = "b";
               bombCount++;
            }
            
         }
         // use for testing
         //_grid = ["0", "0", "b", "0", "b", "b", "0", "0", "b", "0", "0", "b", "0", "0", "0", "0", "0", "0", "0", "0"];
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
            console.log("**** starting row " + i + " ****")
            for (var j=0; j<this.grid[i].length; j++) {
               console.log("** starting column " + j + " ** (value: " + this.grid[i][j]+")");
               // check northwest
               if (i==0 || j==0) {
                  console.log("NW not present");
               } else {
                  console.log("NW value is: " + this.grid[i-1][j-1]);
                  if (this.grid[i-1][j-1] === "b" &&  this.grid[i][j] !== "b") {
                     this.grid[i][j] = parseInt(this.grid[i][j]) + 1;
                  }
               }
               
               // check north
               if (i==0) {
                  console.log("N not present");
               } else {
                  console.log("N value is: " + this.grid[i-1][j]);
                  if (this.grid[i-1][j] === "b" && this.grid[i][j]!== "b") {
                     this.grid[i][j] = parseInt(this.grid[i][j]) + 1;
                  }
               }
               
               // check northeast
               if (i==0 || j==this.dimensions.columns-1) {
                  console.log("NE not present");
               } else {
                  console.log("NE value is: " + this.grid[i-1][j+1]);
                  if (this.grid[i-1][j+1] === "b" &&  this.grid[i][j] !== "b") {
                     this.grid[i][j] = parseInt(this.grid[i][j]) + 1;
                  }
               }
               
               // check west
               if (j==0) {
                  console.log("W not present");
               } else {
                  console.log("W value is: " + this.grid[i][j-1]);
                  if (this.grid[i][j-1] === "b" &&  this.grid[i][j] !== "b") {
                     this.grid[i][j] = parseInt(this.grid[i][j])+1;
                  }
               }
               
               // check east
               if (j==this.dimensions.columns-1) {
                  console.log("E not present");
               } else {
                  console.log("E value is: " + this.grid[i][j+1]);
                  if (this.grid[i][j+1] === "b" &&  this.grid[i][j] !== "b") {
                     this.grid[i][j] = parseInt(this.grid[i][j])+1;
                  }
               }
               
               // check southwest
               if (i==this.dimensions.rows-1 || j==0) {
                  console.log("SW not present");
               } else {
                  console.log("SW value is: " + this.grid[i+1][j-1]);
                  if (this.grid[i+1][j-1] === "b" &&  this.grid[i][j] !== "b") {
                     this.grid[i][j] = parseInt(this.grid[i][j]) + 1;
                  }
               }
               
               // check south
               if (i==this.dimensions.rows-1) {
                  console.log("S not present");
               } else {
                  console.log("S value is: " + this.grid[i+1][j]);
                  if (this.grid[i+1][j] === "b" && this.grid[i][j]!== "b") {
                     this.grid[i][j] = parseInt(this.grid[i][j]) + 1;
                  }
               }
               // check southeast
               if (i==this.dimensions.rows-1 || j==this.dimensions.columns-1) {
                  console.log("SE not present");
               } else {
                  console.log("SE value is: " + this.grid[i+1][j+1]);
                  if (this.grid[i+1][j+1] === "b" &&  this.grid[i][j] !== "b") {
                     this.grid[i][j] = parseInt(this.grid[i][j]) + 1;
                  }
               }
               
            }
            
         }
         console.log(this.grid);
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




