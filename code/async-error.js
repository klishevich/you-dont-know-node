try {
  setTimeout(function () {
      throw new Error("Fail!");
  }, Math.round(Math.random()*100));
} catch (e) {
  console.log('Custom Error: ' + e.message);
}

// DOES NOT WORK
// process.on('unaughtException', (error) => {
//   console.log('error!!!', error.message);
//   process.exit(1);
// });
