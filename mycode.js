const fruits = ["바나나", "딸기", "포도", "딸기"];
const fruits1 = ["바나나", "키위", "포도"];
const fruits2 = ["바나나", "딸기", "포도", "딸기"];

// 재사용성을 높이기 위해 신경써야함
function fruitsChange(fruits, from, to) {
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === from) {
      fruits[i] = to;
    }
  }
  console.log(fruits);
}

fruitsChange(fruits, "딸기", "키위");

function fruitsCount(fruits) {
  let count = 0;
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] == "키위") {
      count++;
    }
  }
  console.log(count);
}

function fruitsCountSame(fruits1, fruits2) {
  let conclude = [];
  for (let i = 0; i < fruits1.length; i++) {
    for (let j = 0; j < fruits2.length; j++) {
      if (fruits1[i] == fruits2[j]) {
        conclude.push(fruits1[i]);
      }
    }
  }
  console.log(conclude);
  console.log(conclude.length);
}

fruitsCountSame(fruits1, fruits2);
