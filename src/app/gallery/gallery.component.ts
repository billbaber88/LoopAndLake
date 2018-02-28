import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css',
  './../app.component.css']
})
export class GalleryComponent implements OnInit {

  reveal(string) {
    var x = document.getElementById(string);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
  constructor() { }

  ngOnInit() {
  }

}
