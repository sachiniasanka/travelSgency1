import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {MainComponent} from "./main/main.component";

const appRoutes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent
    // children: [
    //   {path: "dashboard", component: DashboardComponent},
    //   {
    //     path: "manage-clients",
    //     component: ManageClientsComponent,
    //     canDeactivate: [ManageClientComponentCandeactivateGuard]
    //   },
    //   {
    //     path: "manage-guides",
    //     component: ManageGuidesComponent,
    //     canDeactivate: [ManageGuideComponentCandeactivateGuard]
    //   },
    //   {
    //     path: "manage-drivers",
    //     component: ManageDriversComponent,
    //     canDeactivate: [ManageDriverComponentCandeactivateGuard]
    //   },
    //   {
    //     path: "manage-orders",
    //     component: ManageOrdersComponent,
    //   },
    //   {
    //     path: "manage-hotels",
    //     component: ManageHotelComponent,
    //     canDeactivate: [ManageHotelComponentCandeactivateGuard]
    //   },
    //   {
    //     path: "manage-locations",
    //     component: ManageLocationsComponent,
    //     canDeactivate: [ManageLocationComponentCandeactivateGuard]
    //   },
    //   {
    //     path: "manage-vehical",
    //     component: ManageVehicalComponent,
    //     canDeactivate: [ManageVehicalComponentCandeactivateGuard]
    //   },
    //   {
    //     path: "",
    //     pathMatch : "full",
    //     redirectTo: "/main/dashboard"
    //   }
    // ]
  },
  {
    path: "main",
    component: MainComponent
    // {path: "login", component: LoginComponent},
    // {path: "", pathMatch: "full", redirectTo: "/main/dashboard"}
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
