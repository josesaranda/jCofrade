import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

enum Days {
  "domingo-ramos" = "Domingo de Ramos",
  "lunes-santo" = "Lunes Santo",
  "martes-santo" = "Martes Santo",
  "miercoles-santo" = "Miercoles Santo",
  "jueves-santo" = "Jueves Santo",
  "viernes-santo" = "Viernes Santo",
  "doming-resurreccion" = "Domingo Resurrección",
}

type Schedule = {
  beggining: number
  tribune: number
  tower: number
  cathedral: number
  finish: number
}

type BrotherHood = {
  name: string
  church: string
  itinerary: string
  datetimes: Schedule[]
}

type Day = {
  brotherhoods: BrotherHood[]
}

type DB = {
  "domingo-ramos": Day
  "lunes-santo": Day
  "martes-santo": Day
  "miercoles-santo": Day
  "jueves-santo": Day
  "viernes-santo": Day
  "doming-resurreccion": Day
}

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
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.dayName = Days[this.activatedRoute.snapshot.paramMap.get('id')];
    this.httpClient.get("assets/db.json").subscribe(result => {
      this.dataBase = result as DB
      this.day = this.dataBase[this.activatedRoute.snapshot.paramMap.get('id')]
    })
  }

}
