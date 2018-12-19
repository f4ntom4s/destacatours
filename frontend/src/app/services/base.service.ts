import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export abstract class BaseService{
  public url: string;
  public api: string;

  constructor(
    public _http: HttpClient
  ){
    this.url = "http://localhots:8777";
  }

  abstract getApi(): void;

  getUrl(){
    return this.url + this.getApi();
  }

  getById(id){
    return this._http.get(this.getUrl() + id + "/")
  }
}
