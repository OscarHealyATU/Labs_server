const express = require('express');
const app = express();
const port = 3000;

// re short for request, res short for response
// when someone visits site route server sends "hello ..."
app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}`);
});
// starts server & listens for requests 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

