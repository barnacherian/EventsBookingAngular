import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {AddDelegate} from './app.adddelegate'
import {HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import {Routes,RouterModule,Router} from '@angular/router';
import {ShowEvents} from './app.showevents';
import {SearchEvent} from './app.searchevents';
import {ShowDelegate} from './app.showdelegate';

const route:Routes=[
{path:"add",component:AddDelegate},
{path:"show",component:ShowDelegate},
{path:"eventsearch",component:SearchEvent},
{path:"showevents",component:ShowEvents}
];


@NgModule({
    imports: [
        BrowserModule,HttpClientModule,FormsModule,RouterModule.forRoot(route)

    ],
    declarations: [
        AppComponent,AddDelegate,ShowEvents,SearchEvent,ShowDelegate
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }