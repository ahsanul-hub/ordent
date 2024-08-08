// 1
const checkStartPoint = (block) => {
  if (block.length !== 10) {
    return false;
  }

  let y = 0;
  let x = 0;

  for (let direction of block) {
    switch (direction) {
      case "n":
        y += 1;
        break;
      case "s":
        y -= 1;
        break;
      case "e":
        x += 1;
        break;
      case "w":
        x -= 1;
        break;
    }
  }
  return y === 0 && x === 0;
};

console.log(
  checkStartPoint(["n", "n", "n", "s", "s", "s", "e", "e", "w", "w"])
);
console.log(checkStartPoint(["n", "n", "n", "s", "s", "s"]));
console.log(
  checkStartPoint(["n", "n", "s", "s", "s", "s", "e", "e", "e", "w"])
);
console.log("\n");

//2
const remainder = (a, b) => {
  if (a === 0 || b === 0) {
    return "NaN";
  }

  a = Math.abs(a);
  b = Math.abs(b);

  const largeNumber = a > b ? a : b;
  const smallNumber = a > b ? b : a;

  return largeNumber % smallNumber;
};

console.log(remainder(17, 5));
console.log(remainder(13, 72));
console.log(remainder(0, 1));
console.log("\n");

//3
const sortStrings = (str1, str2, str3) => {
  let result = "";

  for (let i = 0; i < str2.length; i++) {
    result += str1[i] + str2[i] + str3[i];
  }

  return result;
};

console.log(sortStrings("aa", "bb", "cc"));
console.log("\n");

//4
const getAcronym = (name) => {
  const words = name.split(" ");

  const firstCharacter = words[0]?.[0] || "";
  const lastCharacter = words[words.length - 1]?.[0] || "";

  return (firstCharacter + lastCharacter).toUpperCase();
};

console.log(getAcronym("Thomas Meyer"));
console.log(getAcronym("martin schmidt"));
console.log(getAcronym("john doe"));
