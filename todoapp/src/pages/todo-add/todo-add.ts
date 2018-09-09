import { TodoModel, TodoServiceProvider } from './../../providers/todo-service/todo-service';
import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the TodoAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-todo-add',
  templateUrl: 'todo-add.html',
})
export class TodoAddPage {
  object: TodoModel;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public todoService: TodoServiceProvider) 
    {
    this.object = new TodoModel('', '', '');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoAddPage');
  }

  addTodo(){
    if (this.object.name.length != 0 && this.object.note.length != 0){
      this.todoService.addTodo(this.object).subscribe(
        result =>{
          this.navCtrl.pop();
        }
      )
    } else {
      const toast = this.toastCtrl.create({
        message: 'Enter all fields',
        position: "middle",
        duration: 3000
      });
      toast.present();
      
    }
  }
}
