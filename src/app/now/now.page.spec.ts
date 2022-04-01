import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NowPage } from './now.page';
import { APP_BASE_HREF } from '@angular/common';
import { DBService } from '../db.service';
import { instance, mock, when } from "ts-mockito"
import { of } from 'rxjs';
import { fakeDB } from '../fake/db';

describe('NowPage', () => {
  let component: NowPage;
  let fixture: ComponentFixture<NowPage>;
  const mockedDBService = mock(DBService)

  when(mockedDBService.getDB()).thenReturn(of(fakeDB))

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NowPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/my/app' },
        { provide: DBService, useValue: instance(mockedDBService) }
      ]
    }).overrideTemplate(NowPage, "");

    fixture = TestBed.createComponent(NowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("#getBrotherhoodsNow", () => {
    it("Should return desired value", () => {
      const brotherhoods = (component as any).concatBrotherhoods(fakeDB);
      (component as any).getBrotherhoodsNow(brotherhoods, 1648827095557 - 1000 * 60 * 10)
      expect(component.brotherhoodsNow).toEqual([]);
      (component as any).getBrotherhoodsNow(brotherhoods, 1648827095557 + 1000 * 60 * 10)
      expect(component.brotherhoodsNow).toEqual([]);
      (component as any).getBrotherhoodsNow(brotherhoods, 1648827095557 - 1000 * 60 * 3)
      expect(component.brotherhoodsNow).toEqual([
        {
          name: 'test beggining domingo',
          schedule: { name: 'Salida', datetime: 1648827095557 }
        },
        {
          name: 'test finish',
          schedule: { name: 'Encierro', datetime: 1648827095557 }
        },
        {
          name: 'test beggining and tribune',
          schedule: { name: 'Salida', datetime: 1648827095557 }
        },
        {
          name: 'test beggining and tribune',
          schedule: { name: 'Tribuna', datetime: 1648827095557 }
        },
        {
          name: 'test beggining and tower',
          schedule: { name: 'Salida', datetime: 1648827095557 }
        },
        {
          name: 'test beggining and tower',
          schedule: { name: 'Torre sur', datetime: 1648827095557 }
        },
        {
          name: 'test beggining and tower 2',
          schedule: { name: 'Salida', datetime: 1648827095557 }
        },
        {
          name: 'test beggining and tower 2',
          schedule: { name: 'Torre sur', datetime: 1648827095557 }
        },
        {
          name: 'test beggining',
          schedule: { name: 'Salida', datetime: 1648827095557 }
        },
        {
          name: 'test cathedral and finish',
          schedule: { name: 'Catedral', datetime: 1648827095557 }
        },
        {
          name: 'test cathedral and finish',
          schedule: { name: 'Encierro', datetime: 1648827095557 }
        }
      ])
    })
  })
});
