import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _httpClient: HttpClient ) { }

  getData(){
    return this._httpClient.get('http://localhost:4200/assets/data/eConsult/data.json');
  }

  patchReviewCompleted(eConsultId, data){
    return this._httpClient.patch('http://localhost:3000/eConsults/'+ eConsultId, data);
  }
}
