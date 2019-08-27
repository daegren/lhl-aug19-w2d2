const fs = require("fs");

const syncRead = () => {
  console.log("STARTING SYNC READ");
  const before = Date.now();
  console.log("BEFORE READ", before);

  const content = fs.readFileSync("./large_text.txt");

  const after = Date.now();
  console.log("AFTER READ", after);
  console.log(`READ TOOK ${after - before}MS`);

  console.log(`READ ${content.length} BYTES`);
};
syncRead();

const asyncRead = () => {
  console.log("STARTING ASYNC READ");
  const before = Date.now();
  console.log("BEFORE READ", before);

  fs.readFile("./large_text.txt", (err, data) => {
    if (err) {
      console.error(err);
      return process.exit(1);
    }

    const after = Date.now();
    console.log("AFTER READ", after);

    console.log(`READ TOOK ${after - before}MS`);

    console.log(`READ ${data.length} BYTES`);
  });
};
asyncRead();
