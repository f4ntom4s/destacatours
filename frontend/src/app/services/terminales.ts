import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class TerminalesService{
  public url: string;

  constructor(
    public _http: HttpClient
  ) {
    this.url = "http://localhost:8777/";
  }

  getTerminal(terminal_id){
    return this._http.get(this.url + 'api/terminals/' + terminal_id + "/");
  }

  getTerminales(){
    return this._http.get(this.url + 'api/terminals/');
  }

  addTerminal(terminal) : Observable<any>{
    let params = JSON.stringify(terminal);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + "api/terminals/", params, {headers: headers});
  }

  deleteTerminal(terminal){
    return this._http.delete(this.url + 'api/terminals/' + terminal);
  }

  updateTerminal(id_terminal, terminal){
    let params = JSON.stringify(terminal);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.put(this.url + "api/terminals/" + id_terminal + "/", params, {headers: headers});
  }
}
