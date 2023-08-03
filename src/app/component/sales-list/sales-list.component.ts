import { Component } from '@angular/core';
import { getProducts } from 'src/app/helpers/products';
import { deleteAndSaveSales, getGroupedSalesIds, getSales } from 'src/app/helpers/sale';
import { product } from 'src/app/interfaces/product';
import { sales } from 'src/app/interfaces/sales';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent {
  salesList: sales[][] = [];
  products: product[] = [];
  totalCashierDay = "";
  
  constructor() {
    const allSales = getSales();
    const aux = getGroupedSalesIds();
    
    for(let i of aux){
      const salesGroup = allSales.filter((x: sales) => x.idDate === i);
      this.salesList.push(salesGroup);
    }    

    this.products = getProducts();
    this.totalCashierDay = this.sumTotalCashier(allSales);
  }

  formatDate(date: string){  
      let result = "";
  
      const cDate = new Date(date);
      const day = `${cDate.getDate().toString().padStart(2, '0')}`;
      const month = `${(cDate.getMonth() + 1).toString().padStart(2, '0')}`;
      const year = `${cDate.getFullYear().toString()}`;
      const hour = `${cDate.getHours().toString().padStart(2, '0')}`;
      const minute = `${cDate.getMinutes().toString().padStart(2, '0')}`;
      
      const fDate = `${day}/${month}/${year}`;
      result = fDate;
      
      return result;
  }

  formatHour(date: string){  
      let result = "";
  
      const cDate = new Date(date);
      const day = `${cDate.getDate().toString().padStart(2, '0')}`;
      const month = `${(cDate.getMonth() + 1).toString().padStart(2, '0')}`;
      const year = `${cDate.getFullYear().toString()}`;
      const hour = `${cDate.getHours().toString().padStart(2, '0')}`;
      const minute = `${cDate.getMinutes().toString().padStart(2, '0')}`;
      
      const fDate = `${hour}:${minute}`;
      result = fDate;
      
      return result;
  }

  getProductName(product_id: number){
    return this.products.find(x => x.id === Number(product_id))?.name;
  }

  getProductValue(product_id: number){
    return this.products.find(x => x.id === Number(product_id))?.price;
  }

  getFormatedProductValue(product_id: number){
    return `${this.products.find(x => x.id === Number(product_id))?.price.toFixed(2)}`;
  }

  sumTotalCashier(sales: sales[]){
    let total = 0;

    for(let s of sales){

      total += s.amount * (this.getProductValue(s.product_id) ?? 0);
    }

    return total.toFixed(2);
  }

  deleteSales(sale: sales[]){
    if (confirm(`Deseja excluir a venda '${this.formatDate(sale?.[0].idDate)}'?`))
      deleteAndSaveSales(sale);

    location.reload();
  }

}
