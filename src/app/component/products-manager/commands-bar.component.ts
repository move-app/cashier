import { Component } from '@angular/core';
import { addAndSaveProduct, deleteAndSaveProduct, getHighestIndex, getProducts, saveProducts } from 'src/app/helpers/products';
import { emptyProduct, product } from 'src/app/interfaces/product';


@Component({
  selector: 'app-commands-bar',
  templateUrl: './commands-bar.component.html',
  styleUrls: ['./commands-bar.component.css']
})
export class CommandsBarComponent {
  products: product[] = [];

  constructor() {
    this.products = getProducts();
  }

  addNewProduct(){
    const newProduct = {...emptyProduct};
    newProduct.id = getHighestIndex() + 1;
    this.products.push(newProduct);
  }

  saveProduct(prod: product){
    if (!prod.name || !prod.price)
      return;

    prod.id = getHighestIndex() + 1;
    const values = getProducts();
    if (!values.find(x => x.name === prod.name))
      addAndSaveProduct(prod);
  }

  deleteProduct(id: number){
    deleteAndSaveProduct(id);
    location.reload();
  }

  formatMoney(price: number){
    return price.toFixed(2);
  }
}
