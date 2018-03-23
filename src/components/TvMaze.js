import TvMaze from "tv-maze";

const tvMazeClient = TvMaze.createClient();

function client(query) {
    return tvMazeClient.search(query, function (err, shows) {
        return console.log(shows);
    });
}

export function filter(resultRaw) {
    const result = resultRaw.forEach(function (show) {
        console.log(show.name);
    })
}
export default client;
