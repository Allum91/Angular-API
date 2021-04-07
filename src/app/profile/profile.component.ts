import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  name = 'Alex Allum';
  age = 29;
  interest = ['Wolf Alice', 'Foals', 'Kaytranada', 'Folamour'];
  imageURL = '../../assets/images/moi.jpeg';

  handleClick() {
    this.name='Alexander'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
