let socket = new WebSocket(
  "wss://scrobbled.tepiloxtl.net/ws-bleeding/get_last_track/odetten",
);

socket.onopen = function (e) {
  console.log("[open] Connection established");
};

socket.onmessage = function (event) {
  data = JSON.parse(event.data);
  document.getElementById("listening").innerHTML = `
    <div id="listeningstatus">
    <div id="blob"></div>
    <p id="trackStatus"></p>
    </div>
    <div id="musicBox">
    <img src="${data["recenttracks"]["track"][0]["image"]["1"]["#text"]}">
    <div id="trackInfo">
    <h3 id="trackName">${data["recenttracks"]["track"][0]["name"]}</h3>
    <p id="artistName">${data["recenttracks"]["track"][0]["artist"]["name"]}</p>
    </div>
    </div>
    `;

  if (data["recenttracks"]["track"][0].nowplaying === "true") {
    document.getElementById("trackStatus").innerHTML = "Listening to:";
    document.getElementById("blob").style.background = "#3ffc06";
  } else {
    document.getElementById("trackStatus").innerHTML = "Last song played:";
    document.getElementById("blob").style.background = "#e40404";
  }
};

socket.onclose = function (event) {
  if (event.wasClean) {
    console.log(
      `[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`,
    );
  } else {
   
    console.log("[close] Connection died");
  }
};

socket.onerror = function (error) {
  console.log(`[error]`);
};