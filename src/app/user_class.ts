// form-data.model.ts
export class user_class {
    clientId: string;
    projectId: string;
    remarks: string;
    timeSpan: string;
    date: string;
    tag: string;
  
    constructor(clientId: string, projectId: string, remarks: string, timeSpan: string, date: string, tag: string) {
      this.clientId = clientId;
      this.projectId = projectId;
      this.remarks = remarks;
      this.timeSpan = timeSpan;
      this.date = date;
      this.tag = tag;
    }
  }
  