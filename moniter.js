import os from "node:os";

function moniter() {
  //Take a snapsort
  // Take another snapsort after one second

  const oldCpus = os.cpus();

  setTimeout(() => {
    const laetstCpus = os.cpus();
  }, 1000);
}

setInterval(() => {
  moniter();
}, 1000);
