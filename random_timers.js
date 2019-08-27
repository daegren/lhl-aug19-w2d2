const times = [];

for (let i = 0; i < 100; i++) {
  const randomTime = Math.floor(2000 * Math.random());
  times.push(randomTime);
}

// console.log(times);

const buildDateData = (times, callback) => {
  const data = [];

  times
    .sort((a, b) => a - b)
    .forEach((t, i) => {
      setTimeout(() => {
        data.push({ delta: t, date: new Date().toISOString() });
        console.log(t);

        if (i === times.length - 1) {
          callback(data);
        }
      }, t);
    });

  return data;
};

const whatToDoWhenDone = data => {
  console.log(data);
};

buildDateData(times, whatToDoWhenDone);
