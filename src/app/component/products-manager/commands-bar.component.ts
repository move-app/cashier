import { Component } from '@angular/core';
import { addAndSaveProduct, deleteAndSaveProduct, getHighestIndex, getProducts } from 'src/app/helpers/products';
import { emptyProduct, product } from 'src/app/interfaces/product';


@Component({
  selector: 'app-commands-bar',
  templateUrl: './commands-bar.component.html',
  styleUrls: ['./commands-bar.component.css']
})
export class CommandsBarComponent {
  products: product[] = [];
  newProduct: product = emptyProduct;

  constructor() {
    this.products = getProducts();
  }

  addProduct(){
    if (this.newProduct.name && this.newProduct.price > 0)
    {
      const idx = getHighestIndex() + 1;
      this.newProduct.id = idx;
      addAndSaveProduct(this.newProduct);
      location.reload();
    }else {
      alert("Insira valores válidos para adicionar um novo produto.")
    }
  }

  deleteProduct(id: number){
    deleteAndSaveProduct(id);
    location.reload();
  }

  formatMoney(price: number){
    return price.toFixed(2);
  }
}
