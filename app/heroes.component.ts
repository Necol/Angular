import {Component, OnInit} from '@angular/core';
import { Hero } from  './hero';
import {HeroService} from "./hero.service";




@Component({
  selector: 'my-heroes',
  template: `
    
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>  
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  providers: [HeroService]
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
  constructor(private heroService: HeroService) { }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
