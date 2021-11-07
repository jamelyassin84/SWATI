import { Component, OnInit } from '@angular/core'
import { EndPoints } from 'src/app/services/Api'
import { BaseService } from 'src/app/services/base.service'

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
	constructor(private service: BaseService) {}

	ngOnInit(): void {
		this.getProducts()
	}

	products: any[] = []

	productsToShow = [
		'Lenses',
		'Lashes',
		'Make-ups',
		'Eyeliner',
		'Accessories',
		'Serums',
	]
	getProducts() {
		this.productsToShow.forEach((category: string) => {
			new BaseService(this.service.http, EndPoints.products, '')
				.post({
					limit: 1,
					skipFirst: 0,
					search: category,
				})
				.subscribe((data: any) => {
					this.products.push(data.products[0])
				})
			console.log(this.products)
		})
	}
}
