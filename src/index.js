
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(arguments.length === 0) return [];
  let arr = [];
  for(let i = 0; i<matrix.length; i++){
    if(i === 0 || i%2 === 0){
      for(let j = 0; j<matrix[i].length; j++){
        arr.push(matrix[i][j])
      }
    }else{
      for(let j = matrix[i].length -1; j>=0; j--){
        arr.push(matrix[i][j])
      }
    }
  }
  // arr.sort((a, b) => a+b)
  console.log('arr = ' + arr)
  return arr;
}
