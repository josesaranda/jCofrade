export enum Days {
  "domingo-ramos" = "Domingo de Ramos",
  "lunes-santo" = "Lunes Santo",
  "martes-santo" = "Martes Santo",
  "miercoles-santo" = "Miercoles Santo",
  "jueves-santo" = "Jueves Santo",
  "viernes-santo" = "Viernes Santo",
  "domingo-resurreccion" = "Domingo Resurrección",
}

export enum Places {
  "beggining" = "Salida",
  "tribune" = "Tribuna",
  "tower" = "Torre sur",
  "cathedral" = "Catedral",
  "finish" = "Encierro"
}

export type Schedule = {
  beggining: number
  tribune: number
  tower: number
  cathedral?: number
  finish: number
}

export type BrotherHood = {
  name: string
  church: string
  itinerary: string
  datetimes: Schedule
}

export type Day = {
  brotherhoods: BrotherHood[]
}

export type DB = {
  "domingo-ramos": Day
  "lunes-santo": Day
  "martes-santo": Day
  "miercoles-santo": Day
  "jueves-santo": Day
  "viernes-santo": Day
  "domingo-resurreccion": Day
}