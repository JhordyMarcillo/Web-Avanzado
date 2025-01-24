import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import {FloatLabel} from 'primeng/floatlabel';
import {Dialog} from 'primeng/dialog';
import { RouterOutlet } from '@angular/router';
import {ToastModule} from 'primeng/toast'; 
import { Ripple } from 'primeng/ripple';


@Component({
  selector: 'app-root',
  imports: [
    TableModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    FloatLabel,
    FormsModule,
    RouterOutlet, 
    Dialog,
    ToastModule,
    Ripple
  ],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Conjunta';

  products: any[] = []; 
  filteredProducts: any [] = []; 
  searchKeyword = '';
  productDialog = false;
  selectedProduct: any = {}; 
  categories = ['Electrónica', 'Ropa', 'Alimentos', 'Deportes']; 

  constructor(private messageService: MessageService) {
    this.products = [
      { id: 1, name: 'Laptop', category: 'Electrónica', quantity: 10 },
      { id: 2, name: 'Camiseta', category: 'Ropa', quantity: 50 },
      { id: 3, name: 'Pan', category: 'Alimentos', quantity: 100 },
      { id: 4, name: 'Smartphone', category: 'Electrónica', quantity: 30 },
      { id: 5, name: 'Jeans', category: 'Ropa', quantity: 40 },
      { id: 6, name: 'Manzanas', category: 'Alimentos', quantity: 200 },
      { id: 7, name: 'Televisor', category: 'Electrónica', quantity: 15 },
      { id: 8, name: 'Chaqueta', category: 'Ropa', quantity: 25 },
      { id: 9, name: 'Leche', category: 'Alimentos', quantity: 150 },
      { id: 10, name: 'Tablet', category: 'Electrónica', quantity: 20 },
      { id: 11, name: 'Pantalón', category: 'Ropa', quantity: 60 },
      { id: 12, name: 'Arroz', category: 'Alimentos', quantity: 500 },
    ];
    this.filteredProducts = [...this.products]; 
  }


  filterProducts() {
    const keyword = this.searchKeyword.toLowerCase();
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(keyword) ||
      product.category.toLowerCase().includes(keyword)
    );
  }

  openDialog(editing: boolean, product: any = null) {
    this.productDialog = true;
    if (editing && product) {
      this.selectedProduct = { ...product };
    } else {
      this.selectedProduct = { name: '', category: '' }; 
    }
  }

  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Éxito',
      detail: 'El producto ha sido agregado exitosamente.',
    });
  }

  showError() {
    this.messageService.add({ 
      severity: 'error', 
      summary: 'Eliminado', 
      detail: 'El producto ha sido eliminado exitosamente' });
}

  saveProduct() {
    if (this.selectedProduct) {
      const index = this.products.findIndex(
        (p) => p.name === this.selectedProduct.name
      );

      if (index > -1) {

        this.products[index] = { ...this.selectedProduct };
        this.messageService.add({
          severity: 'success',
          summary: 'Actualización',
          detail: 'El producto ha sido actualizado exitosamente.',
        });
      } else {
        this.products.push({ ...this.selectedProduct });
        this.showSuccess();
      }

      this.updateTable();
      this.productDialog = false; 
    }
  }

  deleteProduct(product: any) {
    this.products = this.products.filter((p) => p !== product); 
    this.updateTable(); 
  }

  updateTable() {
    this.filteredProducts = [...this.products];
    this.searchKeyword = '';

    const paginator: any = document.querySelector('.p-paginator');
    if (paginator) {
      paginator.firstPage();
    }
  }

  hideDialog() {
    this.productDialog = false;
  }
}