import { Component,OnInit } from '@angular/core';
import {DelegateService} from './app.delegateservice'
import {Delegate} from './app.delegate'
import {Address} from './app.address'
import {Event} from './app.event'
@Component
({

    selector:'search-app',
    templateUrl:'app.searchevents.html'

})
export class SearchEvent implements OnInit
{   

        events:Event[];
        eventsearch:any={};
       // pro:any={"id":1008,"name":"abc","price":1444.11,"description":"Good","inventory.id":109,"inventory.name":"Good"}
        constructor(private delegateservice:DelegateService){}   

    ngOnInit()
    {
       //this.delservice.getAllDelegate().subscribe((data:Delegate[])=>this.delegates=data);
    } 

    searchEvent(){
        //console.log(this.model);
        this.delegateservice.searchEvent(this.eventsearch).subscribe((data:any)=>this.events=data);
    }

}
