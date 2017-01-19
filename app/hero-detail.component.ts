import {Component, Input, OnInit} from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { ActivatedRoute ,Params}  from '@angular/router' ;
import { Location }    from '@angular/common';
import 'rxjs/add/operator/switchMap'; // 导入switchMap运算符，之后会与路由参数Observable一起使用

@Component({
  moduleId:module.id,
  selector:'my-hero-detail',
  templateUrl:'hero-detail.component.html',
  styleUrls:['hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{
           //@Input()   //属性声明为组件的输入属性
            hero:Hero; //这里的Input是装饰器   因为双向通信的原则，这里的hero 已经是对象，具有id和name 的属性+值

     constructor(private heroService:HeroService,  //从ActivatedRoute服务的可观察对象params中取得id参数，
                 private route:ActivatedRoute,  // 并通过HeroService服务获取具有这个指定id的英雄数据
                 private location:Location){}

     ngOnInit():void{
       this.route.params
         .switchMap((params: Params) => this.heroService.getHero(+params['id']))
         .subscribe(hero => this.hero = hero);//switchMap运算符如何将可观察的路由参数中的 id 映射到一个新的Observable， 即HeroService.getHero方法的结果
     }     //如果用户在 getHero 请求执行的过程中再次导航这个组件，switchMap 再次调用HeroService.getHero之前， 会取消之前的请求。
           //英雄的id是数字，而路由参数的值总是字符串。 所以我们需要通过 JavaScript 的 (+) 操作符把路由参数的值转成数字。



     goBack(): void {
         this.location.back();
     }//使用之前注入的Location服务， 利用浏览器的历史堆栈，导航到上一步。
}


//通过双向通信的方法可以在同一个页面传送，但如果通过路由进行组件切换就不能
//实现 1 把英雄的id添加到 URL 中。当导航到一个id为 11 的英雄时  /detail/11
//2 将这个组件拥有自己的数据导入功能：注入服务   注意对Oninit接口的调用
//3 从ActivatedRoute服务的可观察对象params中取得id参数，并通过HeroService服务获取具有这个指定id的英雄数据
//4
