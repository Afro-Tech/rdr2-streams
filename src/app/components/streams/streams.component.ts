import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.scss']
})
export class StreamsComponent implements OnInit {
  streams: any;
  offset = 0;
  totalPages;
  constructor(
    private serviceService: ServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getStreams();
  }

  getStreams() {
    this.streams = null;
    this.serviceService.getStreams(this.offset, 9).subscribe((data: any) => {
      this.streams = data.streams;
      this.totalPages = Math.ceil((data._total / 9) - 1);
    });
  }

  viewStream(displayName) {
    this.router.navigate(['stream', displayName]);
  }

  previousPage() {
    if (this.offset > 0) {
      this.offset -= 1;
      this.getStreams();
    }
  }

  nextPage() {
    if (this.offset <= this.totalPages) {
      this.offset += 1;
      this.getStreams();
    }
  }

}
