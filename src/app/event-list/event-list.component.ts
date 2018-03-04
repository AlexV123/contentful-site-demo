import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  // define private class properties
  events: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) { }

  // fetch data on init
  ngOnInit() {
    this.contentfulService.getEvents()
      .then(events => this.events = events);
    this.contentfulService.getImage()
      .then(image => {
        let imageUrl = 'https:' + image;
        let imagesDiv = document.getElementById('images');
        let imageDiv = document.createElement("div");
        let imageFile = document.createElement("img");
        imageFile.src = imageUrl;
        imageDiv.appendChild(imageFile);
        imagesDiv.appendChild(imageDiv);
      });
  }
}
