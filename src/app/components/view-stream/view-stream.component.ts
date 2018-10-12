import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-view-stream',
  templateUrl: './view-stream.component.html',
  styleUrls: ['./view-stream.component.scss']
})
export class ViewStreamComponent implements OnInit {
  stream = null;
  videoUrl;
  chatUrl;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceService: ServiceService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getStream(params.id);
    });
  }

  getStream(displayName) {
    this.serviceService.getStream(displayName).subscribe((data: any) => {
      this.stream = data.stream;
      this.videoUrl = 'https://player.twitch.tv/?channel=' + this.stream.channel.display_name;
      this.chatUrl = 'https://www.twitch.tv/embed/' + this.stream.channel.display_name + '/chat';
    });
  }

}
