import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "day/domingo-ramos",
    pathMatch: "full"
  },
  {
    path: "about",
    loadChildren: () => import("@pages/about/about.module").then(m => m.AboutPageModule)
  },
  {
    path: "now",
    loadChildren: () => import("@pages/now/now.module").then(m => m.NowPageModule)
  },
  {
    path: "day/:id",
    loadChildren: () => import("@pages/day/day.module").then(m => m.DayPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
