
export const isNumberEven = (i) => {
  // i will be an integer.
  var i;
  // Return true if it's even, and false if it isn't.
   if(i%2===0)
       return true;
   else 
       return false;
};

export const getFileExtension = (str) => {
  // str will be a string, but it may not have a file extension.
    var str;
  // Return the file extension (with no period) if it has one, otherwise false
   
  var filenameArray = str.split('.');

    if(filenameArray.length <= 1) {
        //  i.e. “foo” becomes [“foo”] (array with 1 member)
        return false;
    } else {
        //  must be an array with more than 1 member.  The extension must be at the end.
        return filenameArray[filenameArray.length - 1];
    }
   
};

export const longestString = (arr) => {
  // arr will be an array.
  var arr;
  // Return the longest string in the array
   var longest = 0;
    var longestString = "";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > longest && typeof arr[i] =="string") {
        longest = arr[i].length;
        longestString = arr[i];
        }
    }
    return longestString;
};

export const reverseString = (str) => {
  // str will be an string
   var str;
  // Return a new string who's characters are in the opposite order to str's.
   var o = '';
  for (var i = str.length - 1; i >= 0; i--)
    o += str[i];
  return o;
};

export const isPalindrome = (str) => {
  // str will be an string
   var str;
  // Return true if it is a palindrome and false otherwise.
 /*var palin = str.split("").reverse().join("");

    if (palin === str){
        return true;
    } else {
        return false;
    }*/
  // It should be case insensitive and not consider space or punctuation.
  var chars = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
 if (chars === undefined) {
    return false;
  }
  var left = 0;
  var right = chars.length - 1;
  while (left < right) {
    if (chars[left++] !== chars[right--]) {
      return false;
    }
  }
  return true;

};

export const nestedSum = (arr) => {
  // arr will be an array, containing integers, strings and/or arrays like itself
  var arr;
  // Return the sum all the numbers you find, anywhere in the nest of arrays.
   var sum = 0;
  for (var i = 0; i < arr.length; i++) {
     if (arr[i] instanceof Array) { sum += nestedSum(arr[i]);}
     if (arr[i] === Math.round(arr[i])) {sum += arr[i];}   
  }
 return sum;
};
