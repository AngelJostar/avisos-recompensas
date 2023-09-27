import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './app-template/header/header.component';
import { LoginTemplateComponent } from './login-template/login-template.component';
import { AppTemplateComponent } from './app-template/app-template.component';
import { RouterModule, Routes } from '@angular/router';
import { ReferenciasComponent } from './app-template/pages/referencias/referencias.component';
import { AvisosComponent } from './app-template/pages/avisos/avisos.component';
import { ListaAvisosComponent } from './app-template/pages/lista-avisos/lista-avisos.component';
import { ListaReferenciasComponent } from './app-template/pages/lista-referencias/lista-referencias.component';

const routes:Routes = [
    {path: 'login', component: LoginTemplateComponent},
    {path: '', component: AppTemplateComponent},
    {path: 'referencias', component: ReferenciasComponent},
    {path: 'avisos', component: AvisosComponent},
    {path: 'lista-avisos', component:ListaAvisosComponent},
    {path: 'lista-referencias', component:ListaReferenciasComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginTemplateComponent,
    AppTemplateComponent,
    ReferenciasComponent,
    AvisosComponent,
    ListaAvisosComponent,
    ListaReferenciasComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
