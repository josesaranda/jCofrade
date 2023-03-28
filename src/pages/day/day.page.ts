import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DB, Day, Days, Places } from "@services/model";
import { DBService } from "@services/db.service";
import { toHM } from "@utils/utils";

@Component({
  selector: "app-day",
  templateUrl: "./day.page.html",
  styleUrls: ["./day.page.scss"],
})
export class DayPage implements OnInit {
  dayName: string;
  dataBase: DB;
  day: Day

  toHM = toHM
  places = Places

  constructor(
    private activatedRoute: ActivatedRoute,
    private dbService: DBService
  ) { }

  ngOnInit() {
    this.dayName = Days[this.activatedRoute.snapshot.paramMap.get("id")];
    this.dbService.getDB().subscribe(dataBase => {
      this.dataBase = dataBase
      this.day = this.dataBase[this.activatedRoute.snapshot.paramMap.get("id")]
    })
  }
}
