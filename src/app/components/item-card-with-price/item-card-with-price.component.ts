import { Component, Input, OnInit } from '@angular/core'

@Component({
	selector: 'app-item-card-with-price',
	templateUrl: './item-card-with-price.component.html',
	styleUrls: ['./item-card-with-price.component.scss'],
})
export class ItemCardWithPriceComponent implements OnInit {
	constructor() {}

	@Input() title!: string
	@Input() desc!: string
	@Input() price!: number
	@Input() origPrice!: number
	@Input() image!: string
	@Input() route!: string
	@Input() background!: string

	ngOnInit(): void {}
}
