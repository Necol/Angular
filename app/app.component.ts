import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
         <a routerLink="/dashboard">Dashboard</a>  
         <a routerLink="/heroes">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
}



// 1 此处删除了嵌入式的<my-heroes></my-heroes>改用路由

//2 当我们在点连接时，路由器就把激活的组件显示在<router-outlet>里面。

//3 锚标签中的[routerLink]绑定。 我们把RouterLink指令（ROUTER_DIRECTIVES中的另一个指令）绑定到一个字符串。
// 它将告诉路由器，当用户点击这个链接时，应该导航到哪里。

//AppComponent现在加上了路由器，并能显示路由到的视图了。
// 因此，为了把它从其它种类的组件中区分出来，我们称这类组件为路由器组件
