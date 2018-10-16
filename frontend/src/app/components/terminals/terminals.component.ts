import { Component, OnInit } from '@angular/core';
import {TerminalesService} from "../../services/terminales";

@Component({
  selector: 'app-terminals',
  templateUrl: './terminals.component.html',
  styleUrls: ['./terminals.component.css'],
  providers: [ TerminalesService ]
})
export class TerminalsComponent implements OnInit {
  public array_terminales: any;
  public new_terminal: any;
  public editing_terminal_id: any;
  public editing: boolean;
  constructor(
    private _terminalsService: TerminalesService
  ) {
    this.new_terminal = {
      "name": '',
      "city": ''
    }
    this.editing = false;
  }

  ngOnInit() {
    this.loadTerminales();
  }

  loadTerminales() {
    this._terminalsService.getTerminales().subscribe(
      result => {
        this.array_terminales = result;
      },
      error => {
        status = "Error";
      }
    );
  }

  deleteTerminal(id){
    this._terminalsService.deleteTerminal(id).subscribe(
      result => {
        this.loadTerminales();
      },
      error => {
        console.log("error while deleting " + id);
      }
    );
    console.log("Deleting " + id);
  }

  addTerminal(newDriver) {
    if(!this.editing_terminal_id)
    {
      this._terminalsService.addTerminal(this.new_terminal).subscribe(
      result => {
        //this.usuario_guardado = response;
        newDriver.reset();
        this.loadTerminales();
        },
      error => {
        status = "Error";
        }
      );
    } else {
      this._terminalsService.updateTerminal(this.editing_terminal_id, this.new_terminal).subscribe(
      result => {
        //this.usuario_guardado = response;
        this.editing_terminal_id= null;
        newDriver.reset();
        this.loadTerminales();
        this.editing = false;
        },
      error => {
        status = "Error";
        }
      );
    }

  }

  editTerminal(terminal_id) {
    this._terminalsService.getTerminal(terminal_id).subscribe(
      result => {
        this.new_terminal.name= result['name'];
        this.new_terminal.city = result['city'];
        this.editing_terminal_id = terminal_id;
        this.editing = true;
      },
      error => {
        status = "Error";
      }
    );
  }

}
