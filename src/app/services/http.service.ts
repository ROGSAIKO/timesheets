import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService 
{
  httpClient = inject(HttpClient);
 
  constructor() { }

//AddTasks
  addTask(task:string)
  {
    return this.httpClient.post("http://localhost:3000/timesheet_database",task)
  }

  addApprovedTasks(task:string)
  {
    return this.httpClient.post("http://localhost:3000/approved_tasks",task)
    
  }

  addDeclinedTasks(task:string)
  {
    return this.httpClient.post("http://localhost:3000/declined_tasks",task)

  }


  //GetTasks
  getAllTasks()
  {
    return this.httpClient.get("http://localhost:3000/timesheet_database");
  }

  getApprovedTasks()
  {
    return this.httpClient.get("http://localhost:3000/approved_tasks");
  }

  getDeclinedTasks()
  {
    return this.httpClient.get("http://localhost:3000/declined_tasks");
  }

  deleteTask(taskId: string) 
  {
    return this.httpClient.delete(`http://localhost:3000/timesheet_database/${taskId}`);
  }
  
}
