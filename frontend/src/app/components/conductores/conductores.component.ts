import { Component, OnInit } from '@angular/core';
import { ConductoresService } from "../../services/conductores";


@Component({
  selector: 'conductores',
  templateUrl: './conductores.component.html',
  styleUrls: ['./conductores.component.css'],
  providers: [ ConductoresService ]
})
export class ConductoresComponent implements OnInit {
  public array_conductores: any;
  public status: string;
  public new_driver: any;
  public editing_driver_id: any;
  public editing: boolean;

  constructor(
    private _conductoresService: ConductoresService
  ) {
    this.new_driver = {
      "first_name": '',
      "last_name": ''
    }
    this.editing = false;
  }

  ngOnInit() {
    status = "Loading..."
    this.loadConductores();
  }

  loadConductores() {
    this._conductoresService.getConductores().subscribe(
      result => {
        this.array_conductores = result;
      },
      error => {
        status = "Error";
      }
    );
  }

  deleteDriver(id){
    this._conductoresService.deleteConductor(id).subscribe(
      result => {
        this.loadConductores();
      },
      error => {
        console.log("error while deleting " + id);
      }
    );
    console.log("Deleting " + id);
  }

  addDriver(newDriver) {

    if(!this.editing_driver_id)
    {
      this._conductoresService.addConductor(this.new_driver).subscribe(
      result => {
        //this.usuario_guardado = response;
        newDriver.reset();
        this.loadConductores();
        this.editing = false;
        },
      error => {
        status = "Error";
        }
      );
    } else {
      this._conductoresService.updateConductor(this.editing_driver_id, this.new_driver).subscribe(
      result => {
        //this.usuario_guardado = response;
        this.editing_driver_id = null;
        newDriver.reset();
        this.loadConductores();
        },
      error => {
        status = "Error";
        }
      );
    }

  }

  editDriver(driver_id) {
    this._conductoresService.getConductor(driver_id).subscribe(
      result => {
        this.new_driver.first_name = result['first_name'];
        this.new_driver.last_name = result['last_name'];
        this.editing_driver_id = driver_id;
        this.editing = true;
      },
      error => {
        status = "Error";
      }
    );



  }
}
