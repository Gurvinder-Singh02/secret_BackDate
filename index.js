// //  1st part

// const jsonfile = require("jsonfile");
// const moment = require("moment");
// const simpleGit = require("simple-git");
// const FILE_PATH = "./data.json";

// const DATE = moment().format();

// const j_data = {
//     data : DATE
// }

// jsonfile.writeFile(FILE_PATH,j_data)

// // // 2nd part for curent date and commit

// const jsonfile = require("jsonfile");
// const moment = require("moment");
// const simpleGit = require("simple-git");
// const FILE_PATH = "./data.json";

// const DATE = moment().format();

// const j_data = {
//     data : DATE
// }

// jsonfile.writeFile(FILE_PATH,j_data);

// // simpleGit().add([FILE_PATH]).commit(DATE,{'--date': DATE})
// simpleGit().add([FILE_PATH]).commit(DATE,{'--date': DATE}).push();

// // // // 3rd

// const jsonfile = require("jsonfile");
// const moment = require("moment");
// const simpleGit = require("simple-git");
// const FILE_PATH = "./data.json";

// const DATE = moment().format();

// const j_data = {
//   data: DATE,
// };

// // for push after file is written
// jsonfile.writeFile(FILE_PATH, j_data , ()=>{
//     simpleGit().add([FILE_PATH]).commit(DATE, { "--date": DATE }).push();
// });

// // // // 4th

// const jsonfile = require("jsonfile");
// const moment = require("moment");
// const simpleGit = require("simple-git");
// const FILE_PATH = "./data.json";

// const DATE = moment()
// .subtract(1, "y")
// .add(1, "d")
// .format();

// const j_data = {
//   data: DATE,
// };

// jsonfile.writeFile(FILE_PATH, j_data , ()=>{
//     simpleGit().add([FILE_PATH]).commit(DATE, { "--date": DATE }).push();
// });

// // // // 5th

// const jsonfile = require("jsonfile");
// const moment = require("moment");
// const simpleGit = require("simple-git");
// const FILE_PATH = "./data.json";

// const makeCommit = (x, y) => {
//   const DATE = moment()
//     .subtract(1, "y")
//     .add(1, "d")
//     .add(y, "d")
//     .add(x, "w")
//     .format();

//   const j_data = {
//     data: DATE,
//   };

//   jsonfile.writeFile(FILE_PATH, j_data, () => {
//     simpleGit().add([FILE_PATH]).commit(DATE, { "--date": DATE }).push();
//   });
// };

// makeCommit(3, 3);

// // // 6th

const jsonfile = require("jsonfile");
const moment = require("moment");
const simpleGit = require("simple-git");
const FILE_PATH = "./data.json";

const makeCommit = (n) => {
  if (n === 0) return simpleGit().push();
  let x = Math.floor(Math.random() * 54);
  let y = Math.floor(Math.random() * 6);

  const DATE = moment()
    .subtract(1, "y")
    .add(1, "d")
    .subtract(y, "d")
    .subtract(x, "w")
    .format();

  const j_data = {
    data: DATE,
  };

  console.log(DATE);

  jsonfile.writeFile(FILE_PATH, j_data, () => {
    simpleGit()
      .add([FILE_PATH])
      .commit(DATE, { "--date": DATE }, makeCommit.bind(this, --n));
  });
};

makeCommit(1000);
