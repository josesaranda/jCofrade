import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-now',
  templateUrl: './now.page.html',
  styleUrls: ['./now.page.scss'],
})
export class NowPage implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {

  }
}
