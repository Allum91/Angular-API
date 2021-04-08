import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IArtistResponse, IArtistInfo } from './dashboard.models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  searchText: string;
  artist: IArtistInfo;
  genres = ['rock', 'pop', 'electronic']

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  handleSearch() {

    this.http.get(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${this.searchText}`)
    .toPromise()
    .then((response: IArtistResponse) => {
      this.artist = response.artists[0];
    })
  }

  // 1. Add either a select/ dropdown list with dynamic data
  // 2. Search for those values in the response and map them in the array which...
  // 3. you can display in the dropdown list!
  // 4. OnChange of the dropdown, get the value the user selected...
  // 5. Display the filtered results back to the user
}
