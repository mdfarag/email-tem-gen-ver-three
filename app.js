const express = require('express');
const scrapProduct = require('./scrape');
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.set('view engine', 'ejs')

// using CORS 
// app.use((req) => {
//     cors({
//         origin: req.originalUrl,
//         methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//         credentials: true,
//     })
// });

app.use(bodyParser.json());

// static files
app.use(express.static('public'))

// app listen to port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// receive post body data from index.html in the public folder
// app.use(express.json({ extended: true, limit: '1mb' }));

app.use((req, res, next) => {
    const protocol = req.get('X-Forwarded-Proto') || req.protocol;
    const baseUrl = `${protocol}://${req.get('host')}`;
    // req.baseUrl = baseUrl;
    req.originalUrl = baseUrl;
    console.log("Base URL:", baseUrl);
    next();
});


app.get('/', (req, res) => {
    const apiOriginalUrl = req.originalUrl;
    res.render('index', { apiOriginalUrl })
});

app.post('/products', async (req, res) => {
    console.log("here is a request body from post request :", req.body)
    try {
        const data = await scrapProduct(req.body);
        console.log('data before send is: ', data)
        console.log("type of data iS: ", typeof data)
        res.status(200).json(data);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json(error);
    }
});

