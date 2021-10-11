import express from 'express';
const app = express();

app.use(express.json());



app.get('/', (req, res, next) => {
    const username = req.query.username;
    const data = username ?
        tweets.filter((tweet) => tweet.username === username) :
        tweets;
    res.status(200).json(data);
});

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).send('Server Error');

});

app.listen(8080, () => {
    console.log('start! express server on port 3000');
});