  // without CallBack

  import fs from 'fs'

  console.log('start')

   fs.readFile('test.txt', 'utf-8', (err,res) => {
     err ? console.log(err) : console.log(res);
   });
   

   console.log("End");