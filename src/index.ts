import "@jxa/global-type";
import { run } from "@jxa/run";
import os from "node:os";

import {
  Track,
  NowPlaying,
  PlayList,
  ShuffleState,
  PlayerState,
} from "./types";

/** Checks if the current environment is macOS/Darwin, and throws if false. */
function darwinCheck() {
  const platform = os.platform();

  if (platform !== "darwin") {
    throw new Error("This package requires a macOS environment.");
  }
}

/** Check whether Music.app is running. */
export async function isRunning(): Promise<Boolean> {
  darwinCheck();

  try {
    const result = (await run(() => {
      const Music = Application("Music");
      return Music.running();
    })) as boolean;

    return result;
  } catch (err) {
    throw err;
  }
}

/** Launch Music.app. */
export async function launch(): Promise<void> {
  darwinCheck();

  try {
    if (!(await isRunning())) {
      await run(() => {
        const Music = Application("Music");
        Music.open();
      });
    }
  } catch (err) {
    throw err;
  }
}

/**  */

/** Get currently playing track. Returns undefined if nothing is playing. */
export async function getNowPlaying(): Promise<NowPlaying | null> {
  darwinCheck();

  try {
    if (await isRunning()) {
      const result = (await run(() => {
        const Music = Application("Music");
        if (Music.playerState() === "playing") {
          const { currentTrack, playerPosition } = Music;

          if (!currentTrack) {
            return null;
          }

          return {
            id: currentTrack.databaseID(),
            artwork: currentTrack.artworks[0]?.rawData(),
            title: currentTrack.name(),
            artist: currentTrack.artist(),
            album: currentTrack.album(),
            favorited: currentTrack.favorited(),
            duration: currentTrack.duration(),
            playerPosition: playerPosition(),
          };
        }

        return null;
      })) as NowPlaying;

      return result;
    }

    return null;
  } catch (err) {
    throw err;
  }
}

/** Get whether shuffle is on. If so, also get the shuffle mode. */
export async function getShuffleState(): Promise<ShuffleState | null> {
  darwinCheck();

  try {
    if (await isRunning()) {
      const result = (await run(() => {
        const Music = Application("Music");

        console.log(Music);

        return {
          shuffleEnabled: Music.shuffleEnabled(),
          shuffleMode: Music.shuffleMode(),
        };
      })) as ShuffleState;

      return result;
    }

    return null;
  } catch (err) {
    throw err;
  }
}

/** Get the current player state. */
export async function getPlayerState(): Promise<PlayerState> {
  darwinCheck();

  try {
    if (await isRunning()) {
      const result = (await run(() => {
        const Music = Application("Music");

        return Music.playerState();
      })) as PlayerState;

      return result;
    }

    return null;
  } catch (err) {
    throw err;
  }
}

/** Get all playlists and returns an array. */
export async function getPlaylists(): Promise<PlayList[]> {
  darwinCheck();

  try {
    if (await isRunning()) {
      const result = (await run(() => {
        const Music = Application("Music");

        const playlists = Music.playlists();

        return playlists.map((p: { tracks: () => any; name: () => any }) => {
          const tracks = p.tracks();

          return {
            name: p.name(),
            tracks,
          };
        });
      })) as PlayList[];

      return result;
    }

    return [];
  } catch (err) {
    throw err;
  }
}
