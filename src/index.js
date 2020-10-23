
module.exports = function towelSort (matrix) {
    let result = [];
    if (matrix === undefined){
        return result;
    }
        for (let i = 0; i < matrix.length; i++) {
            if ((i % 2) === 0) {
                for (let z = 0; z < matrix[i].length; z++) {
                    for (let j = 0; j < matrix[i].length - 1; j++) {
                        if (matrix[i][j] > matrix [i][j + 1]) {
                            let buffer = matrix[i][j];
                            matrix[i][j] = matrix [i][j + 1];
                            matrix [i][j + 1] = buffer;
                        }
                    }
                }
            } else {
                for (let z = 0; z < matrix[i].length; z++) {
                    for (let j = 0; j < matrix[i].length - 1; j++) {
                        if (matrix[i][j] < matrix [i][j + 1]) {
                            let buffer = matrix[i][j];
                            matrix[i][j] = matrix [i][j + 1];
                            matrix [i][j + 1] = buffer;
                        }
                    }
                }
            }
        }
        let calc = 0;
        for (let i = 0; i < matrix.length; i++) {
          for (let j = 0; j < matrix[i].length; j++) {
                result[calc++] = matrix[i][j];
          }
        }
    return result;
}
