import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  src;
  id;
  poster;
  onended;
  constructor() { }

  ngOnInit() {
    this.src="assets/video.mp4";
    this.id="video1";
    this.poster="assets/cover.jpg";
    this.onended="afterend()";
   }

   afterend(){
     
   }

}