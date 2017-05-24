import { Component, OnInit } from '@angular/core';
import {ButtonTypes, ButtonSize, ButtonColors, ButtonConfig} from './components/utils';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  config:any= {
    ButtonType:"",
    ButtonSize:"",
    ButtonColor:"",
    ButtonText:""
  };
groupedList=["Hai","Hello","How r u"];

  ngOnInit() {
    this.config.ButtonType="Grouped";
    this.config.ButtonSize="Medium";
    this.config.ButtonText="Hello";
  }
}
