const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static files from the parent public directory or current if adjusted
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../'))); // fallback for Service-and-Support-Dashboard-Pro.html

const pool = new Pool({
  user: process.env.POSTGRES_USER || 'hellotv_admin',
  host: process.env.POSTGRES_HOST || 'localhost',
  database: process.env.POSTGRES_DB || 'hellotv_service',
  password: process.env.POSTGRES_PASSWORD || 'supersecretpassword',
  port: process.env.POSTGRES_PORT || 5432,
});

// GET /api/tickets
app.get('/api/tickets', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tickets ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/tickets
app.post('/api/tickets', async (req, res) => {
  const { customer_name, customer_email, customer_phone, brand, model, serial_number, defect_description } = req.body;
  try {
    const query = `
      INSERT INTO tickets (customer_name, customer_email, customer_phone, brand, model, serial_number, defect_description)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
    `;
    const values = [customer_name, customer_email, customer_phone, brand, model, serial_number, defect_description];
    const result = await pool.query(query, values);
    
    // In a real scenario, you'd trigger an n8n webhook here to start the workflow
    // fetch('http://n8n:5678/webhook/ticket-intake', { method: 'POST', body: JSON.stringify(result.rows[0]) })

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/knowledge (RAG PDF Upload Stub)
app.post('/api/knowledge', async (req, res) => {
  // In reality: parse PDF -> chunk text -> OpenAI Embeddings -> Insert into Qdrant/pgvector
  try {
    console.log('Document received for Knowledge Base indexing.');
    // Simulated upload delay
    await new Promise(r => setTimeout(r, 1000));
    res.status(200).json({ message: 'Document succesvol verwerkt en opgeslagen in de Vector Database (Qdrant).' });
  } catch(err) {
    res.status(500).json({ error: 'Fout bij verwerken document' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
