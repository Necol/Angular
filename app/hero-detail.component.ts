import { Component,Input } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector:'my-hero-detail',
  template:`
            <div *ngIf="hero">
            <h2>{{hero.name}} details!</h2>
            <div>
                <label>id: </label>{{hero.id}}
            </div>
            <div>
               <label>name: </label>
                <input [(ngModel)]="hero.name" placeholder="name"/>
            </div>
            </div>`
})

export class HeroDetailComponent{
           @Input()   //属性声明为组件的输入属性
            hero:Hero; //这里的Input是装饰器
}
