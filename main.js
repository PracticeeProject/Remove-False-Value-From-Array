
// =================================================
//   কোন Array থেকে False মান গুলো মুচে পেলার পদ্ধতি।।
// =================================================

const thisArray =[
    "tamim",
    "Suborna",
    "",
    "pranta",
    "false",
    "sumit",
    "True",
    7,
    false,
    0,
    true,
    undefined,
    null,
];
let trueArray = thisArray.filter(function(eliment){
    if(eliment){
        return true;
    }
    else{
        return false;
    }
});

console.log(trueArray);

// =================================================
//       Same Solving in Alternative Way
// =================================================

const thisArray2 =[
    "tamim",
    "Suborna",
    "",
    "pranta",
    "false",
    "sumit",
    "True",
    7,
    false,
    0,
    true,
    undefined,
    null,
];

let tureArray2 = thisArray2.filter(Boolean);

console.log(tureArray2);