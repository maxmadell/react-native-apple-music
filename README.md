<h1 align="center">

<p align="center"><img src="https://drive.google.com/uc?export=view&id=19zk8p2z3K_q_pKaJ8AUnmdkUym-BPPDr" width="300" height="80" ></p>

<p align="center">
  <a href="https://github.com/prscX/react-native-about-libraries/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" /></a>
  <a href="https://github.com/prscX/react-native-about-libraries#License"><img src="https://img.shields.io/npm/l/react-native-about-libraries.svg?style=flat" /></a>
</p>

React Native Apple Music by Bouncy

</h1>

The Apple Music API is a web service that lets you access information about the media found in the Apple Music Catalog. Here's what each one includes:

Use this service to retrieve information about albums, songs, artists, playlists, music videos, Apple Music stations, ratings, charts, recommendations, and the user's most recently played content. With proper authorization from the user, you can also create or modify playlists and apply ratings to the user's content.

Here's a quick overview of functionalities supported:

- Get the Charts of an specific Country or global
- Get recommendations for an user
- Get the user's most recently played content
- Create a Playlist
- Modify Users Playlists

## 📖 Getting started

`npm install @maxmadell/react-native-apple-music --save`

or

`yarn add @maxmadell/react-native-apple-music`

### Mostly automatic installation

`react-native link @maxmadell/react-native-apple-music --platforms ios`

`cd ios && pod install && cd ..`

## 💻 Usage

```javascript
import AppleMusic from "@maxmadell/react-native-apple-music";
```

## 💡 Initialization/Authorization Methods

All functions returning a Promise that resolves to the result.

- **initialize**( _keyID_, _teamID_, _key_ )

  Initializes the Apple Music module and resumes a logged in session if there is one. This must be the first method you call when using this module.

  - _Parameters_

    - **keyID** - (_Required_) an object with options to pass to the Spotify Module
    - **teamID** - (_Required_) Your Apple Developer Team Id
    - **key** - (_Required_) You need to create an Key at Apple's Certificates, Identifiers & Profiles Page with MusicKit as Enabled services

  - _Returns_

    - A _Promise_ that resolves to a boolean when the module finishes initialization, indicating whether or not a session was automatically logged back in

- **login_basic**()

  Login every Apple User with your Key.
  User can call non-personlised api calls like getCharts etc.

  - _Returns_

    - A Promise that resolves to a boolean, indicating whether or not the user was logged in

- **login**() (_Apple Music Subscription Required_)

  Login user with Apple Music Subscription

  - _Returns_

    - A Promise that resolves to a boolean, indicating whether or not the user was logged in

- **getICloudID**()

  Get the iCloud ID of my Apple Account

  - _Returns_

    - A Promise that resolves the iCloud Id

- **getSongCharts**()

  Get the current Apple Music Charts

  - _Returns_

    - A Promise that resolves the Apple Music Charts

- **getAlbumCharts**()

  Get the current Apple Music Album Charts

  - _Returns_

    - A Promise that resolves the Apple Music Album Charts

- **searchSong**(_query_)

  Search for Songs at Apple Music

  - _Returns_

    - A Promise that resolves an Array with Songs

- **searchAlbum**(_query_)

  Search for Albums at Apple Music

  - _Returns_

    - A Promise that resolves an Array with Albums

- **searchArtist**(_query_)

  Search for Artists at Apple Music

  - _Returns_

    - A Promise that resolves an Array with Artists

- **searchPlaylist**(_query_)

  Search for Playlists at Apple Music

  - _Returns_

    - A Promise that resolves an Array with Playlists

- **getSong**(_id_)

  Get an specific song by id

  - _Returns_

    - A Promise that resolves the requested song

- **getSongs**(_[ids]_)

  Get songs by id

  - _Returns_

    - A Promise that resolves the requested songs

- **getSongWithIsrc**(_isrc_)

  Get an specific song by isrc

  - _Returns_

    - A Promise that resolves the requested song

- **getAlbum**(_id_)

  Get an specific album by id

  - _Returns_

    - A Promise that resolves the requested album

- **getPlaylist**(_id_)

  Get an specific Catalog Playlist by id

  - _Returns_

    - A Promise that resolves the requested playlist

- **getArtist**(_id_)

  Get an specific artist by id

  - _Returns_

    - A Promise that resolves the requested artist

- **getUserPlaylists**() (_Apple Music Subscription Required_)

  Get the Playlists of my Apple Music Account

  - _Returns_

    - A Promise that resolves an Array with Playlists

- **getUserPlaylist**(_id_) (_Apple Music Subscription Required_)

  Get a Playlist of my Apple Music Account

  - _Returns_

    - A Promise that resolves to the requested Playlist

- **recentPlayed**() (_Apple Music Subscription Required_)

  Get the recently played songs, albums, artists of my Apple Music Account

  - _Returns_

    - A Promise that resolves an Array with songs, albums, artists

- **getHeavyRotation**() (_Apple Music Subscription Required_)

  Heavy Rotation is a collection of albums and playlists selected based on your iPhone listening habits.

  - _Returns_

    - A Promise that resolves an Array with songs, albums, artists

- **getRecommendations**() (_Apple Music Subscription Required_)

  Get songs, albums, artists recommendations of my Apple Music Account

  - _Returns_

    - A Promise that resolves an Array with songs, albums, artists

- **addToPlaylist**(_playlistId_, _songId_) (_Apple Music Subscription Required_)

  Add the song to the playlist in my Apple Music Account

  - _Returns_

    - A Promise that resolves to "204" if successfull

## TODO

- Return a user session after login

## ✨ Credits

## 🤔 How to contribute

Have an idea? Found a bug? Please raise to [ISSUES](https://github.com/Lemonadd-UG/react-native-apple-music/issues).
Contributions are welcome and are greatly appreciated! Every little bit helps, and credit will always be given.

## 💖 Support Bouncy

[AppStore](https://apps.apple.com/us/app/bouncy-social-music-plattform/id1435616268?ls=1)

[Google Play Store](https://play.google.com/store/apps/details?id=com.themaxmadell)

Thanks! ❤️
