export const shortStr = (str) => {
  let newStr = "";
  if (str.length > 25) {
    let slicedStr = str.slice(0, 25);
    newStr = slicedStr + "...";
  } else {
    newStr = str;
  }
  return newStr;
};
