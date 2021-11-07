import { Component, OnInit } from '@angular/core'

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
	constructor() {}

	hideNav = false
	ngOnInit(): void {
		setInterval(() => {
			if (localStorage.getItem('hideNav') !== 'true') {
				this.hideNav = true
			} else {
				this.hideNav = false
			}
		}, 50)
	}
}
