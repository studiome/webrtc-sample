import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-vidoeview',
  templateUrl: './vidoeview.component.html',
  styleUrls: ['./vidoeview.component.scss']
})
export class VidoeviewComponent implements AfterViewInit {
  @ViewChild('videoview') cameraView?: ElementRef<HTMLVideoElement>;
  constructor() { }

  ngAfterViewInit(): void {
    let _cv = this.cameraView?.nativeElement;
    if (_cv) {
      navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then(function (stream) {
        _cv!.srcObject = stream;
      });
    }
  }
}