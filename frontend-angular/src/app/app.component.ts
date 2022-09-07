import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';

import { RequestService } from './services/request.service';
import { RequestModel } from './models/request.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  books: RequestModel[] = [];

  constructor(private requestService: RequestService) {
  }

  ngOnInit(): void {
    this.requestService.getRequest()
      .pipe(take(1))
      .subscribe((res: RequestModel[]) => {
        this.books = res;
      });
  }
}
