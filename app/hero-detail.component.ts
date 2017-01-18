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
           @Input()   //因为父元素要求被关联的属性为输入属性，input将hero设置为输出属性，这样才能在父元素当成输入属性
            hero:Hero; //这里的Input是装饰器
}
