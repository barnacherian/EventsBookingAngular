import { Component,OnInit } from '@angular/core';
import {DelegateService} from './app.delegateservice'
import {Delegate} from './app.delegate'
import {Address} from './app.address'
import {Event} from './app.event'
@Component
({

    selector:'showdel-app',
    templateUrl:'app.showdelegate.html'

})
export class ShowDelegate implements OnInit
{   
   
        del:Delegate[];
       // pro:any={"id":1008,"name":"abc","price":1444.11,"description":"Good","inventory.id":109,"inventory.name":"Good"}
        constructor(private delegateservice:DelegateService){}   

    ngOnInit()
    {
       //this.delservice.getAllDelegate().subscribe((data:Delegate[])=>this.delegates=data);
       this.delegateservice.showDelegate().subscribe((data:any)=>this.del=data);
    } 

    showDelegate(){
        //console.log(this.model);
       // this.delegateservice.showDelegate().subscribe((data:any)=>this.del=data);
    }

}
