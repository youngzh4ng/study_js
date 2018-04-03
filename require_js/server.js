const express = require('express');
const app = express();
const path = require('path');
const port = 3001;

app.use(express.static(path.resolve('./public')));

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log('SERVER: requirejs listen at: ', port);
});
