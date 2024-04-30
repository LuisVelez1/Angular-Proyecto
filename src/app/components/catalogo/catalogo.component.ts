import { ApiService } from '../../services/api-services.service';
import { Product } from '../../Dto/Product.dto';
import { Component } from '@angular/core';
import { CartServicesService } from '../../services/cart-services.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent {

  public productos: Product[] = [];

  constructor(
    private cartServicesService: CartServicesService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
      this.apiService.getProducts()
        .subscribe((res: any) => {
          this.productos = res;
        });
  }
  

  // crea un método para añadir un producto al carrito
  
  addToCart(product: any) { 
    this.cartServicesService.addToCart(product)
    console.log(this.cartServicesService.getCart());
    
  }

}

