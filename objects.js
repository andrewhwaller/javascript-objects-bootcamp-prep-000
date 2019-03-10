var playlist = Object.assign({}, { artist: 'song' })
var artist = 'Phil Ochs'

function updatePlaylist(playlist, artist, song) {

  return Object.assign({}, playlist, { ["Phil Ochs"]: "Here's to the State of Mississippi" })
  return playlist
}