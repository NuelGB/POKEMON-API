const express = require('express');
const fs = require('fs');
const path = require('path');

const components = path.join(__dirname, 'components');
const names = fs.readdirSync(components);

module.exports = () => {
    const app = express.Router();

    for (const i of names) {
        const temp = path.join(components, i);
        require(path.join(temp, `${i}-route`))(app);
    }

    return app;
};
