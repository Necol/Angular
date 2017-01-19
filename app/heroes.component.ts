import {Component, OnInit} from '@angular/core';
import { Hero } from  './hero';
import {HeroService} from "./hero.service";
import {Router} from "@angular/router";




@Component({
  moduleId:module.id,
  selector: 'my-heroes',
  templateUrl:'heroes.component.html',
  styleUrls:[ 'heroes.component.css' ]
})
/*export class AppComponent implements OnInit{
  title = 'Tour of Heroes';
  heroes = Hero;
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };

  constructor(private heroSerivce:HeroService){};
  //注入器
  //1添加一个构造函数，并定义一个私有属性。并把它标记为注入HeroService的靶点
  //2添加组件的providers元数据。

  getHeroes(): void {
    this.heroes = this.heroSerivce.getHeroes();//子类方法覆盖父类方法？不确定子类方法覆盖父类方法？不确定
  }
    //this.heroSerivce.getHeroes().then(heroes => this.heroes = heroes);//这里是异步服务承诺，实在看不懂



  ngOnInit():void{
     this.getHeroes();//以上方法已经获取了数据，但还在方法中，无法弄到heroes中去用，需要调用方法赋值给heroes
                      //ngOnInit现在出现不仅能调用方法而且具有生命周期：关键时间点：刚创建时、每次变化时，以及最终被销毁时
                     //ngOnInit生命周期钩子，以便在AppComponent激活时获取英雄数据
   };
}*/
/*
<my-hero-detail [hero]="selectedHero"></my-hero-detail>
  注意，hero是属性绑定的目标 — 它位于等号 (=) 左边方括号中
Angular 希望我们把目标属性声明为组件的输入属性，否则，Angular 会拒绝绑定，并抛出错误。
*/


export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService,
              private router:Router) { }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  gotoDetail():void{
    this.router.navigate(['/detail', this.selectedHero.id]); //将一个包含两个元素的链接参数数组 — 路径和路由参数 — 传递到router.navigate
  }
}
