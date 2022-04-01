import { Component, OnInit } from '@angular/core';
import { DBService } from '../db.service';
import { fakeDB } from '../fake/db';
import { BrotherHood, DB, Places } from '../model';

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

  constructor(
    private dbService: DBService
  ) { }

  ngOnInit() {
    this.dbService.getDB().subscribe(dataBase => {
      // const brotherhoods = this.concatBrotherhoods(dataBase)
      // this.getBrotherhoodsNow(brotherhoods, Date.now())
      const brotherhoods = this.concatBrotherhoods(fakeDB)
      this.getBrotherhoodsNow(brotherhoods, 1648827095557 - 1000 * 60 * 3)
    })
  }

  private concatBrotherhoods(dataBase: DB) {
    let brotherhoods = []
    for (let day in dataBase) {
      brotherhoods = brotherhoods.concat(dataBase[day].brotherhoods)
    }
    return brotherhoods
  }

  private getBrotherhoodsNow(brotherhoods: BrotherHood[], fromDate: number) {
    const delay = 1000 * 60 * 5 // milliseconds * seconds * minutes
    brotherhoods.forEach(brotherhood => {
      for (let datetimeName in brotherhood.datetimes) {
        const datetime = brotherhood.datetimes[datetimeName]
        if ((fromDate >= datetime - delay) && (fromDate <= datetime + delay)) {
          this.brotherhoodsNow.push({
            name: brotherhood.name,
            schedule: {
              name: Places["" + datetimeName],
              datetime
            }
          })
        }
      }
    })
  }
}
