import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserRoutingModule } from "./user-routing.module";
import { UserComponent } from "./user/user.component";
import { HomeComponent } from "./home/home.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { SidebarModule } from "primeng/sidebar";
import { ButtonModule } from "primeng/button";
import { AutoCompleteModule } from "primeng/autocomplete";
import { FormsModule } from "@angular/forms";
import { RatingModule } from "ngx-rating";
import { CheckboxModule } from "primeng/checkbox";
import { Ng2SearchPipeModule} from 'ng2-search-filter';

@NgModule({
  declarations: [
    UserComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    MDBBootstrapModule.forRoot(),
    SidebarModule,
    ButtonModule,
    RatingModule,
    AutoCompleteModule,
    CheckboxModule,
    Ng2SearchPipeModule
  ],
  providers: [HomeComponent]
})
export class UserModule {}
