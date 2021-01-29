const {mm, MarkovMachine} = require('./markov');
const fs = require('fs');
const argv = process.argv;

fs.readFile(argv[2], 'utf-8', (err, data) => {
    if(err) throw err;
    const mm = new MarkovMachine(data);
    console.log(mm.makeText()); 
    return mm.makeText(); 
})
