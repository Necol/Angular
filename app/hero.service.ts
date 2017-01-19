import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';



@Injectable()//当 TypeScript 看到@Injectable()装饰器时，就会记下本服务的元数据。
             // 如果 Angular 需要往这个服务中注入其它依赖，就会使用这些元数据。

/*
export class HeroService{
  getHeroes(): Hero[]{
 return HEROES;
 }   //将一个函数的返回值给这个方法
  //将一个函数的返回值给这个方法

}
//不仅这个组件会被其他组件引用，而且做为服务类组件需要到根组件中去申请为providers
// 现在这个组件是一个服务类的组件类 返回给其他组件的是一个HeroService实例
*/



export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise<Hero[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getHeroes());
  }
}
