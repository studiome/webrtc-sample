import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-vidoeview',
  templateUrl: './vidoeview.component.html',
  styleUrls: ['./vidoeview.component.scss']
})
export class VidoeviewComponent implements OnInit {
  @ViewChild('videoview') cameraView!: ElementRef<HTMLVideoElement>;
  constructor() { }


  ngOnInit(): void {
    const self: this = this;
    navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then(function (stream) {
      self.cameraView.nativeElement.srcObject = stream;
    });
  }
}