import {Component, OnInit} from  '@angular/core';
import { Hero } from './hero';
import {HeroService} from './hero.service';

@Component({
  moduleId:module.id, //moduleId: 为与模块相关的 URL（例如templateUrl）提供基地址。
  selector:'my=dashboard',
  templateUrl:'dashboard.component.html',
  template:`
           <h3>Top Heroes</h3>
   <div class="grid grid-pad">
       <div *ngFor="let hero of heroes" class="col-1-4">
           <div class="module hero">
           <h4>{{hero.name}}</h4>
           </div>
       </div>
   </div>`
})


export class DashBoardComponent implements OnInit{
  heroes:Hero[]=[];

  constructor(private heroService:HeroService){}

  ngOnInit():void
  {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(2, 3));
  }
  /*创建一个heroes数组属性。
在构造函数中注入HeroService，并且把它保存在一个私有的heroService字段中。
在 Angular 的ngOnInit生命周期钩子里面调用服务来获得英雄数据
 在仪表盘中我们用Array.slice方法提取了四个英雄（第2、3、4、5个）。*/
}
