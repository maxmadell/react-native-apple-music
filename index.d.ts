/// <reference types="musickit-js" />

declare module "@bouncyapp/react-native-apple-music" {
  export interface AppleMusic {
    initialize(keyID: string, teamID: string, key: string): Promise<boolean>;
    getICloudID(): Promise<string>;
    getSongCharts(): Promise<MusicKit.SearchChartResult>;
    getAlbumCharts(): Promise<MusicKit.SearchChartResult>;
    search(): Promise<MusicKit.SearchResult>;
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
