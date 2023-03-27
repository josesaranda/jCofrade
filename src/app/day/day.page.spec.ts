import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { DayPage } from "./day.page";
import { APP_BASE_HREF } from "@angular/common";
import { DBService } from "../db.service";
import { instance, mock, when } from "ts-mockito";
import { of } from "rxjs";
import { fakeDB } from "../fake/db";

describe("DayPage", () => {
  let component: DayPage;
  let fixture: ComponentFixture<DayPage>;
  const mockedDBService = mock(DBService)

  when(mockedDBService.getDB()).thenReturn(of(fakeDB));

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DayPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])],
      providers: [{ provide: APP_BASE_HREF, useValue: "/my/app" }, { provide: DBService, useValue: instance(mockedDBService) }]
    }).overrideTemplate(DayPage, "");

    fixture = TestBed.createComponent(DayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
