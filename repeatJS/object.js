let myFavoriteFilm = {
  name: "film",
  director: "somebody",
  date: "15.02.2000",
  country: "America",
};
myFavoriteFilm.money = 10;
let showFilmName = (filmName)=>console.log(filmName);
myFavoriteFilm.showFilmName = showFilmName(myFavoriteFilm.name);
delete myFavoriteFilm.date;
console.log(myFavoriteFilm);

let str = 'hello';
console.log(str.at(-1));