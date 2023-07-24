/// <reference types="musickit-js" />

declare module "@maxmadell/react-native-apple-music" {
  export interface AppleMusic {
    initialize(keyID: string, teamID: string, key: string): Promise<boolean>;
    getICloudID(): Promise<string>;
    getSongCharts(): Promise<MusicKit.SearchChartResult<MusicKit.Songs>>;
    getAlbumCharts(): Promise<MusicKit.SearchChartResult<MusicKit.Albums>>;
    search(): Promise<{
      activities?: MusicKit.SearchResult<MusicKit.Activities>;
      albums?: MusicKit.SearchResult<MusicKit.Albums>;
      "apple-curators"?: MusicKit.SearchResult<MusicKit.AppleCurators>;
      artists?: MusicKit.SearchResult<MusicKit.Artists>;
      curators?: MusicKit.SearchResult<MusicKit.Curators>;
      "music-videos"?: MusicKit.SearchResult<MusicKit.MusicVideos>;
      playlists?: MusicKit.SearchResult<MusicKit.Playlists>;
      "record-labels"?: MusicKit.SearchResult<MusicKit.RecordLabels>;
      stations?: MusicKit.SearchResult<MusicKit.Stations>;
      songs?: MusicKit.SearchResult<MusicKit.Songs>;
      top?: {
        data: Array<
          | MusicKit.Activities
          | MusicKit.Albums
          | MusicKit.AppleCurators
          | MusicKit.Artists
          | MusicKit.Curators
          | MusicKit.MusicVideos
          | MusicKit.Playlists
          | MusicKit.RecordLabels
          | MusicKit.Songs
          | MusicKit.Stations
        >;
      };
    }>;
    getUserPlaylists(): Promise<MusicKit.Playlists>;
    recentPlayed(): Promise<MusicKit.Resource[]>;
    getSong(): Promise<MusicKit.Songs>;
    getAlbum(): Promise<MusicKit.Albums>;
    getArtist(): Promise<MusicKit.Artists>;
    getHeavyRotation(): Promise<{
      next?: string;
      data: MusicKit.Resource[];
    }>;
    getRecommendations(): Promise<MusicKit.PersonalRecommendation[]>;
  }
}
