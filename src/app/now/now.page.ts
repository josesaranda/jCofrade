import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { DBService } from '../db.service';
import { BrotherHood, DB, Places } from '../model';
import { toHM } from '../util';

type BrotherHoodNow = {
  name: string
  schedule: {
    name: string
    datetime: number
  }
}

@Component({
  selector: 'app-now',
  templateUrl: './now.page.html',
  styleUrls: ['./now.page.scss'],
})
export class NowPage implements OnInit {
  brotherhoodsNow: BrotherHoodNow[] = []
  dateNow: string

  constructor(
    private dbService: DBService
  ) { }

  ngOnInit() {
    let date = this.getDate()
    this.dateNow = this.toHM(date)
    this.dbService.getDB().subscribe(dataBase => {
      const brotherhoods = this.concatBrotherhoods(dataBase)
      this.getBrotherhoodsNow(brotherhoods, date)
      setInterval(() => {
        date = this.getDate()
        this.dateNow = this.toHM(date)
        this.getBrotherhoodsNow(brotherhoods, date)
      }, 10000)
    })
  }

  toHM = toHM

  private getDate() {
    if (!environment.production) {
      return 1648827095557 - 1000 * 60 * 3
    }
    return Date.now()
  }

  private concatBrotherhoods(dataBase: DB) {
    let brotherhoods = []
    for (let day in dataBase) {
      brotherhoods = brotherhoods.concat(dataBase[day].brotherhoods)
    }
    return brotherhoods
  }

  private getBrotherhoodsNow(brotherhoods: BrotherHood[], fromDate: number) {
    const delay = 1000 * 60 * 7; // milliseconds * seconds * minutes
    this.resetBrotherhoodsNow();
    brotherhoods.forEach(brotherhood => {
      for (let datetimeName in brotherhood.datetimes) {
        const datetime = brotherhood.datetimes[datetimeName];
        if ((fromDate >= datetime - delay) && (fromDate <= datetime + delay)) {
          this.brotherhoodsNow.push({
            name: brotherhood.name,
            schedule: {
              name: Places["" + datetimeName],
              datetime
            }
          });
        }
      }
    })
  }

  private resetBrotherhoodsNow() {
    this.brotherhoodsNow = [];
  }
}
