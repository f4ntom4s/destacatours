import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ConductoresService{
  public url: string;

  constructor(
    public _http: HttpClient
  ) {
    this.url = "http://localhost:8777/";
  }

  getConductor(conductor_id){
    return this._http.get(this.url + 'api/drivers/' + conductor_id + "/");
  }

  getConductores(){
    return this._http.get(this.url + 'api/drivers/');
  }

  addConductor(conductor) : Observable<any>{
    let params = JSON.stringify(conductor);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + "api/drivers/", params, {headers: headers});
  }

  deleteConductor(conductor){
    return this._http.delete(this.url + 'api/drivers/' + conductor);
  }

  updateConductor(id_conductor, conductor){
    let params = JSON.stringify(conductor);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.put(this.url + "api/drivers/" + id_conductor + "/", params, {headers: headers});
  }
}
