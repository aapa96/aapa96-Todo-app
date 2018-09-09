import { TodoServiceProvider } from './../../providers/todo-service/todo-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TodoAddPage } from './../todo-add/todo-add';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  todo: any[] = [];
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
  tapEventSelect(e,item){
    const alert = this.alertCtrl.create({
      title: item.name,
      subTitle: item.note,
      buttons: ['OK']
    });
    alert.present();
  }
  tapEventDelete(e,id) {
    const confirm = this.alertCtrl.create({
      title: 'One Moment',
      message: 'Are you sure to delete the selected one?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            this.deleteTodo(id);
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
