import { Directive, ElementRef, Input } from '@angular/core'

@Directive({
	selector: '[appResolveImage]',
})
export class ResolveImageDirective {
	constructor(private el: ElementRef) {
		setTimeout(() => {
			const images = this.el.nativeElement.src.split(',')
			if (images.length === 2) {
				this.el.nativeElement.src = images[0]
			}
		}, 500)
	}
}
