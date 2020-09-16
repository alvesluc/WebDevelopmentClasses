import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public headerText = "Like my repo";
  public githubUrl = "https://github.com/alvesluc/WebDevelopmentClasses";
  
  constructor() { }

  ngOnInit(): void {
  }

}
