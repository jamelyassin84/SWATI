import { ViewProductComponent } from './pages/view-product/view-product.component'
import { HomeComponent } from './pages/home/home.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ItemComponent } from './pages/item/item.component'

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	},
	{
		path: 'home',
		component: HomeComponent,
	},
	{
		path: 'product/:id',
		component: ViewProductComponent,
	},
	{
		path: 'item/:id',
		component: ItemComponent,
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
