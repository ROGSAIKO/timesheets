import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule,RouterLink,RouterLinkActive],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent 
{
      // newTask="";
      formData: any = {}; // Object to store form data

      taskList:any[]=[];
      httpService=inject(HttpService);
      currentTime!: string;
      currentDay!: String;
      // currentMonth!: String;

      constructor(private http: HttpClient) {}

      //Time-date
      private updateDateTime(): void {
        const now = new Date();
        this.currentTime = now.toLocaleTimeString();
        this.currentDay = now.toDateString();
        // this.currentMonth = now.getMonth();
      }

      ngOnInit() {
        this.updateDateTime();
        setInterval(() => {
          this.updateDateTime();
        }, 1000); // Update every second
        this.getAllTasks(); // Fetch tasks from the database when the component initializes
      }

      addTask()
      {
        // console.log("addTask Function called",this.newTask);
        // this.httpService.addTask(this.newTask).subscribe(()=>{
        //   console.log("added");
        //   this.newTask="";
        //   // this.getAllTasks();
        if (!this.isFormDataValid(this.formData)) 
          {
          alert("All fields are required.");
          return;
        }
    this.httpService.addTask(this.formData).subscribe((response) => 
      {
          console.log("Task added successfully:", response);
          // Clear the form after successful submission
          this.formData = {};
          // Refresh the task list
          this.getAllTasks();
        })
      }

    private isFormDataValid(formData: any): boolean {
        for (const key in formData) {
          if (!formData[key]) {
            return false;
          }
        }
        return true;
      }
    getAllTasks()
      {
        this.httpService.getAllTasks().subscribe((result:any)=>{
          console.log(result);
          this.taskList=result;
        })
      }

    deleteTask(task: any): void
    {
        const index = this.taskList.indexOf(task);
        if (index !== -1) 
        {
            this.taskList.splice(index, 1); // Remove task from taskList
            // You may want to update the JSON file here, or update it later when needed
        }
        // Send a DELETE request to your JSON server to delete the task
        this.http.delete(`http://localhost:3000/timesheet_database/${task.id}`).subscribe(
        () => 
        {
          console.log('Task deleted successfully from server');
        },
        (error) => {
          console.error('Failed to delete task from server:', error);
          // You may want to handle error cases here
        }
      );
    }
    
    editTask(task: any) {
      // Populate the edit form fields with the current task data
      this.formData.clientId = task.clientId;
      this.formData.projectId = task.projectId;
      this.formData.remarks = task.remarks;
      this.formData.timeSpan = task.timeSpan;
      this.formData.date = task.date;
      this.formData.tag = task.tag;
  
      // Open the edit dialog (you can implement this using Bootstrap modal or any other UI library)
      // You can also set a flag to show/hide the edit form in the HTML template
      // For simplicity, I'm just logging the task data here
      console.log('Editing task:', task);
    }

}
