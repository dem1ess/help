import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   products = [
    {id:"1", name: "Каліфорнія", price:125, description: "Опис"},
    {id: 2, name: "Філадельфія", price: 115, description: "Опис"},
    {id: 3, name: "Каліфорнія з крабовим м'ясом", price: 100, description: "Опис"}
]
id: Number

  constructor(
    public router: Router,

  ) {  }



  ngOnInit(): void {
  }

  Test(id) {
    const product = {
      id: this.id
    };
  }


}
