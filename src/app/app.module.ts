import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { BackendComponent } from './backend/backend.component';

@NgModule({
  declarations: [ // 将 app 目录下所有组件都注册到 app.module 中来
    AppComponent, IndexComponent, AboutComponent, BackendComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy}  // 使用哈希地址
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
