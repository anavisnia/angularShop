import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/Product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {
  @Input() product!: Product;
  @Output() onUpdateProduct: EventEmitter<Product> = new EventEmitter;
  name?: string;
  price?: number;
  quantity?: number;
  showUpdateForm?: boolean = true;
  type?: string;
  shopName?: string;
  subscription?: Subscription;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.name || !this.price || !this.quantity || !this.type || !this.shopName) {
      alert('Please enter the information!');
      return;
    }

    const updateProduct : Product = {
      name: this.name,
      price: this.price,
      quantity: this.quantity,
      type: this.type,
      shopName: this.shopName
    }
    console.log(this.product);

    this.onUpdateProduct.emit(updateProduct);

    this.name = '';
    this.price = 0.00;
    this.quantity = 0;
    this.type = '',
    this.shopName = ''
  }

}
