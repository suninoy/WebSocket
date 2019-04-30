var nextData = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];
var gameData= [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
];
var nextDivs=[];
var gameDivs=[];
var initGame = function(){
    for(var i=0;i<gameData.length;i++){
        var gameDiv = [];
        for(var j=0;j<gameData[0].length;j++){
            var newNode = document.createElement('div');
            newNode.className = 'none';
            newNode.style.top=(i*20)+'px';
            newNode.style.left= (j*20)+'px';
            document.getElementById('game').appendChild(newNode);
            gameDiv.push(newNode);
        }
        gameDivs.push(gameDiv);
    }
}

var initNext = function(){
    for(var i=0;i<nextData.length;i++){
        var nextDiv = [];
        for(var j=0;j<nextData[0].length;j++){
            var newNode = document.createElement('div');
            newNode.className = 'none';
            newNode.style.top=(i*20)+'px';
            newNode.style.left= (j*20)+'px';
            document.getElementById('next').appendChild(newNode);
            nextDiv.push(newNode);
        }
        nextDivs.push(nextDiv);
    }
}

var refreshGame = function(){

}