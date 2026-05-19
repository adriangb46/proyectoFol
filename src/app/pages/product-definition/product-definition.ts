import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  name: string;
  category: 'keyring' | 'articulated' | 'decoration';
  description: string;
  price: number;
  weight: number; // in grams
  time: string; // print duration
  material: string;
  image: string;
  salesVolume: number;
  totalRevenue: number;
}

@Component({
  selector: 'app-product-definition',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-definition.html',
  styleUrl: './product-definition.css',
})
export class ProductDefinition {
  selectedCategory: string = 'all';

  products: Product[] = [
    {
      name: 'Llavero Capibara con Tortuga',
      category: 'keyring',
      description: 'Llavero articulado de capibara impreso en 3D con un mini caparazón de tortuga en su lomo. Incluye anilla metálica y es perfecto para mochilas o llaves.',
      price: 3.00,
      weight: 12,
      time: '22 min',
      material: 'PLA Reciclable Gris',
      image: '/capibara.jpg',
      salesVolume: 100,
      totalRevenue: 300
    },
    {
      name: 'Tiburón Articulado Flexi',
      category: 'articulated',
      description: 'Figura de tiburón con diseño articulado que permite movimientos flexibles y realistas. Ideal como juguete antiestrés o decoración marina.',
      price: 4.00,
      weight: 15,
      time: '30 min',
      material: 'PLA Biodegradable Verde',
      image: '/tiburon.jpg',
      salesVolume: 75,
      totalRevenue: 300
    },
    {
      name: 'Dinosaurio T-Rex Articulado',
      category: 'articulated',
      description: 'Tiranosaurio Rex con extremidades y cola completamente articuladas impreso en un solo bloque (print-in-place). Divertido, interactivo y duradero.',
      price: 6.00,
      weight: 25,
      time: '50 min',
      material: 'PLA Biodegradable Verde',
      image: '/t-rex.jpg',
      salesVolume: 100,
      totalRevenue: 600
    },
    {
      name: 'Figura Jirafa "Baby" Deco',
      category: 'decoration',
      description: 'Adorable jirafa de escritorio estilo "chibi" con textura rugosa por capas. Un elemento decorativo único con color morado vibrante.',
      price: 6.00,
      weight: 30,
      time: '1h 00min',
      material: 'PLA Mate Púrpura',
      image: '/jirafa.jpg',
      salesVolume: 50,
      totalRevenue: 300
    }
  ];

  get filteredProducts() {
    if (this.selectedCategory === 'all') {
      return this.products;
    }
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  setCategory(category: string) {
    this.selectedCategory = category;
  }
}
