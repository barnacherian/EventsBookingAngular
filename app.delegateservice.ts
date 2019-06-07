import {Injectable} from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import {ErrorHandler} from '@angular/core';
import {catchError,retry} from 'rxjs/operators';
import {throwError, Observable} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';


@Injectable({
providedIn:'root'
})
export class DelegateService
{
    constructor(private http:HttpClient) {}   
   
    addAllDelegate(del:any)
    {
        
        let input =new FormData();
        input.append("id",del.id);
        input.append("name",del.name);
        input.append("address.id",del.addressid);
        input.append("address.building",del.addressbuilding);
        input.append("address.street",del.addressstreet);
        input.append("address.city",del.addresscity);
        input.append("eid",del.eventid);
        input.append("ename",del.eventname);
        input.append("date",del.eventdate);
        input.append("city",del.eventcity);    
        console.log(del);
        return this.http.post("http://localhost:9093/delegate/add",input)
    }
    showDelegate(){
        return this.http.get("http://localhost:9093/delegate/show").pipe(retry(1),catchError(this.handleError));
    }

    showEvents(){
        return this.http.get("http://localhost:9093/delegate/showevents");
    }

    searchEvent(eventname:string){

        let params=new HttpParams().set("eventname",eventname);
        return this.http.get("http://localhost:9093/delegate/search",{params:params}).pipe(retry(1),catchError(this.handleError));

    }

    handleError(error)
    {
        window.alert(error.error);
        return throwError(error.error);
    }





}