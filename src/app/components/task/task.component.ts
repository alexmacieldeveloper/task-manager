import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  TASK_KEY =  'task_key'
  listTasks: any[] = [];

  constructor() { }

  ngOnInit(): void {
    const tasks = localStorage.getItem(this.TASK_KEY)

    if (tasks) {
      this.listTasks = JSON.parse(tasks)
    }
  }

  addTask(nameTask: string) {
    if (nameTask.trim().length == 0) {
      return;
    }

    const taskFound = this.listTasks.find(item => item.name.toLowerCase() == nameTask.toLowerCase());

    if (!taskFound) {
      this.listTasks.push({ id: this.listTasks.length, name: nameTask, done: false })
    }

    this.saveList()
  }

  deleteTask(idTask: number) {
    this.listTasks = this.listTasks.filter(item => (item.id != idTask))
    this.saveList()
  }

  doneTask(idTask: number) {
    const taskFound = this.listTasks.find(item => (item.id == idTask))

    if (taskFound) {
      taskFound.done = !taskFound.done
    }

    this.saveList()
  }

  private saveList() {
    localStorage.setItem(this.TASK_KEY,JSON.stringify(this.listTasks))
  }

}
