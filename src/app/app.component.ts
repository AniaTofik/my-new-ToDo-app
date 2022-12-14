import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  editMode= false;
  taskName = 'Sugerowane zadanie codzienne: odkurzanie';
  taskDate= '';
  config: { [key: string] : string } | null = null;
  tasks: Task[] = [{
    name: 'Siłownia',
    deadLine: '2022-12-12',
    done: false
  },
{
  name: 'Nauka Angulara',
  deadLine: '2022-12-26',
  done: true
},
{
  name: 'Sprzątanie domu',
  deadLine: '2023-0112',
  done: false
}];

  constructor(){
    this.config = {
      title: 'Lista zadań',
      footer: `© Anna's Kiedel ToDoApp.`,
      date: new Date().toDateString()
    };
    this.sortTasks();
  }
  clearTasks() {
    this.tasks = [];
  }

  createTask(){
    const task: Task = {
      name: this.taskName,
      deadLine: this.taskDate,
      done: false,
    };
    this.tasks.push(task);
    this.taskName='';
    this.taskDate='';
    this.sortTasks();
  }

  switchEditMode(){
    this.editMode = !this.editMode;
  }
  markTaskAsDone(task: Task){
    task.done = true;
    this.sortTasks();
  }

  deleteTask(task: Task){
    this.tasks = this.tasks.filter(e => e !== task);
    this.sortTasks();
  }
  private sortTasks(){
    this.tasks = this.tasks.sort((a: Task, b: Task) =>
    a.done === b.done ? 0 : a.done ? 1: -1);
  }
}
