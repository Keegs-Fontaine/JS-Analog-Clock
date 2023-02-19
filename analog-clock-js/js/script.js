const clock = document.querySelector(".clock");

// Toggle site theme

clock.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// get each clock hand from the document
// change each one based on js Date object

/* Change time function which takes in a specific hand,
associated timing method, a multiplier (to change its rotation in css)
and an addition (only used for hour hand) */
function changeTime(hand, time, multiplier, addition = 0) {
  document.querySelector(
    hand
  ).style.transform = `translate(-50%, -100%) rotate(${
    time * multiplier + addition
  }deg)`;
}

window.onload = applyDate;

setInterval(applyDate, 1000);

function applyDate() {
  const date = new Date();

  changeTime(".second", date.getSeconds(), 6);
  changeTime(".minute", date.getMinutes(), 6);

  /*  Hour hand uses an addition. This is so that the position of the
  hour hand reflects the position of the minute hand. This ensures
  that the hand doesn't snap into place per every hour change, but rather
  smoothly reaches that based on the amount of minutes passed in the hour.*/
  changeTime(".hour", date.getHours(), 30, date.getMinutes() / 2);
}
