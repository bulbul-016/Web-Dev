import { Component } from '@angular/core';

interface User{
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  message = 'Angular';
  message1: string;
  numbers: number[];
  isOk: boolean;
  message2: string;
  users: User[];
  items: string[];
  display: string;

  constructor() {
    console.log('constructor of AppComponent started');
    this.message1= 'It is message number two';
    this.numbers = [1, 2, 3, 12, 16, 11];
    this.isOk = true;
    this.message2 = "Yes it is true";
    this.users = [
      {
        name: 'User1',
        age: 20
      },
      {
        name: 'User2',
        age: 18
      }
    ];
    this.items = [];
    this.display='';
  }

  toggleMessage(){
    console.log('button is clicked');

    // if(this.isOk)
    //   this.isOk = false;
    // else this.isOk = true;

    this.isOk = !this.isOk;
  }
  addItem(){
    // console.log(this.display);
    if(this.display!==''){
      this.items.push(this.display);
      this.display= '';
    } else{
      alert('Enter the task description');
    }
  }

  removeItem(index: number){
    this.items.splice(index, 1);

  }
}
