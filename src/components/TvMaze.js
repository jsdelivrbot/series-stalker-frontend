import TvMaze from "tv-maze";

const tvMazeClient = TvMaze.createClient();

function client(query, callback) {
    tvMazeClient.search(query, function (err, shows) {
        callback(shows);
    });
}

export default client;
