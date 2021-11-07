import { Component, OnInit } from '@angular/core'
import {
	ActivatedRoute,
	ActivatedRouteSnapshot,
	ParamMap,
} from '@angular/router'
import { EndPoints } from 'src/app/services/Api'
import { BaseService } from 'src/app/services/base.service'

@Component({
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
	constructor(private service: BaseService, private route: ActivatedRoute) {
		this.route.paramMap.subscribe((params: ParamMap) => {
			this.product = params.get('id')
		})
	}

	product!: any

	productInfo: any = {}

	ngOnInit(): void {
		this.getProduct()
	}

	getProduct() {
		new BaseService(this.service.http, EndPoints.products, '')
			.show(this.product)
			.subscribe((data) => {
				this.productInfo = data.product
				console.log(data.product)
			})
	}
}
