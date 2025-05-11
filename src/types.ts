export interface Track {
  id: string;
  artwork: Blob;
  title: string;
  artist: string;
  album: string;
  favorited: string;
  duration: number;
}

export interface CurrentTrack extends Track {
  playerPosition: number;
}

export interface PlayList {
  title: string;
  track: Track[];
}

export interface ShuffleState {
  shuffleEnabled: boolean;
  shuffleMode: "songs" | "albums" | "groupings" | undefined;
}
