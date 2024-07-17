import {Route, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {ProductsComponent} from "./products/products.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";

export const routes: Route[] = [
  { path: '', component: HomeComponent }, // Página principal
  { path: 'about', component: AboutComponent }, // Página "About"
  { path: 'contact', component: ContactComponent }, // Página de contacto
  { path: 'products', component: ProductsComponent }, // Página de productos
  { path: 'product/:id', component: ProductDetailComponent }, // Página de detalles del producto
  { path: '**', redirectTo: '' } // Ruta para manejar rutas no encontradas
];
