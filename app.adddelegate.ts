import { Component,OnInit } from '@angular/core';
import {DelegateService} from './app.delegateservice'
import {Event} from './app.event'
import {Address} from './app.address'
import {Delegate} from './app.delegate'

@Component
({

    selector:'del-app',
    templateUrl:'app.adddelegate.html'

})
export class AddDelegate implements OnInit
{   

        addevent=true;
        event:Event;
        del:Delegate={};
       // model:any={};
       // pro:any={"id":1008,"name":"abc","price":1444.11,"description":"Good","inventory.id":109,"inventory.name":"Good"}
        constructor(private delegateservice:DelegateService){}   
    
    ngOnInit()
    {
       // this.delegateservice.addAllDelegate(this.del).subscribe((data:any)=>console.log(data));
    } 

    addDelegate(){
        //console.log(this.model);
        this.delegateservice.addAllDelegate(this.del).subscribe((data:any)=>console.log(data));
    }

    // addEvents()
    // {
    //     this.event.push(this.event);
    //     console.log(this.event);
    //     this.event={
    //         id:0,
    //         eventname:'',
    //         date:'',
    //         city:''

    //     }
    // }








    

}
