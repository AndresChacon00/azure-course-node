app = require('express')();

app.get('/', (req, res) => {
	res.send('Bienvenidos al curso de Azure 🧑‍💻👩‍💻💻🖥️');
});

app.listen(3000, () => {
	console.log('Servidor iniciado en http://localhost:3000');
});
