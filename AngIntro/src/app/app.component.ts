import { Component, ViewChild , AfterViewInit, OnInit} from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{
  title = 'AngIntro';

  bool:boolean = true;
  parentMessage:string = "Message From Parent Class i.e from app.component.ts";
  fromChildOutput!: string;

  imgUrl:string='https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149342941.jpg?w=2000'

  @ViewChild(PostComponent) childComp: any;

  message!: string;

 constructor(){
  console.log(this.childComp);
 }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 ngAfterViewInit(){
  console.log(this.childComp);
  this.message = this.childComp.childMessage
 }

 receivedMessage($event: any){
 console.log($event);

 }

 buttonClick(){
  console.log('Button Clicked event Worked')
 }

 onKeyUp(){
    //console.log($event.keyCode);
    //console.log(this.userName);
    console.log(this.textValue);
  }
 
  userName!:string;

  textValue:string="Value is coming from the component";

}
