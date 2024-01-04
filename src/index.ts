import * as express from 'express';
import { Request, Response } from 'express';
const say = require('say')

const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

app.post('/speak', (req: Request, res: Response) => {
    const { text } = req.body;
  
    if (!text) {
      return res.status(400).send('Text input missing');
    }
  
    say.speak(text, null, 1, (err: Error) => {
      if (err) {
        console.error('Error:', err);
        return res.status(500).send('Error occurred while speaking');
      }
      res.send('Speech generated successfully');
    });
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
