import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './shared/config/router.config';
import { UsersModule } from './users/users.module';
import { MainHeaderComponent } from './shared/component/main-header/main-header.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { ProductModule } from './product/product.module';
import { PipesPipe } from './shared/pipes.pipe';
import { TrancatePipe } from './shared/pipes/trancate.pipe';
import { TruncatePipe } from './shared/pipes/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    FooterComponent,
    PipesPipe,
    TrancatePipe,
    TruncatePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    UsersModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
