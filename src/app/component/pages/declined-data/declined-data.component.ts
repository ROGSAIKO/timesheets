import { Component, inject } from '@angular/core';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-declined-data',
  standalone: true,
  imports: [],
  templateUrl: './declined-data.component.html',
  styleUrl: './declined-data.component.scss'
})
export class DeclinedDataComponent {

  taskList:any[]=[];
   httpService=inject(HttpService);

   ngOnInit() 
   {
    this.getDeclinedTasks();
   }

   getDeclinedTasks()
   {
     this.httpService.getDeclinedTasks().subscribe((result:any)=>{
       console.log(result);
       this.taskList=result;
     })
    }

}
