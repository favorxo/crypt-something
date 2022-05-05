/**
 * Snake traversal
 * @param  {Array} arr   The input 2d array
 * @param  {Number} method The method of traversal
 * @enum (1 - left-to-right, 2 - right-left, 3 - top-bottom, 4 - bottom-top)
 * @return {Array}       Traversal
 */
export const magic = (arr, method) => {
  const len1 = arr.length;
  const len2 = arr[0].length;
  let traverse = [];
  const realStuff1 = method === 1 || method === 2 ? len1 : len2;
  const realStuff2 = method === 1 || method === 2 ? len2 : len1;
  for (let i = 0; i < realStuff1; i++) {
    for (let j = 0; j < realStuff2; j++) {
      if (i % 2 === 0) {
        switch (method) {
          case 1:
            traverse.push(arr.at(i).at(j));
            break;
          case 2:
            traverse.push(arr.at(i).at(-j - 1));
            break;
          case 3:
            traverse.push(arr.at(j).at(i));
            break;
          case 4:
            traverse.push(arr.at(-j - 1).at(i));
            break;
          default:
            break;
        }
      } else {
        switch (method) {
          case 1:
            traverse.push(arr.at(i).at(-j - 1));
            break;
          case 2:
            traverse.push(arr.at(i).at(j));
            break;
          case 3:
            traverse.push(arr.at(-j - 1).at(i));
            break;
          case 4:
            traverse.push(arr.at(j).at(i));
            break;
          default:
            break;
        }
      }
    }
  }
  return traverse;
};

export const spiralPrint = (arr) => {
  if (arr.length === 0) return [];
  const found = [];
  const indexes = [];
  const len1 = arr.length;
  const len2 = arr[0].length;
  for (let i = 0; i < len2; i++) {
    found.push(arr[0][i]);
    indexes.push([0, i]);
  }
  for (let i = 1; i < len1 - 1; i++) {
    found.push(arr[i][len2 - 1]);
    indexes.push([i, len2 - 1]);
  }
  for (let i = 0; i < len2; i++) {
    found.push(arr[len1 - 1][len2 - 1 - i]);
    indexes.push([len1 - 1, len2 - 1 - i]);
  }
  for (let i = 1; i < len1 - 1; i++) {
    found.push(arr[len1 - 1 - i][0]);
    indexes.push([len1 - 1 - i, 0]);
  }
  const realArray = [];
  for (let i = 0; i < len1; i++) {
    const newCol = [];
    for (let j = 0; j < len2; j++) {
      const check = [i, j].toString();
      const checked = indexes.find((e) => e.toString() === check);
      if (!checked) {
        newCol.push(arr[i][j]);
      }
    }
    if (newCol.length !== 0) {
      realArray.push(newCol);
    }
  }
  return found.concat(spiralPrint(realArray));
};

const testData = [
  [6, 7, 8, 9, 10, 11],
  [12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23],
  [24, 25, 26, 27, 28, 29],
  [30, 31, 32, 33, 34, 35],
];

let s = spiralPrint(testData);
