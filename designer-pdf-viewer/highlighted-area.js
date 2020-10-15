// Get the highlighted area given the heights of the letters and the word to highlight

const ALPHABETS = {a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7,i:8,j:9,k:10,l:11,m:12,n:13,o:14,p:15,q:16,r:17,s:18,t:19,u:20,v:21,w:22,x:23,y:24,z:25};

const calculateHighlightedArea = (heights, word) => {
  //get the height of the letters by using the index from the ALPHABETS
  let tallestHeight = 0;
  for(let i=0; i<word.length; i++) {
    tallestHeight = Math.max(tallestHeight, heights[ALPHABETS[word[i]]]);
  }

  return tallestHeight*word.length;
};


const inputs = [
  { word: 'abc', heights: [1,3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]}, // 9
  { word: 'zaba', heights: [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7]}, // 28
];

inputs.forEach(input => {
  console.log(calculateHighlightedArea(input.heights, input.word));
});

// expected output:
// 9
// 28

/*
Questions:
1) Do we care on the constraints?
2) Can we assume that all input letters are in lower case?
*/