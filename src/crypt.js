export const crypt = (str, row, col, method) => {
  let newStr = [];
  for (let i = 0; i < row; i++) {
    newStr.push([]);
    for (let j = 0; j < col; j++) {
      newStr[i].push(str[i][j]);
    }
  }
  return newStr;
};

export const decrypt = (str, row, col, method) => {
  let newStr = [];
  for (let i = 0; i < row; i++) {
    newStr.push([]);
    for (let j = 0; j < col; j++) {
      newStr[i].push(str[i][j]);
    }
  }
  return newStr;
};
