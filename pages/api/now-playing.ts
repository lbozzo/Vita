import { getNowPlaying } from "../../lib/spotify";
import { NextApiHandler } from "next";

export type NowPlaying =
  | {
      album: string;
      albumImageUrl: string;
      artist: string;
      isPlaying: boolean;
      songUrl: string;
      title: string;
    }
  | {
      album?: string;
      albumImageUrl?: string;
      artist?: string;
      songUrl?: string;
      title?: string;
      isPlaying: boolean;
    };

const handler: NextApiHandler<NowPlaying> = async (_, res) => {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song = await response.json();
  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  );

  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  });
};

export default handler;
