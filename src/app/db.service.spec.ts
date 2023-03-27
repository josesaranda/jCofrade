import { HttpClient } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { mock } from "ts-mockito";

import { DBService } from "./db.service";

describe("DbService", () => {
  let service: DBService;
  const mockHttpClient: HttpClient = mock(HttpClient)

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DBService, {
        provide: HttpClient,
        useFactory: () => mockHttpClient
      }]
    });
    service = TestBed.inject(DBService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
