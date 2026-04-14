  import * as fs from 'fs';

  // create Directory
  fs.mkdirSync("c:\\nodejs\\test\\demo", { recursive: true });

    // remove Directory 
    fs.rmdirSync("c:\\nodejs\\test\\demo");
