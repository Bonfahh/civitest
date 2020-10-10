const express = require("express");
const cors = require("cors");
const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const messages = [
  {
    id: 1,
    timestamp: 1602294860,
    subject: 'Hi there!',
    detail: 'Hi there David, just passing to know how are you.',
    read: false,
  },
  {
    id: 2,
    timestamp: 1602219260,
    subject: 'Vivamus a mi.',
    detail: 'Donec libero ante, dignissim at blandit sit amet, finibus id sapien. Etiam.',
    read: false,
  },
  {
    id: 3,
    timestamp: 1602154460,
    subject: 'Suspendisse sit amet feugiat.',
    detail: 'Nam urna augue, euismod nec felis a, cursus ultrices purus. Donec sit amet metus vitae neque.',
    read: false,
  },
  {
    id: 4,
    timestamp: 1601996060,
    subject: 'Nunc nec.',
    detail: 'In condimentum pellentesque faucibus. Nulla facilisi. Vestibulum massa metus, rutrum.',
    read: false,
  },
  {
    id: 5,
    timestamp: 1601218460,
    subject: 'Mauris congue, augue.',
    detail: 'In vel purus justo. Nulla venenatis, ante nec lacinia efficitur, felis massa vestibulum erat, rutrum imperdiet est justo.',
    read: true,
  },
];

app.get("/messages", (request, response) => {
  return response.json(messages);
});

app.post("/messages", (request, response) => {
  const { subject, detail, timestamp } = request.body;

  const lastId = messages.slice(-1)[0].id;

  const message = {
    id: lastId += 1,
    timestamp,
    subject,
    detail,
    techs,
    read: false,
  };

  messages.push(message);

  return response.json(message);
});

app.put("/messages/:id", (request, response) => {
  const { id } = request.params;

  const messageIndex = messages.findIndex(m => m.id == parseInt(id));
  // parseInt(id) because of Javascript problem to understand "1" as int
  // the correct would be to use uuid()

  if (messageIndex < 0) {
    return response.status(400).json({ error: 'Message not found' });
  }

  messages[messageIndex].read = true;

  return response.json(messages[messageIndex]);
});

module.exports = app;
