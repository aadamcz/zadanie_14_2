var movies = [
	{
		id: 1,
		title: "Harry Potter",
		desc: "Film o czarodzieju",
		img:
			"https://upload.wikimedia.org/wikipedia/en/b/bc/Prisoner_of_azkaban_UK_poster.jpg"
	},
	{
		id: 2,
		title: "Król Lew",
		desc: "Film o królu sawanny",
		img: "http://1.fwcdn.pl/ph/68/78/6878/213976.2.jpg"
	},
	{
		id: 3,
		title: "Minionki",
		desc: "Jak ukraść księżyc?",
		img: "http://1.fwcdn.pl/po/04/13/680413/7695336.6.jpg"
	},
	{
		id: 4,
		title: "Masza i Niedźwiedź",
		desc: "Masza wraz z niedźwiedziem doczekali się świąt!",
		img: "https://pbs.twimg.com/media/B8XdZr3CAAATk2Q.jpg"
	}
];

//Mapowanie listy na odpowiadające reactowe elementy

var moviesElements = movies.map(function(movie) {
	return React.createElement("li", { key: movie.id },
		React.createElement("h2", {}, movie.title),
		React.createElement("p", {}, movie.desc),
		React.createElement("img", { src: movie.img })
	);
});

var element = React.createElement("div", {},
	React.createElement("h1", {}, "Lista filmów"),
	React.createElement("ul", {}, moviesElements)
);

ReactDOM.render(element, document.getElementById("app"));
