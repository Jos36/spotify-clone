import { useRecoilState, useRecoilValue } from "recoil";
import { millistoMinutesAndSeconds } from "../lib/time";
import { playlistState } from "../atoms/playlistAtom";
import { currentTrackIdState, isPlayingState } from "../atoms/songAtom";
import useSpotify from "../hooks/useSpotify";

function Songs() {
  const playlist = useRecoilValue(playlistState);
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const spotifyApi = useSpotify();

  const playSong = (track) => {
    setCurrentTrackId(track.id);
    setIsPlaying(true);
    spotifyApi.play({ uris: track.uri });
    console.log("playing now");
  };
  return (
    <div className="text-gray-500 px-8 flex flex-col space-y-1 pb-28 ">
      {playlist?.tracks.items.map((track, i) => (
        <div
          onClick={playSong.bind(track.track)}
          className="grid grid-cols-2 py-4 px-5 hover:bg-gray-900 rounded-lg cursor-pointer"
          key={track.track.id}
        >
          <div className="flex items-center space-x-4">
            <p>{i + 1}</p>
            <img
              className="h-10 w-10"
              src={track.track.album.images[0].url}
              alt=""
            />
            <div>
              <p className="w-36 lg:w-64 truncate text-white">
                {track.track.name}
              </p>
              <p className="w-40">{track.track.artists[0].name}</p>
            </div>
          </div>
          <div className="flex items-center justify-between ml-auto md:ml-0">
            <p className="hidden md:inline w-40">{track.track.album.name}</p>
            <p>{millistoMinutesAndSeconds(track.track.duration_ms)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Songs;
