import { Component, OnInit, Input } from '@angular/core';
import { DataService } from "../service/data.service";
import { eConsultModel } from "../models/eConsult.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-verifi-box',
  templateUrl: './verifi-box.component.html',
  styleUrls: ['./verifi-box.component.css'],
  providers: []
})
export class VerifiBoxComponent implements OnInit {
  @Input() eConsultId: number;
  @Input() data: Object;

  public imgSrc: string;
  public attachmentId: string;

  constructor(private _dataService: DataService,
              private _eConsultModel: eConsultModel,
              private _router: Router) { }

  ngOnInit() {
    this.imgSrc = this.data['path'];
    this.attachmentId = this.data['id'];
  }

  reviewCompleted() {
    console.log("INSIDE HERE");
    this._dataService.patchReviewCompleted(this.eConsultId, {
      "id": this.attachmentId,
      "reviewed": true
    }).subscribe((res) => {
        //THERE IS NO SERVER BUT WE ARE GOING TO FAKE IT HERE IN THE ERROR METHOD.
    }, (error) => {
      this._eConsultModel.updateEConsultDataReview(this.eConsultId, this.attachmentId, true);
      this._eConsultModel.removeEConsult(this.eConsultId, this.attachmentId)
    })
  }

  redact() {
    this._router.navigate(['/verify/', this.eConsultId, this.attachmentId]);
  }

}
