import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import {HeroService} from "./hero.service";



@NgModule({
  imports: [
    BrowserModule,
    FormsModule    //  引入外部模块内容 1FormsModule用于引用数据传送NgModul装饰器
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent //引入内部内容以供随时调用  1主模块通过my-hero-detail引用HeroDetailComponent
                                            // 2 因为hero.ts不是模块所以不用加载这里，可以直接引用
  ],
  bootstrap: [ AppComponent ],

})
export class AppModule { }
