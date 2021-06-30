/**
 * Direction:
 * Remove duplicated data from array
 * 
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4];

const result = (data) => {
  return Array.from(new Set(data.sort()));
}

console.log(result(data));