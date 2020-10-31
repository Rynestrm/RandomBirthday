birthdayGif = document.querySelector(".birthdayGif");
button = document.querySelector('button');

async function getGifs() {
    const responce = await fetch(
      `http://api.giphy.com/v1/gifs/search?api_key=25J4LHZveJnRn2TxEnvpBc5BMLLNEqQ7&q=birthday`
    );
    const data = await responce.json();
    const gifs = [...data.data];
    let randomGifObject = gifs[Math.floor(Math.random() * gifs.length)];
    let randomGif = randomGifObject.images.original.url;
    birthdayGif.innerHTML = `<img src="${randomGif}" alt="random birthday gifs">`

}

getGifs();

button.addEventListener('click', getGifs);