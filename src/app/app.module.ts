import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './app-template/header/header.component';
import { LoginTemplateComponent } from './login-template/login-template.component';
import { AppTemplateComponent } from './app-template/app-template.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
    {path: 'login', component: LoginTemplateComponent},
    {path: '', component: AppTemplateComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginTemplateComponent,
    AppTemplateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
