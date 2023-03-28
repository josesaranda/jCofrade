import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { NowPageRoutingModule } from "./now-routing.module";

import { NowPage } from "./now.page";
import { HttpClientModule } from "@angular/common/http";
import { DBService } from "@services/db.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NowPageRoutingModule,
    HttpClientModule
  ],
  providers: [DBService],
  declarations: [NowPage]
})
export class NowPageModule { }
