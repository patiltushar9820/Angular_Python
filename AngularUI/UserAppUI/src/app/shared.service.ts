import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly api_url="http://127.0.0.1:8000";

  constructor(private http:HttpClient) { }

  getUserData():Observable<Array<Object>>{
    return this.http.get<Array<string>[]>(this.api_url + '/user/');
  }

  getParticularUserData(val:number):Observable<Array<Object>>{
    return this.http.get<Array<string>[]>(this.api_url + '/user/'+val);
  }


  addUserData(val:Object){
    return this.http.post(this.api_url + '/user/adduser/',val);
  }

  updateUserData(val:Object){
    return this.http.put(this.api_url + '/user/updateuser/',val);
  }

  deleteUserData(val:string){
    return this.http.delete(this.api_url + '/user/'+val);
  }
}
