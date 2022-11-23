import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-imput-add-itens',
  templateUrl: './todo-imput-add-itens.component.html',
  styleUrls: ['./todo-imput-add-itens.component.scss']
})
export class TodoImputAddItensComponent implements OnInit {

  public addItemTaskList: string = "";

  @Output() public emmitItemTaskList = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  public submitItemTaskList() {
    this.addItemTaskList = this.addItemTaskList.trim();
    if (this.addItemTaskList) {
      this.emmitItemTaskList.emit(this.addItemTaskList);
      this.addItemTaskList = "";
    }
  }

}
