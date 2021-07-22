import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @Output() onAddProduct: EventEmitter<Product> = new EventEmitter;
  showAddForm?: boolean = true;
  name?: string;
  price?: number;
  quantity?: number;
  type?: string;
  shopName?: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.name || !this.price || !this.quantity || !this.type || !this.shopName) {
      alert('Please enter the information!');
      return;
    }

    const addProduct : Product = {
      name: this.name,
      price: this.price,
      quantity: this.quantity,
      type: this.type,
      shopName: this.shopName
    }


    this.onAddProduct.emit(addProduct);

    this.name = '';
    this.price = 0.00;
    this.quantity = 0;
    this.type = '',
    this.shopName = ''
  }

}
