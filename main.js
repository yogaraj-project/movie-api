import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/movies', (req, res) => {

})

app.post('/movies', (req, res) => {

})

app.put('/movies/:id', (req, res) => {

})

app.delete('/movies/:id', (req, res) => {

})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
