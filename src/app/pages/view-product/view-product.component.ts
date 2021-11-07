import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { EndPoints } from 'src/app/services/Api'
import { BaseService } from 'src/app/services/base.service'

@Component({
	selector: 'app-view-product',
	templateUrl: './view-product.component.html',
	styleUrls: ['./view-product.component.scss'],
})
export class ViewProductComponent implements OnInit {
	constructor(private service: BaseService, private route: ActivatedRoute) {
		this.route.paramMap.subscribe((params: ParamMap) => {
			this.category = params.get('name')
		})
	}

	category: string | null = ''
	products: any[] = []
	categoryInfo: any = {}

	ngOnInit(): void {
		this.getCategory()
	}

	getCategory() {
		new BaseService(this.service.http, EndPoints.products, '')
			.post({
				search: this.category,
			})
			.subscribe((data) => {
				this.categoryInfo = data.products[0]
				this.products = data.products
				console.log(this.products)
			})
	}
}
