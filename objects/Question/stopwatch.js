//! Creating a stopwatch
//! Property
//! obj1.duration --> tells the duration of time between the start and stop
//! Methods
//! obj1.start() --> Start the stopwatch
//! obj1.stop() --> stop the stopwatch
//! obj1.reset() --> reset the stopwatch
function Stopwatch() {
  let time = 0;
  let startTheWatch = setInterval(() => time++, 1000);
  let stopTheWatch = clearInterval(startTheWatch);

  this.duration = time;
  this.start = function () {
    return startTheWatch;
  };
  this.stop = function () {
    return stopTheWatch;
  };
  this.reset = function () {
    return (time = 0);
  };
}

// const sw = new Stopwatch();
// sw.duration();
