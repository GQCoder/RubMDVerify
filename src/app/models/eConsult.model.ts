export class eConsultModel {

  private eConsultData;

  public setEConsultData(data){
    this.eConsultData = data;
  }

  public getEConsultData(){
    return this.eConsultData;
  }

  public removeEConsult(eConsultId, attachmentId) {
    let indexes = this.getIndexes(eConsultId, attachmentId);
    delete this.eConsultData[indexes[0]];
  }

  public updateEConsultDataReview(eConsultId, attachmentId, boolean) {
    let indexes = this.getIndexes(eConsultId, attachmentId);
    this.eConsultData[indexes[0]].attachments[indexes[1]].reviewed = boolean;
    this.removeEConsult(eConsultId, attachmentId);
  }

  public getAttachment(eConsultId, attachmentId) {
    let indexes = this.getIndexes(eConsultId, attachmentId);
    return this.eConsultData[indexes[0]].attachments[indexes[1]];
  }


  private getIndexes(eConsultId, attachmentId) {
    let consultIndex = this.eConsultData.findIndex(x => x.id === eConsultId);
    let attachmentIndex = this.eConsultData[consultIndex].attachments.findIndex(y => y.id === attachmentId);
    return [consultIndex, attachmentIndex];
  }
}
