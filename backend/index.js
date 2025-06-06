const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // serve HTML UI

app.post('/send', async (req, res) => {
  const { token, uid, message } = req.body;
  console.log(`[${new Date().toLocaleString()}] Sending message to UID ${uid}`);
  console.log('Message:', message);

  // TODO: Puppeteer automation logic here if needed

  return res.json({ status: 'SBR SUCCESSFULLY SEND' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
