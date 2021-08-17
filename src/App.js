import React, { useState } from "react";
import "./styles.css";

var allAnime = {
  Sciencefiction: [
    {
      title: "Naruto",
      Author: "masashi kishimoto",
      rating: "5/5",
      image:
        "https://www.teahub.io/photos/full/90-904342_naruto-shippuden-wallpaper-4k.jpg"
    },
    {
      title: "Dr.stone",
      Author: "Riichiro Inagaki",
      rating: "4.8/5",
      image: "https://wallpaperaccess.com/full/1220125.jpg"
    },
    {
      title: "My hero academia",
      Author: " Kōhei ",
      rating: "4.9/5",
      image:
        "https://i.pinimg.com/originals/c6/fb/5c/c6fb5cd7b9864c767a19a2626fec44dd.jpg"
    }
  ],
  Adventure: [
    {
      title: "Demon Slayer",
      Author: "Koyoharu Gotōge",
      rating: "5/5",
      image: "https://wallpaperaccess.com/full/1097651.jpg"
    },
    {
      title: "Hunter x Hunter",
      Author: " Yoshihiro Togashi",
      rating: "4.9/5",
      image:
        "https://i.pinimg.com/originals/6a/7c/f3/6a7cf3f31f925715969969a45834944c.jpg"
    },
    {
      title: "Dragon ball z",
      Author: "Akira Toriyama",
      rating: "6/5",
      image:
        "https://i.pinimg.com/originals/f0/3d/68/f03d68742b5c6d1c3e0fc71475499adb.jpg"
    }
  ],
  Above5rated: [
    {
      title: "Death note",
      Author: "Tsugumi Ohba",
      rating: "10/10",
      image: "https://wallpaperbat.com/img/24752-death-note-wallpaper.jpg"
    },
    {
      title: "solo leveling",
      Author: "Chu-Gong",
      rating: "10/10",
      image: "https://images7.alphacoders.com/105/thumb-1920-1054068.png"
    },
    {
      title: "Beginning after the end",
      Author: "TurtleMe",
      rating: "10/10",
      image: "https://images8.alphacoders.com/113/thumb-1920-1135889.jpg"
    }
  ]
};

const Main = () => {
  const [animeList, setAnimeList] = useState(allAnime.Sciencefiction);

  function categoryClickHandler(e, category) {
    let anime = allAnime[category];
    setAnimeList(anime);
  }

  return (
    <div className="main">
      <div className="tab-container">
        {Object.keys(allAnime).map((category, index) => {
          return (
            <button
              className="tab"
              onClick={(e) => categoryClickHandler(e, category)}
              key={index}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="content-container">
        <ul>
          {animeList.map((anime) => (
            <li key={anime.title} className="card">
              <div className="card.img">
                <img src={anime.image} alt="anime" />
              </div>
              <div className="card-details">
                <h2>{anime.title}</h2>
                <div>{anime.Author}</div>
                <div>
                  <span className="card-details-rating">{anime.rating}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Main;
