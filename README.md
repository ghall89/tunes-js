# tunes-js

A Node package for controlling Music.app on macOS, written in TypeScript.

# Functions

### isRunning

Asyncronous function that checks to see if Music.app is running. Returns a boolean.

``` js
import { isRunning } from 'tunes-js'

const running = await isRunning()
```

### launch

Asyncronous function that launches Music.app if it's not currenly running.

``` js
import { launch } from 'tunes-js'

await launch()
```

### getNowPlaying

Asyncronous function that retrieves the currently playing track. If nothing is playing, or Music.app is not running, function returns `null`.

Returns an object with the following properties:

__id:__ Integer, the track's unique ID.
__artwork:__ Image blob representing the tracks artwork.
__title:__ String, the track's title.
__artist:__ String, the track's artist.
__album:__ String, the name of the track's album.
__favorited:__ Boolean, whether the track is favorited.
__duration:__ Float, the tracks length in seconds.
__playerPositon:__ Float, the current position of the playhead in seconds.

``` js
import { getNowPlaying } from 'tunes-js'

const nowPlaying = await getNowPlaying()
```

### getPlayerState

Asyncronous function that returns a string with the current playback state ("stopped", "playing", "paused", "fast forwarding", "rewinding"). Returns null if Music.app is not running.

``` js
import { getPlayerState } from 'tunes-js'

const playerState = await getPlayerState()
```

### getShuffleState

Asyncronous function that returns an object with the current shuffle state. Returns null if Music.app is not running.

Returns an object with the following properties:

__shuffleEnabled:__ Boolean representing whether shuffle is turned on or off.
__shuffleMode:__ String, the current shuffle "mode", either "songs", "albums", or "groupings".

``` js
import { getShuffleState } from 'tunes-js'

const shuffleState = await getShuffleState()
```

## License

MIT License

Copyright (c) 2025 Graham Hall

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
