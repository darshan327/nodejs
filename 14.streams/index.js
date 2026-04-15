  import { createReadStream } from "fs";

   const stream = createReadStream("./data.txt");

   stream.on("data", (data) => {
     console.log(data);
   });