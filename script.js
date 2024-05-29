const loadData = async () => {
	console.log("YEA");
	const lastFMWidget = document.getElementById("lastFM");
	const lastFMLink = document.getElementById("lastFMLink");
	const lastFMImg = document.getElementById("lastFMImg");
	const lastFMAlbum = document.getElementById("lastFMAlbum");
  
	try {
	  const response = await fetch(`lastplayed`, {
		method: "GET",
	  });
  
	  if (!response.ok) {
		throw new Error(`Error fetching data: ${response.status} - ${response.statusText}`);
	  }
  
	  const data = await response.json();
  
	  lastFMLink.innerText = `${data.trackName} - ${data.artist}`;
	  lastFMLink.href = data.url;
	  lastFMImg.src = data.albumArt;
	  lastFMImg.width = 64;
	  lastFMImg.height = 64;
	  lastFMImg.alt = `Album art for ${data.artist} - ${data.album}`;
	  lastFMAlbum.innerText = data.album;
	  lastFMWidget.style = "display:grid";
	} catch (error) {
	  console.error(error);
	  // Aquí puedes mostrar un mensaje de error al usuario o realizar otras acciones
	}
  };
  
  loadData();