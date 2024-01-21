const fs = require('fs');
const path = require('path');

module.exports = function(req, res) {
    const type = req.params.type;
    const id = req.params.id;

    if (type) {
        const filePath = path.join(__dirname, '../data', `${type}.json`);
        if (!fs.existsSync(filePath)) {
            res.status(404).send('Type not found');
            return;
        }

        const objects = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        if (id) {
            const object = objects.find(o => o.id === parseInt(id));
            if (!object) {
                res.status(404).send('Object not found');
                return;
            }
            res.json(object);
        } else {
            res.json(objects);
        }
    } else {
        const allObjects = {};
        const types = ['ducks', 'geese', 'hens'];
        types.forEach(type => {
            const filePath = path.join(__dirname, '../data', `${type}.json`);
            if (fs.existsSync(filePath)) {
                allObjects[type] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            }
        });
        res.json(allObjects);
    }
};
