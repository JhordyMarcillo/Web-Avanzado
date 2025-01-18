import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-operaciones-inventario',
  imports: [ReactiveFormsModule, CommonModule, RouterLink, RouterOutlet],
  templateUrl: './operaciones-inventario.component.html',
  styleUrl: './operaciones-inventario.component.css'
})
export class OperacionesInventarioComponent {

  mensajeResultado = '';
  listaInventario: any[] = [
    { id: '1', nombre: 'Zapato Nike', color: 'Negro', talla: 40, marca: 'Nike', precioUnitario: 50, stockInicial: 10 },
    { id: '2', nombre: 'Zapato Puma', color: 'Blanco', talla: 42, marca: 'Adidas', precioUnitario: 60, stockInicial: 20 }
  ];

  formularioOperacion = new FormGroup({
    productoId: new FormControl('', [Validators.required]),
    tipoOperacion: new FormControl('entrada', [Validators.required]),
    cantidad: new FormControl('', [Validators.required, Validators.min(1)]),
    fecha: new FormControl('', [Validators.required])
  });

  realizarOperacion() {
    if (this.formularioOperacion.valid) {
      const { productoId, tipoOperacion, cantidad } = this.formularioOperacion.value;
      const producto = this.listaInventario.find(item => item.id === productoId);

      if (!producto) {
        this.mensajeResultado = 'Producto no encontrado.';
        return;
      }

      const cantidadNumerica = Number(cantidad);

      if (tipoOperacion === 'salida' && cantidadNumerica > producto.stockInicial) {
        this.mensajeResultado = 'Error: La cantidad excede el stock disponible.';
        return;
      }

      if (tipoOperacion === 'entrada') {
        producto.stockInicial += cantidadNumerica;
      } else if (tipoOperacion === 'salida') {
        producto.stockInicial -= cantidadNumerica;
      }

      this.mensajeResultado = `Operación registrada correctamente. Nuevo stock: ${producto.stockInicial}`;
      this.formularioOperacion.reset({ tipoOperacion: 'entrada' });
    } else {
      this.mensajeResultado = 'Por favor, complete el formulario correctamente.';
    }
  }
}
