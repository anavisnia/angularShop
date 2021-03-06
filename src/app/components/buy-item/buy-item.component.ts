import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/Product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-buy-item',
  templateUrl: './buy-item.component.html',
  styleUrls: ['./buy-item.component.css']
})
export class BuyItemComponent implements OnInit {
  @Output() onBuyProduct: EventEmitter<Product> = new EventEmitter;
  @Input() product!: Product;
  name?: string;
  price?: number;
  quantity?: number;
  subscription?: Subscription;

  constructor() { 
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.quantity) {
      alert('Please enter the quantity!');
      return;
    }

    const buyProduct : Product = {
      name: this.product.name,
      price: this.product.price,
      quantity: this.quantity,
      type: this.product.type,
    }


    this.onBuyProduct.emit(buyProduct);

    this.quantity = 0;
  }

}
