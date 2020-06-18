import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductListService } from '../product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductListService],
})
export class ProductListComponent implements OnInit {
  //   products = [
  //     {id: 1, name: "Каліфорнія", price:125, description: "Опис"},
  //     {id: 2, name: "Філадельфія", price: 115, description: "Опис"},
  //     {id: 3, name: "Каліфорнія з крабовим м'ясом", price: 100, description: "Опис"}
  // ]

  public products: any[];

  constructor(
    public router: Router,
    public productListService: ProductListService
  ) {}

  ngOnInit() {
    this.getAllProduct();
  }

  getAllProduct() {
    this.productListService.getAllProduct().subscribe((result) => {
      this.products = result['data'];
    });
  }

  Test(product) {
    console.log(product);

    fetch('http://localhost:3000/account/addItemToCart', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ product }),
    })
      .then((res) => res)
      .catch((err) => console.error(err));
  }
}
