import { Component,OnInit } from '@angular/core';
import {DelegateService} from './app.delegateservice'
import {Delegate} from './app.delegate'
import {Address} from './app.address'
import {Event} from './app.event'
@Component
({

    selector:'showevents-app',
    templateUrl:'app.showevents.html'

})
export class ShowEvents implements OnInit
{   

      events:Event[];
        //del:any={};
       // pro:any={"id":1008,"name":"abc","price":1444.11,"description":"Good","inventory.id":109,"inventory.name":"Good"}
        constructor(private delegateservice:DelegateService){}   

    ngOnInit()
    {
       //this.delservice.getAllDelegate().subscribe((data:Delegate[])=>this.delegates=data);
       this.delegateservice.showEvents().subscribe((data:any)=>this.events=data);
    } 

    showEvents(){
        //console.log(this.model);
       // this.delegateservice.showEvents().subscribe((data:any)=>this.events=data);
    }

}
