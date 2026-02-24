import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import mainRouter from './routes/index.js'; // <-- Import your router

// Needed for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// View engine setup (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// Use the main router
app.use('/', mainRouter);

// Optional: catch-all route for 404
app.use((req, res) => {
  res.status(404).render('error', { message: 'Page not found', error: '' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});