import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DB, Day, Days } from '../model';
import { DBService } from '../db.service';
import { toHM } from '../util';

@Component({
  selector: 'app-day',
  templateUrl: './day.page.html',
  styleUrls: ['./day.page.scss'],
})
export class DayPage implements OnInit {
  dayName: string;
  dataBase: DB;
  day: Day

  constructor(
    private activatedRoute: ActivatedRoute,
    private dbService: DBService
  ) { }

  ngOnInit() {
    this.dayName = Days[this.activatedRoute.snapshot.paramMap.get('id')];
    this.dbService.getDB().subscribe(dataBase => {
      this.dataBase = dataBase
      this.day = this.dataBase[this.activatedRoute.snapshot.paramMap.get('id')]
    })
  }

  toHM = toHM
}
