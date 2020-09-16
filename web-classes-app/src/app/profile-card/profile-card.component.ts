import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  public imageVisible = true;
  public name = "Lucas";
  public career = "Developer";
  public profileImage = "https://www.w3schools.com/howto/img_avatar.png";

  constructor() { }

  ngOnInit(): void {
  }

  showImage() {
    this.imageVisible = true;
  }

  hideImage() {
    this.imageVisible = false;
  }

}
