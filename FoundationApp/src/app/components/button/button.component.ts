import { Component, OnInit,Input,Output,ViewEncapsulation } from '@angular/core';
import {ButtonTypes,ButtonSize,ButtonColors,ButtonConfig} from '../utils';
@Component({
  selector: 'bi-button',
  templateUrl: './button.component.html',
  styleUrls:['./button.component.css'],
})
export class ButtonComponent implements OnInit {

  constructor() {
//this.config= new ButtonConfig();

  }

  ngOnInit() {
    this.setClass();
  }
  @Input() config={
    ButtonType:"",
    ButtonSize:"",
    ButtonText:"",
    ButtonColor:"",
    ButtonGroupList:[],
    ButtonClass:"",
    ButtonGroupClass:""
  }
  @Input() ButtonGroupList:Array<String>




  setClass(){
    if(this.config.ButtonType=="Rounded"){
      this.config.ButtonClass ="button round";
    }
    if(this.config.ButtonType=="Square"){
      this.config.ButtonClass ="button";
    }
    if(this.config.ButtonType=="Grouped" && this.ButtonGroupList.length>0 ){
      this.config.ButtonGroupClass="button-group";

    }
  }
}
