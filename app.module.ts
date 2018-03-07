import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ModelModule } from "./model/model.module";
import { router } from "./routes";
import { PhoneBookModule } from "./phoneBook/phonebook.module";
import { CreateUserModule } from "./createUser/createuser.module";
import { EditUserModule } from "./editUser/edituser.module";
import { DeleteUserModule } from "./deleteUser/deleteuser.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ModelModule,
    router,
    PhoneBookModule,
    CreateUserModule,
    EditUserModule,
    DeleteUserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
