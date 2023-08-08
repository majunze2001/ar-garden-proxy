import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import { getLink } from './getLink.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 8002;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/getLink', async (req, res) => {
    try {
        const link = await getLink();
        res.json({ link });
    } catch (error) {
        console.error('Error fetching the link:', error);
        res.status(500).send('Internal Server Error');
    }
});
app.listen(process.env.PORT || PORT);