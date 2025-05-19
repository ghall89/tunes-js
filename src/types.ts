export interface Track {
  id: number;
  artwork: Blob;
  title: string;
  artist: string;
  album: string;
  favorited: string;
  duration: number;
}

export interface NowPlaying extends Track {
  playerPosition: number;
}

export interface PlayList {
  title: string;
  track: Track[];
}

export interface ShuffleState {
  shuffleEnabled: boolean;
  shuffleMode: ShuffleMode;
}

export type ShuffleMode = 'songs' | 'albums' | 'groupings' | null;

export type RepeatMode = 'off' | 'one' | 'all' | null;

export type PlayerState =
  | 'stopped'
  | 'playing'
  | 'paused'
  | 'fast forwarding'
  | 'rewinding'
  | null;
