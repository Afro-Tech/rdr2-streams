import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  streams;
  featuredStreamUrl;
  pageReady = false;
  noStreamsAvailable = false;

  constructor(
    private serviceService: ServiceService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) { }

  ngOnInit() {
    this.getStreams();
  }

  getStreams() {
    this.serviceService.getStreams(0, 6).subscribe((data: any) => {
      this.streams = data.streams;

      if (this.streams.length < 1) {
        this.noStreamsAvailable = true;
      } else {
        let mostViewers = this.streams[0].viewers;
        let featuredStream = this.streams[0];

        for (let i = 0; i < this.streams.length; i++) {
          if (this.streams[i].viewers > mostViewers) {
            mostViewers = this.streams[i].viewers;
            featuredStream = this.streams[i];
          }
        }

        this.featuredStreamUrl = 'https://player.twitch.tv/?channel=' + featuredStream.channel.display_name;
        this.pageReady = true;
      }

    });
  }

  viewStream(displayName) {
    this.router.navigate(['stream', displayName]);
  }

}
