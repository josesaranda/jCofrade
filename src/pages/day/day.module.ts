import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { DayPageRoutingModule } from "./day-routing.module";

import { DayPage } from "./day.page";
import { HttpClientModule } from "@angular/common/http";
import { DBService } from "@services/db.service";
import { ScheduleCardModule } from "@components/schedule-card/schedule-card.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DayPageRoutingModule,
    HttpClientModule,
    ScheduleCardModule
  ],
  providers: [DBService],
  declarations: [DayPage]
})
export class DayPageModule { }
