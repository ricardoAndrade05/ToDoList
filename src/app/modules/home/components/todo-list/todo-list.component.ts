import { Component, DoCheck, OnInit } from '@angular/core';
//interface
import { TaskList } from './../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})

export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> = [];

  constructor() { }

  ngDoCheck(): void {
    this.taskList.sort(
      (first, last) =>
        Number(first.checked) - Number(last.checked)
    )
    localStorage.setItem("List", JSON.stringify(this.taskList));
  }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1)
  }

  public deleteAll() {
    const confirm = window.confirm("Você deseja realmente apagar tudo?");
    if (confirm) {
      this.taskList = [];
    }
  }

  setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false })
  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm("Tarefa está vazia, deseja apagar?")
      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }

  }
}
