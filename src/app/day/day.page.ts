import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DB, Day, Days } from '../model';
import { DBService } from '../db.service';

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

  toHM(datetime: number) {
    const date = new Date(datetime)
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
    return `${hours}:${minutes}`
  }

}
