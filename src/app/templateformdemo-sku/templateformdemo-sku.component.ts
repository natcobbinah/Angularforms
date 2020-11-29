import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder,FormGroup, Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'app-templateformdemo-sku',
  templateUrl: './templateformdemo-sku.component.html',
  styleUrls: ['./templateformdemo-sku.component.css']
})
export class TemplateformdemoSkuComponent implements OnInit {

  myForm:FormGroup;
  sku:AbstractControl;

  constructor(fb:FormBuilder) { 
    this.myForm = fb.group({
      'sku':['', Validators.compose([Validators.required, this.skuValidator])]
     });

     this.sku = this.myForm.controls['sku'];

     //adding eventEmitter and subscribing to its observer
     this.sku.valueChanges.subscribe(
       (value:string) =>{
         console.log('sku changed to:' , value);
       }
     );

     this.myForm.valueChanges.subscribe(
      (form:any) =>{
        console.log('form changed to:', form);
      }
     );
  }

  ngOnInit(): void {
  }

  onSubmit(value:string):void{
    console.log('you submitted value: ',value);
  }

  skuValidator(control:FormControl):{[s:string]:boolean}
  {
    if(!control.value.match(/^123/)){
      return {invalidSku: true};
    }  
  }
/*   onSubmit(form:any):void{
    console.log('you submitted value:',form);
  } */

}
