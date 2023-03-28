import { Component, Input } from "@angular/core";
import { Places } from "@services/model";
import { toHM } from "@utils/utils";

@Component({
  selector: "app-schedule-card",
  templateUrl: "schedule-card.component.html",
  styleUrls: ["schedule-card.component.scss"],
})
export class ScheduleCardComponent {
  @Input() datetime: number
  @Input() place: Places

  toHM = toHM
}
