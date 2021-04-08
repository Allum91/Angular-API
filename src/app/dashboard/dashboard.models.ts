export interface IArtistResponse {
  artists: IArtistInfo[];
}

export interface IArtistInfo {
  strArtist: string;
  intFormedYear: number;
  strLabel: string;
  strStyle: string;
  strWebsite: string;
}

