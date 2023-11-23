// Magic 8 Ball by seher

// Btn Event Listener
document.getElementById("ball-img").addEventListener("click", btnClicked);

let outputEl = document.getElementById("output");

//Btn click function
function btnClicked() {
  console.log("hi");

  let msg = document.getElementById("ques-in").value.toLowerCase();
  console.log(msg);
  if (msg === "does magic 8 ball even work?") {
    outputEl.innerHTML = `<p> How DARE you doubt me!>:0 </p>`;
  } else if (msg == "is javascrip awesome?") {
    outputEl.innerHTML = `<p> of course!</p>`;
  } else if (msg === "hi") {
    outputEl.innerHTML = `<p>hello!</p>`;
  } else {
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.2) {
      outputEl.innerHTML = `<p> Withouta Doubt </p>`;
    } else if (randNum < 0.4) {
      outputEl.innerHTML = `<p> As i see it....Yes </p>`;
    } else if (randNum < 0.6) {
      outputEl.innerHTML = `<p> contcentrate and ask again </p>`;
    } else if (randNum < 0.8) {
      outputEl.innerHTML = `<p> Don't count on it </p>`;
    } else {
      outputEl.innerHTML = `<p> Outlook not so good...</p>`;
    }
  }
}
