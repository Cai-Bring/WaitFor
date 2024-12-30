import WaitFor from "./WaitFor.js";
let boolean = false;
new WaitFor(() => boolean).then(() => {
  console.log("done");
});

let time = null;
let nums = 0;
time = setInterval(() => {
  console.log("interval");
  nums++;
  if (nums >= 5) {
    clearInterval(time);
    boolean = true;
  }
}, 1000);
