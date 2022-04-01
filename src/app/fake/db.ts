import { DB } from "../model";

export const fakeDB: DB = {
  "domingo-ramos": {
    brotherhoods: [{
      name: "test beggining domingo", church: "testchurch", itinerary: "testitinerary", datetimes: {
        beggining: 1648827095557,
        tribune: 1,
        tower: 1,
        finish: 1,
      }
    }]
  },
  "lunes-santo": {
    brotherhoods: [{
      name: "test finish", church: "testchurch", itinerary: "testitinerary", datetimes: {
        beggining: 1,
        tribune: 1,
        tower: 1,
        finish: 1648827095557,
      }
    }]
  },
  "martes-santo": {
    brotherhoods: [{
      name: "test beggining and tribune", church: "testchurch", itinerary: "testitinerary", datetimes: {
        beggining: 1648827095557,
        tribune: 1648827095557,
        tower: 1,
        finish: 1,
      }
    }]
  },
  "miercoles-santo": {
    brotherhoods: [{
      name: "test beggining and tower", church: "testchurch", itinerary: "testitinerary", datetimes: {
        beggining: 1648827095557,
        tribune: 1,
        tower: 1648827095557,
        finish: 1,
      }
    }]
  },
  "jueves-santo": {
    brotherhoods: [{
      name: "test beggining and tower 2", church: "testchurch", itinerary: "testitinerary", datetimes: {
        beggining: 1648827095557,
        tribune: 1,
        tower: 1648827095557,
        finish: 1,
      }
    }]
  },
  "viernes-santo": {
    brotherhoods: [{
      name: "test beggining", church: "testchurch", itinerary: "testitinerary", datetimes: {
        beggining: 1648827095557,
        tribune: 1,
        tower: 1,
        finish: 1,
      }
    }]
  },
  "domingo-resurreccion": {
    brotherhoods: [{
      name: "test cathedral and finish", church: "testchurch", itinerary: "testitinerary", datetimes: {
        beggining: 1,
        tribune: 1,
        tower: 1,
        cathedral: 1648827095557,
        finish: 1648827095557,
      }
    }]
  }
}