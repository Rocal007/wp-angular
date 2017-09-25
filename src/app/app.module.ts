import { BuchungsplattformService } from './buchungsplattform/buchungsplattform.service';
import { FilterPipe } from './filter.pipe';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { WpPagesService } from './services/wp-pages/wp-pages.service';
import { WpPostsService } from './services/wp-posts/wp-posts.service';
import { WpProdukteService } from './services/wp-produkte/wp-produkte.service';
import { WpNewsService } from './services/wp-news/wp-news.service';
import { MdCheckboxModule, MdRadioModule, MdIconModule, MdChipsModule, MdProgressSpinnerModule, MdTabsModule, MdToolbarModule, MdButtonModule, MdCardModule } from '@angular/material';

import { NgProgressModule, NgProgressBrowserXhr } from 'ngx-progressbar';
import { BrowserXhr } from '@angular/http';


import { AppComponent } from './app.component';


import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { PostsComponent } from './posts/posts.component';
import { PagesComponent } from './pages/pages.component';
import { ProdukteComponent } from './produkte/produkte.component';
import { NewsComponent } from './news/news.component';
import { BuchungsplattformComponent } from './buchungsplattform/buchungsplattform.component';
import { WebshopComponent } from './webshop/webshop.component';
import { AdminToolComponent } from './admin-tool/admin-tool.component';
import { WebsitesComponent } from './websites/websites.component';
import { SeoComponent } from './seo/seo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PagesComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    ProdukteComponent,
    NewsComponent,
    FilterPipe,
    BuchungsplattformComponent,
    WebshopComponent,
    AdminToolComponent,
    WebsitesComponent,
    SeoComponent,

    
  ],

  imports: [
   
    BrowserModule, 
    BrowserAnimationsModule, 
    HttpModule,
    FormsModule,
    NgProgressModule,
    MdCheckboxModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdIconModule,
    MdChipsModule,
    MdTabsModule,
    MdToolbarModule,
    MdButtonModule,
    MdCardModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'posts', component: PostsComponent},
      {path: 'pages', component: PagesComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'produkte', component: ProdukteComponent},
      {path: 'news', component: NewsComponent},
      {path: 'buchungsplattform', component: BuchungsplattformComponent}

    ])
  ],
  providers: [
    {provide: BrowserXhr, useClass: NgProgressBrowserXhr},
    WpPagesService,
    WpPostsService,
    WpProdukteService,
    WpNewsService,
    BuchungsplattformService
  ],
  
  bootstrap: [AppComponent]
})

export class AppModule { }
