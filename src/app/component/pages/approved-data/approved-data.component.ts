import { Component, inject } from '@angular/core';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-approved-data',
  standalone: true,
  imports: [],
  templateUrl: './approved-data.component.html',
  styleUrl: './approved-data.component.scss'
})
export class ApprovedDataComponent 
{
   taskList:any[]=[];
   httpService=inject(HttpService);

   ngOnInit() 
   {
    this.getApprovedTasks();
   }

   getApprovedTasks()
   {
     this.httpService.getApprovedTasks().subscribe((result:any)=>{
       console.log(result);
       this.taskList=result;
     })
    }


}
