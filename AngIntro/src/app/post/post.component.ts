import { Component, OnInit,Input ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {

title:string ="List of Posts";

messagePost:string="Message Post";
 
messagePostList:string = "Message from post-list parent class";

childMessage:string='From child Component';

outputChildMessage:string = 'Messagefrom Child Component Via Output'

  @Input() fromParent!: string;

  @Output() messageEvent = new EventEmitter<string>();
  constructor(){}

  ngOnInit():void{
    
  }

  sendMessage(){
    this.messageEvent.emit(this.outputChildMessage)
    console.log('Clicked');
  }

}
