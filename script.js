var arr = [
  {
    songName: "Baller",
    url: "https://github.com/Hpshiva/js-song-try/raw/main/Baller.mp3",
    img: "https://raagjatt.com.in/images/song/n3pg4o2j/baller-shubh-ikky.webp",
  },
  {
    songName: "Bandana",
    url: "https://github.com/Hpshiva/Song_for_Test/raw/main/Bandana.mp3",
    img: "https://raagjatt.com.co/images/song/noeozk2l/bandana-shubh.webp",
  },
  {
    songName: "Cheques",
    url: "https://github.com/Hpshiva/Song_for_Test/raw/main/Cheques.mp3",
    img: "https://i1.sndcdn.com/artworks-R7W29MVXiWp5r6ws-qicBCw-t500x500.jpg",
  },
  {
    songName: "Elevated",
    url: "https://github.com/Hpshiva/Song_for_Test/raw/main/Elevated.mp3",
    img: "https://c.saavncdn.com/742/Elevated-Punjabi-2021-20230427130521-500x500.jpg",
  },
];

var audio = new Audio();
var selectedSong = 0;
var poster = document.querySelector(".card");

function mainFunction() {
  var clutter = "";
  arr.forEach(function (elem, index) {
    clutter += `<div class="song-card" id=${index}>
      <img src="${elem.img}" alt="" />
      <div class="allsong">
        <h3>${elem.songName}</h3>
        <h3>3:45</h3>
      </div>
    </div>`;
  });
  document.querySelector(".song").innerHTML = clutter;
  audio.src = arr[selectedSong].url;
  poster.style.backgroundImage = `url(${arr[selectedSong].img})`;
}

mainFunction();

document.querySelector(".song").addEventListener("click", function (details) {
  var songCard = details.target.closest(".song-card");
  if (songCard) {
    var id = songCard.id;
    selectedSong = id;
    audio.src = arr[id].url;
    poster.style.backgroundImage = `url(${arr[id].img})`;
    audio.play();
    play.innerHTML = `<i class="ri-pause-circle-line"></i>`;
    updatePlayButton(true);
  }
});

var backward = document.querySelector(".backward");
var play = document.querySelector(".play");
var forward = document.querySelector(".forward");

play.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    updatePlayButton(true);
  } else {
    audio.pause();
    updatePlayButton(false);
  }
});

function updatePlayButton(isPlaying) {
  if (isPlaying) {
    play.innerHTML = `<i class="ri-pause-circle-line"></i>`;
  } else {
    play.innerHTML = `<i class="ri-play-circle-line"></i>`;
  }
}

forward.addEventListener("click", function () {
  if (selectedSong < arr.length - 1) {
    selectedSong++;
    mainFunction();
    audio.play();
  } else {
    forward.style.opacity = 0.3;
    forward.style.scale = 1;
  }
});
backward.addEventListener("click", function () {
  if (selectedSong > 0) {
    selectedSong--;
    mainFunction();
    audio.play();
  } else {
    backward.style.opacity = 0.3;
    backward.style.scale = 1;
  }
});
