const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

module.exports = function(req, res) {
    const filename = req.params.filename;
    const mimeType = mime.lookup(filename) || 'application/octet-stream';
    const folders = ['images', 'pages', 'audio'];
    let filePath;

    for (let folder of folders) {
        let potentialPath = path.join(__dirname, '../assets', folder, filename);
        if (fs.existsSync(potentialPath)) {
            filePath = potentialPath;
            break;
        }
    }

    if (!filePath) {
        res.status(404).send(`File not found: ${filename}`);
        return;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.status(500).send(`Error reading file: ${filename}`);
            return;
        }
        res.writeHead(200, {'Content-Type': mimeType});
        res.end(data);
    });
};
