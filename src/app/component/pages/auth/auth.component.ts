import { Component, inject } from '@angular/core';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent 
{
   taskList:any[]=[];
   httpService=inject(HttpService);

   ngOnInit() 
   {
    this.getAllTasks(); // Fetch tasks from the database when the component initializes
   }

   getAllTasks()
   {
     this.httpService.getAllTasks().subscribe((result:any)=>{
       console.log(result);
       this.taskList=result;
     })
   }

   approveTask(task: any) {
    this.httpService.addApprovedTasks(task).subscribe(response => {
      console.log('Task approved successfully:', response);
      // After approval, you might want to update the task list or perform other actions
      this.removeTask(task); // Remove task from main list
    }, error => {
      console.error('Error approving task:', error);
      // Handle error
    });
  }

  declineTask(task: any) {
    this.httpService.addDeclinedTasks(task).subscribe(response => {
      console.log('Task declined successfully:', response);
      // After decline, you might want to update the task list or perform other actions
      this.removeTask(task); // Remove task from main list

    }, error => {
      console.error('Error declining task:', error);
      // Handle error
    });
  }

  removeTask(task: any) {
    // Remove task from task list
    const index = this.taskList.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.taskList.splice(index, 1);
    }
    // Remove task from server
    this.httpService.deleteTask(task.id).subscribe(
      (response: any) => {
        console.log('Task deleted from server successfully:', response);
      },
      (error: any) => {
        console.error('Error deleting task from server:', error);
      }
    );
  }
  




}
