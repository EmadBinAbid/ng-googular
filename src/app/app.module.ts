import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from  '@angular/common/http';

import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AgentsComponent } from './components/agents/agents.component';
import { AgentsAddComponent } from './components/agents-add/agents-add.component';
import { AgentsListComponent } from './components/agents-list/agents-list.component';
import { AgentsService } from './services/agents.service';
import { AgentDetailsComponent } from './components/agent-details/agent-details.component';
import { TrackAgentsComponent } from './components/track-agents/track-agents.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {
    path: 'agents', 
    component: AgentsComponent,
    children: [
      {path: 'agents-add', component: AgentsAddComponent},
      {
        path: 'agents-list', 
        component: AgentsListComponent,
        children: [
          {path: 'agent-details/:id',
          component: AgentDetailsComponent,
        children: [{path: 'track-agents', component: TrackAgentsComponent}]}
        ]
      }
    ]
  },
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: PageNotFoundComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    AboutComponent,
    ContactComponent,
    AgentsComponent,
    AgentsAddComponent,
    AgentsListComponent,
    AgentDetailsComponent,
    TrackAgentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes/*, { enableTracing: true }*/),
    FormsModule,
    HttpClientModule
  ],
  providers: [AgentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
