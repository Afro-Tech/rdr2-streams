import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { StreamsComponent } from './components/streams/streams.component';
import { ServiceService } from './components/service.service';
import { ViewStreamComponent } from './components/view-stream/view-stream.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'streams', component: StreamsComponent },
  { path: 'stream/:id', component: ViewStreamComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StreamsComponent,
    ViewStreamComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
