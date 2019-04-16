import { Component, OnInit } from '@angular/core';
import { eConsultModel } from "../models/eConsult.model";
import { ActivatedRoute, Router} from "@angular/router";
import { DataService } from "../service/data.service";

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css'],
})
export class VerifyComponent implements OnInit {

  constructor(private _eConsultModel: eConsultModel,
              private _aRoute: ActivatedRoute,
              private _router: Router,
              private _dataService: DataService) { }

  private eConsultId: number;
  private attachmentId: string;
  private data: Object;
  public imgSrc: string;

  ngOnInit() {
    this._aRoute.params.subscribe(params => {
      this.eConsultId = parseInt(params['id']);
      this.attachmentId = params['attachmentId'];
      this.getAttachment(this.eConsultId, this.attachmentId);

    });
  }

  private getAttachment(eId, aId){
    this.data = this._eConsultModel.getAttachment(eId, aId);
    this.imgSrc = this.data['path'];
  }

  public reviewCompleted(){
    this._dataService.patchReviewCompleted(this.eConsultId, {
      "id": this.attachmentId,
      "reviewed": true
    }).subscribe((res) => {
      //THERE IS NO SERVER BUT WE ARE GOING TO FAKE IT HERE IN THE ERROR METHOD.
    }, (error) => {
      this._eConsultModel.updateEConsultDataReview(this.eConsultId, this.attachmentId, true);
    });
    this._router.navigate(['/home']);
  }

  public cancel() {
    this._router.navigate(['/home']);
  }

}
