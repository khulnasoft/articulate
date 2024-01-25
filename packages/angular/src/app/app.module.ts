import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuilderModule } from './modules/builder/builder.module';
import { BuilderService } from './modules/builder/services/builder.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BuilderModule.forRoot('VQ7kLiTnpLQvaokXJSed'),
    AppRoutingModule,
    BrowserTransferStateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(builder: BuilderService) {
    builder.setUserAttributes({
      locale: 'us',
      userIsLoggedIn: false,
    });
  }
}
