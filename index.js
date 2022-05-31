// YOUR CODE HERE
function golfScore(par, strokes){
    let namedScore;
        if (strokes === 1){ //First stroke is Hole-in-one
            namedScore = 'Hole-in-one!';
        }
        else if (strokes === par - 2){ //if 2 less
            namedScore = 'Eagle';
        }
        else if (strokes === par - 1){ //if one less
            namedScore = 'Birdie';
        }
        else if (strokes === par){ //if same number
            namedScore = 'Par';
        }
        else if (strokes === par + 1){ //if 1 above
            namedScore = 'Bogey';
        }
        else if (strokes === par + 2){ //if 2 above
            namedScore = 'Double Bogey';
        } else { 
            namedScore = 'Go Home!';
        }
return namedScore;
}

// DO NOT EDIT BELOW

try {
  module.exports = golfScore;
} catch (err) {
  console.log('golfScore loaded');
}
