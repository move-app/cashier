import { Component } from '@angular/core';
import { getProducts } from 'src/app/helpers/products';
import { addAndSaveSales } from 'src/app/helpers/sale';
import { product } from 'src/app/interfaces/product';
import { emptySale, sales } from 'src/app/interfaces/sales';

@Component({
  selector: 'app-sales-manager',
  templateUrl: './sales-manager.component.html',
  styleUrls: ['./sales-manager.component.css']
})
export class SalesManagerComponent {
  products: product[] = [];
  cashierProducts: sales[] = [];
  totalCashier = "0.00";
  
  constructor(){
    this.products = getProducts();
  }

  includeProduct(){
    const sale = {...emptySale};
    this.cashierProducts.push(sale);
  }

  recalculateTotalCashier(){
    const result = [];
    let totalCashierValue = 0;

    for(let item of this.cashierProducts){
      const product = this.products.find(x => x.id === Number(item.product_id)) ?? {price: 0};
      totalCashierValue += (item.amount * product.price);
      item.partial_value = (item.amount * product.price).toFixed(2);
      result.push(item);
    }

    this.cashierProducts = result;
    this.totalCashier = totalCashierValue.toFixed(2);
  }

  saveSale(){
    const idxDate = new Date().toISOString();
    for(let item of this.cashierProducts)
      item.idDate = idxDate;

    addAndSaveSales(this.cashierProducts.filter(x => x.amount > 0));

    alert("Venda registrada com sucesso!");
    location.reload();
  }
}
