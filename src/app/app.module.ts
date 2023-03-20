import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { UserNameComponent } from './user-name/user-name.component';
import { DirectiveLearningComponent } from './directive-learning/directive-learning.component';

@NgModule({
  declarations: [  //component'lar kaydedilir
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    UserNameComponent,
    DirectiveLearningComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] //Hey hangi component var? Tüm uygulamayı ayağa kaldırır
})
export class AppModule { }
