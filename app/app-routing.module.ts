//之前的RouterModule.forRoot()产生一个Angular ModuleWithProviders，所以这个路由类应该是一种模块类。 它应该是一个路由模块。
//路由模块的名字应该包含 “Routing”，并与导航到的组件所在的模块的名称看齐。

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //我们希望在浏览器的地址栏看到一个好看的 URL，
                                                             // 比如/dashboard。 记住，浏览器启动时，在地址栏中使用的路径是/。
                                                             //pathMatch告诉路由器如何把URL和路由中的路径进行匹配
  { path: 'dashboard',  component: DashBoardComponent },
  { path: 'detail/:id', component: HeroDetailComponent }, //冒号 (:) 表示:id是一个占位符
  { path: 'heroes',     component: HeroesComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}



