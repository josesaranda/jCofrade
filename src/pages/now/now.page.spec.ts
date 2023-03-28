/* eslint-disable max-len */
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NowPage } from "./now.page";
import { APP_BASE_HREF } from "@angular/common";
import { DBService } from "@services/db.service";
import { instance, mock, when } from "ts-mockito"
import { of } from "rxjs";
import { fakeDB } from "@services/fake/db";

describe("NowPage", () => {
  let component: NowPage;
  let fixture: ComponentFixture<NowPage>;
  const mockedDBService = mock(DBService);

  when(mockedDBService.getDB()).thenReturn(of(fakeDB));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NowPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])],
      providers: [
        { provide: APP_BASE_HREF, useValue: "/my/app" },
        { provide: DBService, useValue: instance(mockedDBService) }
      ]
    }).overrideTemplate(NowPage, "");

    fixture = TestBed.createComponent(NowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  describe("#getBrotherhoodsNow", () => {
    it("Should return desired value", () => {
      const brotherhoods = (component as any).concatBrotherhoods(fakeDB);
      (component as any).getBrotherhoodsNow(brotherhoods, 1648827095557 - 1000 * 60 * 15);
      expect(component.brotherhoodsNow).toEqual([]);
      (component as any).getBrotherhoodsNow(brotherhoods, 1648827095557 + 1000 * 60 * 15);
      expect(component.brotherhoodsNow).toEqual([]);
      (component as any).getBrotherhoodsNow(brotherhoods, 1648827095557 - 1000 * 60 * 3);
      expect(component.brotherhoodsNow).toEqual([
        {
          name: "REAL COFRADÍA DE NUESTRO PADRE JESÚS A SU ENTRADA A JERUSALÉN Y MARÍA SANTÍSIMA DEL AMPARO Y SAN JUAN EVANGELISTA (Pollinica)",
          schedule: { name: "Salida", datetime: 1648827095557 }
        },
        {
          name: "REAL COFRADÍA DE NUESTRO PADRE JESÚS A SU ENTRADA A JERUSALÉN Y MARÍA SANTÍSIMA DEL AMPARO Y SAN JUAN EVANGELISTA (Pollinica)",
          schedule: { name: "Encierro", datetime: 1648827095557 }
        },
        {
          name: "REAL COFRADÍA DE NUESTRO PADRE JESÚS A SU ENTRADA A JERUSALÉN Y MARÍA SANTÍSIMA DEL AMPARO Y SAN JUAN EVANGELISTA (Pollinica)",
          schedule: { name: "Salida", datetime: 1648827095557 }
        },
        {
          name: "REAL COFRADÍA DE NUESTRO PADRE JESÚS A SU ENTRADA A JERUSALÉN Y MARÍA SANTÍSIMA DEL AMPARO Y SAN JUAN EVANGELISTA (Pollinica)",
          schedule: { name: "Tribuna", datetime: 1648827095557 }
        },
        {
          name: "REAL COFRADÍA DE NUESTRO PADRE JESÚS A SU ENTRADA A JERUSALÉN Y MARÍA SANTÍSIMA DEL AMPARO Y SAN JUAN EVANGELISTA (Pollinica)",
          schedule: { name: "Salida", datetime: 1648827095557 }
        },
        {
          name: "REAL COFRADÍA DE NUESTRO PADRE JESÚS A SU ENTRADA A JERUSALÉN Y MARÍA SANTÍSIMA DEL AMPARO Y SAN JUAN EVANGELISTA (Pollinica)",
          schedule: { name: "Torre sur", datetime: 1648827095557 }
        },
        {
          name: "REAL COFRADÍA DE NUESTRO PADRE JESÚS A SU ENTRADA A JERUSALÉN Y MARÍA SANTÍSIMA DEL AMPARO Y SAN JUAN EVANGELISTA (Pollinica)",
          schedule: { name: "Salida", datetime: 1648827095557 }
        },
        {
          name: "REAL COFRADÍA DE NUESTRO PADRE JESÚS A SU ENTRADA A JERUSALÉN Y MARÍA SANTÍSIMA DEL AMPARO Y SAN JUAN EVANGELISTA (Pollinica)",
          schedule: { name: "Torre sur", datetime: 1648827095557 }
        },
        {
          name: "REAL COFRADÍA DE NUESTRO PADRE JESÚS A SU ENTRADA A JERUSALÉN Y MARÍA SANTÍSIMA DEL AMPARO Y SAN JUAN EVANGELISTA (Pollinica)",
          schedule: { name: "Salida", datetime: 1648827095557 }
        },
        {
          name: "REAL COFRADÍA DE NUESTRO PADRE JESÚS A SU ENTRADA A JERUSALÉN Y MARÍA SANTÍSIMA DEL AMPARO Y SAN JUAN EVANGELISTA (Pollinica)",
          schedule: { name: "Tribuna", datetime: 1648827095557 }
        },
        {
          name: "REAL COFRADÍA DE NUESTRO PADRE JESÚS A SU ENTRADA A JERUSALÉN Y MARÍA SANTÍSIMA DEL AMPARO Y SAN JUAN EVANGELISTA (Pollinica)",
          schedule: { name: "Catedral", datetime: 1648827095557 }
        },
        {
          name: "REAL COFRADÍA DE NUESTRO PADRE JESÚS A SU ENTRADA A JERUSALÉN Y MARÍA SANTÍSIMA DEL AMPARO Y SAN JUAN EVANGELISTA (Pollinica)",
          schedule: { name: "Encierro", datetime: 1648827095557 }
        }
      ]);
    });
  });
});
