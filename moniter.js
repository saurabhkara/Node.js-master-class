import os from "node:os";

function moniter() {
  //Take a snapsort
  // Take another snapsort after one second

  const oldCpus = os.cpus();

  setTimeout(() => {
    const latestCpus = os.cpus();

    const calculatedData = latestCpus.map((item, index) => {
      return {
        core: index,
        usages: calculateCpus(oldCpus[index], item) + "%",
      };
    });

    console.clear();
    console.table(calculatedData);

    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    const usedMemory = (
      (totalMemory - freeMemory) /
      (1024 * 1024 * 1024)
    ).toFixed(2);

    console.log("Used memory", usedMemory, "GB");
  }, 1000);
}

function calculateCpus(oldCpus, newCpus) {
  const oldTotal = Object.values(oldCpus.times).reduce((a, b) => a + b);
  const newTotal = Object.values(newCpus.times).reduce((a, b) => a + b);

  const idle = newCpus.times.idle - oldCpus.times.idle;
  const total = newTotal - oldTotal;
  const used = total - idle;
  return ((used * 100) / total).toFixed(1);
}
setInterval(() => {
  moniter();
}, 1000);
