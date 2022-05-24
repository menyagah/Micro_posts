const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const EVENTS = require('../constants');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (req, res) => {
  const { type, data } = req.body;
  if (type === EVENTS.POST_CREATED) {
    const { id, title } = data;
    console.log(id, title);
    posts[id] = { id, title, comments: [] };
  }

  if (type === EVENTS.COMMENT_CREATED) {
    const { id, content, postId } = data;

    const post = posts[postId];
    post.comments.push({ id, content });
  }

  res.send({});
});

app.listen(4002, () => {
  console.log('Listening on 4002');
});
