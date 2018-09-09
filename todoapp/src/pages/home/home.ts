import { TodoServiceProvider, TodoModel } from './../../providers/todo-service/todo-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodoAddPage } from './../todo-add/todo-add';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  todo: TodoModel[] = [];
  addPage :any;

  constructor(
    public navCtrl: NavController,
    public todoService: TodoServiceProvider,
    public alertCtrl: AlertController
  ) {
    this.addPage = TodoAddPage;
  }

  ionViewDidLoad(){
    this.getTodo();
  }

  ionViewDidEnter() {
    this.getTodo();
  }
  tapEventSelect(item){
    const alert = this.alertCtrl.create({
      title: item.name,
      subTitle: item.note,
      buttons: ['OK']
    });
    alert.present();
  }
  tapEventDelete(item:TodoModel) {
    
    const confirm = this.alertCtrl.create({
      title: 'One Moment',
      message: 'Are you sure to delete the selected one?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log(item);
          }
        },
        {
          text: 'Ok',
          handler: () => {
            
            this.deleteTodo(item._id);

          }
        }
      ]
    });
    confirm.present();
    
    
  }

  getTodo(){
    this.todoService.getTodo()
    .subscribe(
      (data) => { // Success
        this.todo = data['todo'];
        console.log(this.todo);
      },
      (error) =>{
        console.error(error);
      }
    )
  }
  deleteTodo(id){
    this.todoService.deleteTodo(id)
    .subscribe(
      (data) => { // Success
            this.getTodo();
      },
      (error) =>{
        console.error(error);
      }
    )
  }

   

}
