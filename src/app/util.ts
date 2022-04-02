export function toHM(datetime: number) {
  const date = new Date(datetime)
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
  return `${hours}:${minutes}`
}