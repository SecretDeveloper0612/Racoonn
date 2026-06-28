import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { databases, users } from './appwrite/sdk';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic health check route
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Racoonn Backend is running!' });
});

// Example route calling Appwrite SDK
app.get('/api/status', async (req, res) => {
    try {
        // Just checking if we can ping Appwrite (or return something simple)
        res.status(200).json({ 
            service: 'Appwrite Serverless Gateway', 
            endpoint: process.env.APPWRITE_ENDPOINT 
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to connect to Appwrite' });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
