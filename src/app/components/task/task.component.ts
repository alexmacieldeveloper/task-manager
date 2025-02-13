import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  listTasks: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.listTasks = [
      { id: 0, name: 'Lavar o carro', done: false },
      { id: 1, name: 'Ir ao mercado', done: true },
      { id: 2, name: 'Lavar roupa', done: true },
    ]
  }

  addTask(nameTask: string) {
    if (nameTask.trim().length == 0) {
      return;
    }

    const taskFound = this.listTasks.find(item => item.name.toLowerCase() == nameTask.toLowerCase());

    if (!taskFound) {
      this.listTasks.push({ id: this.listTasks.length, name: nameTask, done: false })
    }
  }

  deleteTask(idTask: number) {
    this.listTasks = this.listTasks.filter(item => (item.id != idTask))
  }

  doneTask(idTask: numberd) {
    const taskFound = this.listTasks.find(item => (item.id == idTask))

    if (taskFound) {
      taskFound.done = !taskFound.done
    }
  }

}
