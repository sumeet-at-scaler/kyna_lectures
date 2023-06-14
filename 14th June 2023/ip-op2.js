let minimist = require("minimist");
let args = minimist(process.argv);

for(let i = 1; i <= args.n; i++){
    console.log(i);
}


