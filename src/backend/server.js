const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../frontend')));
app.use(express.json());  
app.get('/api/elevation/:lat/:lng', async (req, res) => {
    const { lat, lng } = req.params;
    try {
        res.json({
            latitude: lat,
            longitude: lng,
            elevation: "Coming from terrain tiles in next step"
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});