import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';



@Injectable()
export class TodoServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello TodoServiceProvider Provider');
  }

  getTodo() {
    return this.http.get("https://aapa96todo.herokuapp.com/api/todo");
  }

  addTodo(Todo:TodoModel) {
    const httpOptions =  {
      headers:  new HttpHeaders( {
          'Content-Type': 'application/json'
      })
    };
    return this.http.post('https://aapa96todo.herokuapp.com/api/todo', Todo,  httpOptions);
  }

  deleteTodo(id:String) {
    return this.http.delete("https://aapa96todo.herokuapp.com/api/todo/" + id);
  }
  
}


export class TodoModel {
  public _id:String;
  public name:String;
  public note:String;
  constructor(
    id:String,name:String,note:String
  ){
    this._id = id;
    this.name = name;
    this.note = note;
  }
}

