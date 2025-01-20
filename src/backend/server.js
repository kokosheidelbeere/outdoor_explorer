const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,'../frontend')));

app.get('/api/test', (req,res) => {
    res.json({message: 'API is working!'});
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});