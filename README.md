# Bird Information Server

## Acknowledgments

Parts of this project, including JSON data and textual content in HTML files and README.md, were developed with the assistance of AI language model.

## Overview

Node.js Express server application serving HTML pages, multimedia files, and providing an API for bird data (ducks, geese, hens). Includes dynamic routing, MIME type detection for file serving, and CORS support.
## Setup and Run
1. Clone the repo and navigate to the project directory.
2. Install dependencies: `npm install`.
3. Start the server: `npm start`.
4. Access server at `http://localhost:3000`.
   
## API Endpoints

- HTML Pages: `/duck`, `/goose`, `/hen`.
- File Serving: `/file/:filename`.
- Bird Data API: `/objects`, `/objects/:type`, `/objects/:type/:id`.
- API Info: `/info`.
  
## Contributing

Feel free to contribute. Open an issue for discussion before making changes.

## License

[MIT](https://choosealicense.com/licenses/mit/)
