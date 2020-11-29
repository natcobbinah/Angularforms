import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateformdemo-sku',
  templateUrl: './templateformdemo-sku.component.html',
  styleUrls: ['./templateformdemo-sku.component.css']
})
export class TemplateformdemoSkuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:any):void{
    console.log('you submitted value:',form);
  }

}
