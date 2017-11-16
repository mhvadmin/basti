import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'mhv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pageTitle="My Home Vihanga Community Portal"
  constructor(private title:Title) { 

  }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
  }

}
