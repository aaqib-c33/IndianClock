const clock = document.getElementById("clock");
setInterval(function () {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Asia/Kolkata",
  };
  let date = new Date();
  clock.innerHTML = date.toLocaleDateString("en-IN", options);
}, 1000);
