//requiers
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
	console.log(req.params);
	res.send('Hello World :)');
});

// app.get('/helloClass', (req, res) => {
// 	res.send('Hello Students');
// });
// app.get('/helloMentors', (req, res) => {
// 	res.send('Hello Mentors');
// });

app.get('/albums', (req, res) => {
	let filteredList = albumsData.filter((album) => album.primaryGenreName === req.query.genre);

	if (filteredList.find(album.primaryGenreName === req.query.genre)) {
		res.send(filteredList);
	} else {
		res.send(albumsData);
	}
});
// using the req here as per requested for album. function for find the albume id.
// this is handler function  and res to send back the value of that function is requring from the array obj IDs.

app.get('/albums/:albumId', (req, res) => {
	console.log(req.params);
	let id = req.params.albumId;
	console.log(id);
	let album = albumsData.find((albumData) => albumData.albumId === id);
	res.send(album);

	// // var album = the album in albumsData that has albumId = id;
	// console.log('I am getting here');
	// res.send('testing');
});

app.post('/albums', (req, res) => {
	console.log(req.body);
	albumsData.push(req.body);
	res.send('this is the post endpoint');
});

app.get('/songs', (req, res) => {
	res.send(songData);
});

app.delete('/albums/:id', (req, res) => {
	const newAlbumsData = albumsData.find((album) => album.albumId !== req.params.id);
	albumsData.splice(albumsData.indexOf(newAlbumsData), 1);
	res.send('Deleted album' + req.params.id);
});
app.put('/albums/:id', (req, res) => {
	console.log(req.params.id);
	console.log(req.body);
	const index = albumsData.findindex((album) => album.albumId === req.params.id);
	albumsData[index] = { ...albumsData[index], ...req.body };
	res.send(albumsData[index]);
	//const albumToEdit = albumsData.find(album => album.albumId = req.params.id);
	//albumToEdit ={...albumToEdit,...req.body};
});

app.listen(process.env.PORT || 3000, () => {
	console.log('May be the app is running ....-_-"');
});

const albumsData = [
	{
		albumId: '10',
		artistName: 'Beyoncé',
		collectionName: 'Lemonade',
		artworkUrl100:
			'http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg',
		releaseDate: '2016-04-25T07:00:00Z',
		primaryGenreName: 'Pop',
		url: 'https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0'
	},
	{
		albumId: '11',
		artistName: 'Beyoncé',
		collectionName: 'Dangerously In Love',
		artworkUrl100:
			'http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg',
		releaseDate: '2003-06-24T07:00:00Z',
		primaryGenreName: 'Pop',
		url: 'https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0'
	}
];
