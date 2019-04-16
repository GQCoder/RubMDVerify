import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {DataService} from "../service/data.service";
import {Logger} from "angular2-logger/core";
import { eConsultModel }  from '../models/eConsult.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  eConsultData;
  title = 'RubMDVerify';

  constructor(private _dataService: DataService,
              private _eConsultModel: eConsultModel) {
  }


  ngOnInit() {
    if(!this._eConsultModel.getEConsultData()) {
      this._dataService.getData().subscribe((res) => {
        this._eConsultModel.setEConsultData(res['eConsults']);
        this.eConsultData = this._eConsultModel.getEConsultData();
      }, (error) => {
        console.log('Unable to get EConsultData: ' + error.message)
      })
    } else {
      this.eConsultData = this._eConsultModel.getEConsultData();
    }
  }

}
