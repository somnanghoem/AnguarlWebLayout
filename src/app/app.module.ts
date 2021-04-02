import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutBlankComponent } from './layout/layout-blank/layout-blank.component';
import { LayoutTabComponent } from './layout/layout-tab/layout-tab.component';
import { MaterialModule } from './shared/material';

export function createTranslateLoader(http: HttpClient) {
  environment.production ? (() => '')() : console.log("language read.");
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LayoutBlankComponent,
    LayoutTabComponent,
  ],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
