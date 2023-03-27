import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  appPages = [
    { title: "Domingo de Ramos", url: "/day/domingo-ramos" },
    { title: "Lunes Santo", url: "/day/lunes-santo" },
    { title: "Martes Santo", url: "/day/martes-santo" },
    { title: "Miercoles Santo", url: "/day/miercoles-santo" },
    { title: "Jueves Santo", url: "/day/jueves-santo" },
    { title: "Viernes Santo", url: "/day/viernes-santo" },
    { title: "Domingo Resurrección", url: "/day/domingo-resurreccion" },
    { title: "En directo", url: "/now", icon: "logo-rss" }
  ];
}
