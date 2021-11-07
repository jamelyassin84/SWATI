import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { PromotionsComponent } from './components/promotions/promotions.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { ContentComponent } from './components/content/content.component'
import { SignUpComponent } from './components/sign-up/sign-up.component'
import { VipAccessComponent } from './components/vip-access/vip-access.component'
import { ProductsComponent } from './components/products/products.component'
import { HomeComponent } from './pages/home/home.component'
import { ViewProductComponent } from './pages/view-product/view-product.component'
import { ItemComponent } from './pages/item/item.component'
import { BannerComponent } from './components/banner/banner.component'
import { ItemCardComponent } from './components/item-card/item-card.component'

@NgModule({
	declarations: [
		AppComponent,
		PromotionsComponent,
		NavbarComponent,
		ContentComponent,
		SignUpComponent,
		VipAccessComponent,
		ProductsComponent,
		ViewProductComponent,
		ItemComponent,
		HomeComponent,
		BannerComponent,
		ItemCardComponent,
	],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
