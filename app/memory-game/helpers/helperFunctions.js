export const shuffleCards = (arr) => {
  const localArr = [...arr, ...arr];
  for (let i = localArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [localArr[i], localArr[j]] = [localArr[j], localArr[i]];
  }
  console.log("shuffleCards function ran");
  return localArr;
};

export const createState = (arr) => {
  let localArr = [];
  for (let i = 0; i < arr.length * 2; i++) {
    localArr.push({ hidden: true, matched: false });
  }
  console.log("createState function ran");
  return localArr;
};
