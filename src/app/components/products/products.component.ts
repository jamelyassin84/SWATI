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

	getProducts() {
		new BaseService(this.service.http, EndPoints.products, '')
			.index()
			.subscribe((data) => {
				console.log(data)
			})
	}
}
