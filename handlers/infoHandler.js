module.exports = function(req, res) {
    const apiDocumentation = {
        message: "API Documentation",
        endpoints: [
            {
                path: "/duck",
                method: "GET",
                description: "Serves the HTML page about ducks."
            },
            {
                path: "/goose",
                method: "GET",
                description: "Serves the HTML page about geese."
            },
            {
                path: "/hen",
                method: "GET",
                description: "Serves the HTML page about hens."
            },
            {
                path: "/file/:filename",
                method: "GET",
                description: "Serves a file from the assets folder based on the provided filename."
            },
            {
                path: "/objects/:type/:id",
                method: "GET",
                description: "Returns a specific object of a given type and ID from the data folder."
            },
            {
                path: "/objects/:type",
                method: "GET",
                description: "Returns all objects of a specific type from the data folder."
            },
            {
                path: "/objects",
                method: "GET",
                description: "Returns all objects from the data folder."
            },
            {
                path: "/info",
                method: "GET",
                description: "Provides documentation for all the APIs available in this server."
            }
        ],
        files: {
            audio: [
                "ducks.mp3",
                "geese.mp3",
                "hens.mp3"
            ],
            images: [
                "duck.jpg",
                "goose.jpeg",
                "hen.jpg"
            ],
            pages: [
                "duck.html",
                "goose.html",
                "hen.html"
            ],
            data: [
                "ducks.json",
                "geese.json",
                "hens.json"
            ]
        }
    };

    res.json(apiDocumentation);
};
