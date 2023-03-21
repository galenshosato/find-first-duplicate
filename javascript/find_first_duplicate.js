//My function
function findFirstDuplicate(arr) {
  let arrCopy = []
  for (let i = 0; i < arr.length; i ++) {
    let x = arr[i]
    if (arrCopy.includes(x)){
      return x
    }
    else {
      arrCopy.push(x)
    }
  }  
  return -1
  
}

//Function created by ChatGPT
//This function uses a hash table
function findFirstDuplicate(arr) {
  let freq = {};
  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) {
      return arr[i];
    } else {
      freq[arr[i]] = 1;
    }
  }
  return -1;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
